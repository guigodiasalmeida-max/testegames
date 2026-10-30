/* Página inicial: cartuchos do destaque, catálogo, pesquisa e filtros. */
(function () {
  const G = window.PIXELNEST_GAMES || [];
  const $ = (s) => document.querySelector(s);
  const norm = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const url = (g) => "jogos/" + g.slug + "/index.html";
  const grid = $("#grid"), input = $("#busca"), chips = $("#chips"), count = $("#count"), empty = $("#vazio"), clear = $("#limpar"), carts = $("#carts");
  let cat = "Todos";
  const total = document.getElementById("catalog-total");
  if (total) total.textContent = String(G.length).padStart(2, "0");

  G.slice(0, 3).forEach((g) => {
    const a = document.createElement("a");
    a.className = "cart"; a.href = url(g); a.setAttribute("aria-label", "Jogar " + g.titulo);
    a.appendChild(PN.cover(g, true));
    const t = document.createElement("span"); t.textContent = g.titulo; a.appendChild(t);
    carts.appendChild(a);
  });

  const PAGE_SIZE = 12;
  let shown = PAGE_SIZE;
  const makeCard = (g) => {
    const el = document.createElement("article");
    el.className = "card px";
    const slot = document.createElement("div"); slot.className = "cover-slot"; slot.appendChild(PN.cover(g));
    const body = document.createElement("div"); body.className = "card-body";
    const tag = document.createElement("p"); tag.className = "tag"; tag.textContent = g.categoria;
    const heading = document.createElement("h3");
    const link = document.createElement("a"); link.className = "stretch"; link.href = url(g); link.textContent = g.titulo;
    heading.appendChild(link);
    const desc = document.createElement("p"); desc.className = "desc"; desc.textContent = g.descricao;
    const play = document.createElement("span"); play.className = "btn primary play"; play.setAttribute("aria-hidden", "true"); play.textContent = "Jogar";
    body.append(tag, heading, desc, play); el.append(slot, body);
    return el;
  };
  const more = document.getElementById("carregar-mais");

  const cats = ["Todos"].concat([...new Set(G.map((g) => g.categoria))]);
  cats.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = c; b.setAttribute("aria-pressed", String(c === cat));
    b.addEventListener("click", () => { cat = c; apply(); });
    chips.appendChild(b);
  });

  function apply(resetPage = true) {
    const q = norm(input.value);
    const matches = G.filter((g) => (cat === "Todos" || g.categoria === cat) && (!q || norm(g.titulo + " " + g.categoria + " " + g.descricao).includes(q)));
    if (resetPage) shown = PAGE_SIZE;
    const visible = matches.slice(0, shown);
    grid.replaceChildren(...visible.map(makeCard));
    chips.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", String(b.textContent === cat)));
    count.textContent = matches.length + (matches.length === 1 ? " jogo encontrado" : " jogos encontrados") + (q || cat !== "Todos" ? " nesta seleção" : " no catálogo");
    empty.hidden = matches.length > 0;
    clear.hidden = !(q || cat !== "Todos");
    if (more) { more.hidden = visible.length >= matches.length; more.textContent = "Carregar mais jogos (" + (matches.length - visible.length) + ")"; }
  }
  const reset = () => { input.value = ""; cat = "Todos"; apply(); };
  input.addEventListener("input", () => apply());
  input.addEventListener("keydown", (e) => { if (e.key === "Escape") reset(); });
  clear.addEventListener("click", () => { reset(); input.focus(); });
  if (more) more.addEventListener("click", () => { shown += PAGE_SIZE; apply(false); });
  $("#vazio-limpar").addEventListener("click", () => { reset(); input.focus(); });

  const focusSearch = () => { $("#jogos").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); input.focus({ preventScroll: true }); };
  const sb = document.getElementById("search-btn");
  if (sb) sb.addEventListener("click", (e) => { e.preventDefault(); history.replaceState(null, "", "#busca"); focusSearch(); });
  if (location.hash === "#busca") setTimeout(focusSearch, 50);
  apply();
})();
