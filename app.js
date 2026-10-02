/* Motor del sitio. No necesitas editar este archivo: todo sale de datos.js */
(function(){
"use strict";
var N = window.NEGOCIO;
var PAG = document.body.dataset.pagina || "inicio";

/* ---------- Utilidades ---------- */
function $(id){ return document.getElementById(id); }
function el(tag, cls, txt){ var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
function dinero(v){ return "$" + v.toFixed(2).replace(".", ","); }
function boton(cls, txt, label, fn){ var b = el("button", cls, txt); b.type = "button"; if (label) b.setAttribute("aria-label", label); if (fn) b.onclick = fn; return b; }

var IC = {
  mochila:'<path d="M6 10a6 6 0 0 1 12 0v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M9 5V4a3 3 0 0 1 6 0v1M9 14h6v4H9z"/>',
  cuaderno:'<rect x="6" y="3" width="13" height="18" rx="2"/><path d="M4 7h3M4 12h3M4 17h3M10 8h6M10 12h6"/>',
  lapiz:'<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
  paleta:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="8" r="1"/>',
  pincel:'<path d="M18 3l3 3-9 9-3-3z"/><path d="M9 12c-3 0-5 2-5 5 0 1.5-1 3-2 3 2 1 6 1 8-1 1.5-1.5 1.5-3.5 1-4z"/>',
  regla:'<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
  tijera:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 18M8.5 16.5L20 6"/>',
  carpeta:'<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  hojas:'<path d="M8 3h9l3 3v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M4 7v12a3 3 0 0 0 3 3h9M10 10h6M10 14h6"/>',
  calculadora:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  grapadora:'<path d="M3 15h18v4H3z"/><path d="M5 15V9a2 2 0 0 1 2-2h12l-2 8"/>',
  goma:'<path d="M9 3h6v4H9z"/><path d="M8 7h8l1 4v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9z"/><path d="M10 14h4"/>',
  estrella:'<path d="M12 3l2.6 5.6 6 .6-4.5 4 1.3 6L12 16.2 6.6 19.2l1.3-6-4.5-4 6-.6z"/>',
  libro:'<path d="M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1z"/><path d="M21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z"/>',
  mapa:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
  impresora:'<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  foto:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
  lista:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
  oferta:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  casa:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  bolsa:'<path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  tienda:'<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/>',
  moto:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17h6l3-6h-4M15 11l3 6M14 7h3"/>',
  billete:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/>',
  lupa:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  wa:'<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2s-1 .2-3.4-.8a11.6 11.6 0 0 1-4.5-4c-.3-.5-1-1.5-1-2.8s.7-2 1-2.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6a8 8 0 0 0 1.5 1.8 7 7 0 0 0 2 1.3c.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3s0 .8-.2 1.3z"/>'
};
function svg(k){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[k] || IC.cuaderno) + '</svg>'; }
function icono(k){ var i = el("i"); i.innerHTML = svg(k); return i; }

/* ---------- Datos ---------- */
if (N.colorPrincipal) document.documentElement.style.setProperty("--pino", N.colorPrincipal);
if (N.colorAcento) document.documentElement.style.setProperty("--resaltador", N.colorAcento);
var PROD = {}, TODOS = [];
N.secciones.forEach(function(s){ s.productos.forEach(function(p){ p.sec = s; PROD[p.id] = p; TODOS.push(p); }); });
var SEC = {}; N.secciones.forEach(function(s){ SEC[s.id] = s; });
function descuento(p){ return p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0; }

/* ---------- Pedido (se guarda entre páginas) ---------- */
var CLAVE = "pedido-" + N.nombre.toLowerCase().replace(/[^a-z0-9]+/g, "-");
var memoria = null;
function cargar(){ try { var s = localStorage.getItem(CLAVE); if (s) return JSON.parse(s); } catch(e){} return memoria || { items:{}, extras:[] }; }
function guardar(){ memoria = pedido; try { localStorage.setItem(CLAVE, JSON.stringify(pedido)); } catch(e){} }
var pedido = cargar();
if (!pedido.items) pedido.items = {};
if (!pedido.extras) pedido.extras = [];
Object.keys(pedido.items).forEach(function(k){ if (!PROD[k]) delete pedido.items[k]; });

var oyentes = [];
function avisar(){ guardar(); oyentes.forEach(function(f){ f(); }); }
function fijar(id, n){ if (n <= 0) delete pedido.items[id]; else pedido.items[id] = n; avisar(); }
function sumar(id, d){ var antes = pedido.items[id] || 0; fijar(id, antes + d); if (d > 0) { brinca(); if (!antes) mostrarAviso("Agregado: " + PROD[id].n); } }
function agregarExtra(x){ x.uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 6); pedido.extras.push(x); avisar(); brinca(); mostrarAviso("Agregado: " + x.n); }
function quitarExtra(uid){ pedido.extras = pedido.extras.filter(function(x){ return x.uid !== uid; }); avisar(); }
function totales(){
  var cant = 0, total = 0, archivos = false;
  Object.keys(pedido.items).forEach(function(k){ var p = PROD[k], n = pedido.items[k]; cant += n; total += n * p.precio; if (p.sec.archivos) archivos = true; });
  pedido.extras.forEach(function(x){ cant += 1; total += x.precio; if (x.archivos) archivos = true; });
  return { cant:cant, total:total, archivos:archivos };
}

/* ---------- WhatsApp ---------- */
function enviar(texto){
  if (!N.whatsapp) {
    alert("Esto es un ejemplo.\n\nEn la página de tu negocio, este botón abre tu WhatsApp con este mensaje listo:\n\n" + texto);
    return;
  }
  window.open("https://wa.me/" + N.whatsapp + "?text=" + encodeURIComponent(texto), "_blank");
}

/* ---------- Estructura común ---------- */
var PAGINAS = [{ id:"inicio", href:"index.html", nombre:"Inicio", icono:"casa" }]
  .concat(N.secciones.map(function(s){ return { id:s.id, href:s.pagina, nombre:s.nombre.split(" ")[0] === "Útiles" ? "Escolar" : s.nombre.split(" ")[0], icono:s.icono }; }))
  .concat([{ id:"lista", href:"lista-escolar.html", nombre:"Lista escolar", icono:"lista" }, { id:"ofertas", href:"ofertas.html", nombre:"Ofertas", icono:"oferta" }]);

function armarEstructura(){
  var cuerpo = document.body;
  if (!N.whatsapp) cuerpo.appendChild(el("div", "demo", "Página de ejemplo: así se vería con el nombre, productos y precios de tu negocio"));

  var top = el("header", "top"), w = el("div", "wrap");
  var marca = el("a", "marca"); marca.href = "index.html";
  var logo = el("span", "logo"); logo.innerHTML = svg("libro"); marca.appendChild(logo);
  var txt = el("div"); txt.appendChild(el("b", "", N.nombre));
  var h = new Date().getHours() + new Date().getMinutes() / 60, ab = h >= N.abre && h < N.cierra;
  var est = el("span"); var pt = el("i", "punto" + (ab ? " on" : "")); est.appendChild(pt);
  est.appendChild(document.createTextNode((ab ? "Abierto" : "Cerrado") + " · " + N.zona));
  txt.appendChild(est); marca.appendChild(txt); w.appendChild(marca);
  var car = el("a", "carrito"); car.href = "pedido.html"; car.setAttribute("aria-label", "Ver mi pedido"); car.innerHTML = svg("bolsa");
  var badge = el("span", "badge"); badge.id = "badge"; car.appendChild(badge); w.appendChild(car);
  top.appendChild(w); cuerpo.appendChild(top);

  var menu = el("nav", "menu"); menu.setAttribute("aria-label", "Secciones"); var mw = el("div", "wrap");
  PAGINAS.forEach(function(p){
    var a = el("a"); a.href = p.href; a.innerHTML = svg(p.icono); a.appendChild(document.createTextNode(p.nombre));
    if (p.id === PAG) { a.className = "activo"; a.setAttribute("aria-current", "page"); }
    mw.appendChild(a);
  });
  menu.appendChild(mw); cuerpo.appendChild(menu);

  var main = el("main"); main.id = "app"; cuerpo.appendChild(main);
  cuerpo.appendChild(el("footer", "", N.nombre + ". Precios referenciales, sujetos a disponibilidad."));

  var barra = el("div", "barra"); barra.id = "barra"; cuerpo.appendChild(barra);

  var fondo = el("div", "fondo"); fondo.id = "fondo";
  var hoja = el("div", "hoja"); hoja.setAttribute("role", "dialog"); hoja.setAttribute("aria-modal", "true"); hoja.id = "hoja";
  fondo.appendChild(hoja); cuerpo.appendChild(fondo);
  fondo.addEventListener("click", function(e){ if (e.target === fondo) cerrarHoja(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") cerrarHoja(); });

  var aviso = el("div", "aviso"); aviso.id = "aviso"; aviso.setAttribute("role", "status");
  cuerpo.appendChild(aviso);

  var activo = mw.querySelector(".activo");
  if (activo) mw.scrollLeft = activo.offsetLeft - 16;
  return main;
}

function pintarComun(){
  var t = totales(), b = $("badge");
  b.textContent = t.cant; b.hidden = !t.cant;
  var barra = $("barra"); barra.innerHTML = "";
  if (PAG === "pedido") { barra.hidden = true; return; }
  if (t.cant) {
    var a = el("a"); a.href = "pedido.html";
    a.appendChild(el("span", "cnt", t.cant)); a.appendChild(el("span", "txt", "Ver mi pedido")); a.appendChild(el("span", "tot", dinero(t.total)));
    barra.appendChild(a);
  } else {
    var c = el("span", "cnt"); c.innerHTML = svg("wa");
    var bt = boton("", null, null, function(){ enviar("Hola " + N.nombre + ", tengo una consulta."); });
    bt.appendChild(c); bt.appendChild(el("span", "txt", "Escríbenos por WhatsApp"));
    barra.appendChild(bt);
  }
}
oyentes.push(pintarComun);

function brinca(){ var b = $("badge"); b.classList.remove("salta"); void b.offsetWidth; b.classList.add("salta"); }
var tAviso;
function mostrarAviso(msg){
  var a = $("aviso"); a.innerHTML = "";
  a.appendChild(el("span", "", msg));
  if (PAG !== "pedido") { var l = el("a", "", "Ver pedido"); l.href = "pedido.html"; a.appendChild(l); }
  a.classList.add("ver"); clearTimeout(tAviso);
  tAviso = setTimeout(function(){ a.classList.remove("ver"); }, 2600);
}

/* ---------- Tarjeta de producto ---------- */
function controles(box, p){
  box.innerHTML = "";
  if (p.precio == null) { box.appendChild(boton("b-con", "Consultar", "Consultar " + p.n, function(e){ e.stopPropagation(); enviar("Hola " + N.nombre + ", quisiera consultar por: " + p.n + "."); })); return; }
  var n = pedido.items[p.id] || 0;
  if (!n) { box.appendChild(boton("b-add", "Agregar", "Agregar " + p.n, function(e){ e.stopPropagation(); sumar(p.id, 1); })); return; }
  var st = el("div", "step");
  st.appendChild(boton("", "−", "Quitar uno de " + p.n, function(e){ e.stopPropagation(); sumar(p.id, -1); }));
  st.appendChild(el("span", "", n));
  st.appendChild(boton("", "+", "Agregar otro " + p.n, function(e){ e.stopPropagation(); sumar(p.id, 1); }));
  box.appendChild(st);
}
oyentes.push(function(){ document.querySelectorAll(".acc[data-id]").forEach(function(b){ controles(b, PROD[b.dataset.id]); }); });

function imagen(p, grande){
  var d = el("div", "img"); d.style.setProperty("--t", p.sec.tinte);
  if (p.foto) { var im = el("img"); im.src = p.foto; im.alt = p.n; im.loading = "lazy"; d.appendChild(im); }
  else d.innerHTML = svg(p.i || p.sec.icono);
  if (p.antes) d.appendChild(el("span", "tag oferta", "-" + descuento(p) + "%"));
  else if (p.tag) d.appendChild(el("span", "tag", p.tag));
  return d;
}
function precio(p){
  var pr = el("div", "precio" + (p.precio == null ? " consulta" : ""));
  if (p.precio == null) pr.textContent = "Precio a consultar";
  else { pr.textContent = dinero(p.precio); if (p.u) pr.appendChild(el("em", "", p.u)); if (p.antes) pr.appendChild(el("s", "", dinero(p.antes))); }
  return pr;
}
function tarjeta(p){
  var c = el("article", "card");
  c.dataset.b = (p.n + " " + p.d + " " + (p.sub || "") + " " + p.sec.nombre).toLowerCase();
  c.appendChild(imagen(p));
  c.appendChild(el("h3", "", p.n));
  c.appendChild(el("p", "", p.d));
  c.appendChild(precio(p));
  var acc = el("div", "acc"); acc.dataset.id = p.id; controles(acc, p); c.appendChild(acc);
  c.addEventListener("click", function(){ verProducto(p); });
  return c;
}

/* ---------- Ventana de producto ---------- */
var ultimoFoco = null;
function abrirHoja(){ ultimoFoco = document.activeElement; $("fondo").classList.add("abierto"); document.body.style.overflow = "hidden"; var c = $("hoja").querySelector(".cerrar"); if (c) c.focus(); }
function cerrarHoja(){ $("fondo").classList.remove("abierto"); document.body.style.overflow = ""; if (ultimoFoco) ultimoFoco.focus(); }
function verProducto(p){
  var h = $("hoja"); h.innerHTML = "";
  h.setAttribute("aria-label", p.n);
  h.appendChild(boton("cerrar", "×", "Cerrar", cerrarHoja));
  h.appendChild(imagen(p, true));
  var s = el("a", "sec", p.sec.nombre + (p.sub ? " · " + p.sub : "")); s.href = p.sec.pagina; h.appendChild(s);
  h.appendChild(el("h2", "", p.n));
  h.appendChild(el("p", "desc", p.d));
  h.appendChild(precio(p));
  var compra = el("div", "compra");
  if (p.precio == null) {
    var bc = boton("btn btn-wa", null, null, function(){ enviar("Hola " + N.nombre + ", quisiera consultar por: " + p.n + "."); });
    bc.innerHTML = svg("wa"); bc.appendChild(document.createTextNode("Consultar disponibilidad"));
    compra.appendChild(bc);
  } else {
    var q = pedido.items[p.id] || 1;
    var st = el("div", "step"), num = el("span", "", q);
    var bt = boton("btn btn-pri");
    function pintarBtn(){ num.textContent = q; bt.textContent = (pedido.items[p.id] ? "Actualizar · " : "Agregar · ") + dinero(q * p.precio); }
    st.appendChild(boton("", "−", "Menos", function(){ if (q > 1) { q--; pintarBtn(); } }));
    st.appendChild(num);
    st.appendChild(boton("", "+", "Más", function(){ q++; pintarBtn(); }));
    bt.onclick = function(){ var nuevo = !pedido.items[p.id]; fijar(p.id, q); brinca(); mostrarAviso((nuevo ? "Agregado: " : "Actualizado: ") + p.n); cerrarHoja(); };
    pintarBtn();
    compra.appendChild(st); compra.appendChild(bt);
  }
  h.appendChild(compra);
  abrirHoja();
}

/* ---------- Encabezado de página ---------- */
function encabezado(main, titulo, desc, ico, tinte){
  var e = el("div", "encabezado"); if (tinte) e.style.setProperty("--t", tinte);
  var w = el("div", "wrap");
  var m = el("p", "migas"); var a = el("a", "", "Inicio"); a.href = "index.html"; m.appendChild(a); m.appendChild(document.createTextNode(" / " + titulo));
  w.appendChild(m);
  var h1 = el("h1"); h1.appendChild(icono(ico)); h1.appendChild(document.createTextNode(titulo)); w.appendChild(h1);
  if (desc) w.appendChild(el("p", "", desc));
  e.appendChild(w); main.appendChild(e);
  document.title = titulo + " · " + N.nombre;
}

/* ================= PÁGINAS ================= */
var PAGINA = {};

PAGINA.inicio = function(main){
  document.title = N.nombre;
  var hero = el("section", "hero"), w = el("div", "wrap");
  w.appendChild(el("h1", "", N.titular));
  w.appendChild(el("p", "", N.descripcion));
  var acc = el("div", "acciones");
  var a1 = el("a", "btn btn-pri", "Ver ofertas"); a1.href = "ofertas.html";
  var a2 = el("a", "btn btn-sec", "Cotizar lista escolar"); a2.href = "lista-escolar.html";
  acc.appendChild(a1); acc.appendChild(a2); w.appendChild(acc);
  var v = el("div", "ventajas");
  [["tienda", "Retiro en el local"]].concat(N.domicilio ? [["moto", "Entrega a domicilio"]] : []).concat([["billete", N.pagos]])
    .forEach(function(x){ var s = el("span"); s.innerHTML = svg(x[0]); s.appendChild(document.createTextNode(x[1])); v.appendChild(s); });
  w.appendChild(v); hero.appendChild(w); main.appendChild(hero);

  var wr = el("div", "wrap"); main.appendChild(wr);

  var b1 = el("section", "bloque"); var c1 = el("div", "cab"); c1.appendChild(el("h2", "", "¿Qué necesitas hoy?")); b1.appendChild(c1);
  var tiles = el("div", "tiles");
  var lt = el("a", "tile grande"); lt.href = "lista-escolar.html";
  lt.appendChild(icono("lista"));
  var ld = el("div"); ld.appendChild(el("b", "", "Arma tu lista escolar")); ld.appendChild(el("span", "", "Elige el nivel y te sugerimos todo lo que necesitas"));
  lt.appendChild(ld); lt.appendChild(el("small", "", "Empezar")); tiles.appendChild(lt);
  N.secciones.forEach(function(s){
    var t = el("a", "tile"); t.href = s.pagina; t.style.setProperty("--t", s.tinte);
    t.appendChild(icono(s.icono)); t.appendChild(el("b", "", s.nombre)); t.appendChild(el("span", "", s.desc));
    t.appendChild(el("small", "", s.archivos ? "Cotizar ahora" : "Ver " + s.productos.length + " productos"));
    tiles.appendChild(t);
  });
  var ofs = TODOS.filter(function(p){ return p.antes; });
  var to = el("a", "tile"); to.href = "ofertas.html"; to.style.setProperty("--t", "#fde6e2");
  to.appendChild(icono("oferta")); to.appendChild(el("b", "", "Ofertas")); to.appendChild(el("span", "", "Precios rebajados esta semana"));
  to.appendChild(el("small", "", ofs.length + " productos en oferta")); tiles.appendChild(to);
  b1.appendChild(tiles); wr.appendChild(b1);

  if (ofs.length) {
    var b2 = el("section", "bloque"); var c2 = el("div", "cab"); c2.appendChild(el("h2", "", "Ofertas de la semana"));
    var va = el("a", "", "Ver todas"); va.href = "ofertas.html"; c2.appendChild(va); b2.appendChild(c2);
    var car = el("div", "carrusel"); ofs.forEach(function(p){ car.appendChild(tarjeta(p)); }); b2.appendChild(car); wr.appendChild(b2);
  }
  var top = TODOS.filter(function(p){ return p.tag && !p.antes; });
  if (top.length) {
    var b3 = el("section", "bloque"); var c3 = el("div", "cab"); c3.appendChild(el("h2", "", "Lo más pedido")); b3.appendChild(c3);
    var car2 = el("div", "carrusel"); top.forEach(function(p){ car2.appendChild(tarjeta(p)); }); b3.appendChild(car2); wr.appendChild(b3);
  }

  var b4 = el("section", "bloque"); var f = el("div", "ficha"); f.appendChild(el("h2", "", "Visítanos"));
  [["Dirección", N.direccion], ["Horario", N.horario], ["Pagos", N.pagos]].concat(N.domicilio ? [["A domicilio", N.zonaDomicilio]] : [])
    .forEach(function(x){ var r = el("div", "fila"); r.appendChild(el("b", "", x[0])); r.appendChild(el("span", "", x[1])); f.appendChild(r); });
  if (N.mapa) { var r = el("div", "fila"); r.appendChild(el("b", "", "Cómo llegar")); var am = el("a", "", "Abrir en Google Maps"); am.href = N.mapa; am.target = "_blank"; am.rel = "noopener"; r.appendChild(am); f.appendChild(r); }
  b4.appendChild(f); wr.appendChild(b4);
};

PAGINA.categoria = function(main, s){
  encabezado(main, s.nombre, s.desc, s.icono, s.tinte);
  var wr = el("div", "wrap"); main.appendChild(wr);
  var herr = el("div", "herr");
  var bus = el("label", "buscar"); bus.innerHTML = svg("lupa");
  var inp = el("input"); inp.type = "search"; inp.placeholder = "Buscar en " + s.nombre.toLowerCase(); inp.setAttribute("aria-label", "Buscar"); bus.appendChild(inp);
  var sel = el("select"); sel.setAttribute("aria-label", "Ordenar");
  [["rel", "Recomendados"], ["asc", "Menor precio"], ["desc", "Mayor precio"], ["az", "De la A a la Z"]].forEach(function(o){ var op = el("option", "", o[1]); op.value = o[0]; sel.appendChild(op); });
  herr.appendChild(bus); herr.appendChild(sel); wr.appendChild(herr);

  var filtro = "Todos";
  var chips = el("div", "chips"); chips.setAttribute("role", "group"); chips.setAttribute("aria-label", "Filtrar");
  ["Todos"].concat(s.subs || []).forEach(function(nm){
    var n = nm === "Todos" ? s.productos.length : s.productos.filter(function(p){ return p.sub === nm; }).length;
    var b = boton(nm === "Todos" ? "activo" : "", nm); b.appendChild(el("small", "", n));
    b.setAttribute("aria-pressed", nm === "Todos");
    b.onclick = function(){ filtro = nm; chips.querySelectorAll("button").forEach(function(x){ x.classList.toggle("activo", x === b); x.setAttribute("aria-pressed", x === b); }); pintar(); };
    chips.appendChild(b);
  });
  if (s.subs && s.subs.length) wr.appendChild(chips); else wr.appendChild(el("div", "", "")).style.height = "16px";

  var grid = el("div", "grid"); wr.appendChild(grid);
  var vacio = el("p", "vacio", "No encontramos ese producto. Escríbenos y te decimos si lo tenemos."); wr.appendChild(vacio);
  var tarjetas = {}; s.productos.forEach(function(p){ tarjetas[p.id] = tarjeta(p); });

  function pintar(){
    var t = inp.value.trim().toLowerCase();
    var lista = s.productos.filter(function(p){ return (filtro === "Todos" || p.sub === filtro) && (!t || tarjetas[p.id].dataset.b.indexOf(t) > -1); });
    var o = sel.value, val = function(p){ return p.precio == null ? 9999 : p.precio; };
    if (o === "asc") lista.sort(function(a, b){ return val(a) - val(b); });
    if (o === "desc") lista.sort(function(a, b){ return val(b) - val(a); });
    if (o === "az") lista.sort(function(a, b){ return a.n.localeCompare(b.n, "es"); });
    grid.innerHTML = ""; lista.forEach(function(p){ grid.appendChild(tarjetas[p.id]); });
    vacio.hidden = lista.length > 0;
  }
  inp.addEventListener("input", pintar); sel.addEventListener("change", pintar);
  pintar();
};

PAGINA.copias = function(main, s){
  encabezado(main, s.nombre, "Calcula el precio de tus impresiones antes de venir. Luego nos mandas los archivos por WhatsApp.", s.icono, s.tinte);
  var wr = el("div", "wrap"); main.appendChild(wr);
  var bl = el("section", "bloque"); wr.appendChild(bl);
  var dos = el("div", "dos"); bl.appendChild(dos);
  var panel = el("div", "panel"); dos.appendChild(panel);
  var bn = PROD["copia-bn"], co = PROD["impr-color"], an = PROD["anillado"], pl = PROD["plastificado"];
  var est = { tipo:"bn", pag:10, juegos:1, caras:"una", acabado:"ninguno" };

  function seg(titulo, nombre, ops){
    var c = el("div", "campo"); c.appendChild(el("b", "", titulo));
    var g = el("div", "seg"); g.setAttribute("role", "radiogroup"); g.setAttribute("aria-label", titulo);
    ops.forEach(function(o){
      var l = el("label"); var i = el("input"); i.type = "radio"; i.name = nombre; i.value = o[0]; i.checked = est[nombre] === o[0];
      i.onchange = function(){ est[nombre] = o[0]; calcular(); };
      l.appendChild(i); l.appendChild(document.createTextNode(o[1])); if (o[2]) l.appendChild(el("small", "", o[2]));
      g.appendChild(l);
    });
    c.appendChild(g); return c;
  }
  function numero(titulo, nombre, max, sufijo){
    var c = el("div", "campo"); c.appendChild(el("b", "", titulo));
    var n = el("div", "num"), i = el("input"); i.type = "number"; i.min = 1; i.max = max; i.value = est[nombre]; i.inputMode = "numeric"; i.setAttribute("aria-label", titulo);
    function set(v){ v = Math.max(1, Math.min(max, parseInt(v, 10) || 1)); est[nombre] = v; i.value = v; calcular(); }
    n.appendChild(boton("", "−", "Menos", function(){ set(est[nombre] - 1); }));
    n.appendChild(i);
    n.appendChild(boton("", "+", "Más", function(){ set(est[nombre] + 1); }));
    n.appendChild(el("span", "", sufijo));
    i.addEventListener("change", function(){ set(i.value); });
    i.addEventListener("input", function(){ var v = parseInt(i.value, 10); if (v >= 1 && v <= max) { est[nombre] = v; calcular(); } });
    c.appendChild(n); return c;
  }
  panel.appendChild(seg("Tipo de impresión", "tipo", [["bn", "Blanco y negro", dinero(bn.precio) + " por hoja"], ["color", "A color", dinero(co.precio) + " por hoja"]]));
  panel.appendChild(numero("Páginas del documento", "pag", 999, "páginas"));
  panel.appendChild(numero("¿Cuántas copias del documento?", "juegos", 50, "juegos"));
  panel.appendChild(seg("Caras", "caras", [["una", "Una cara"], ["doble", "Doble cara", "Ahorra papel"]]));
  panel.appendChild(seg("Acabado", "acabado", [["ninguno", "Sin acabado"], ["grapado", "Grapado", "Gratis"], ["anillado", "Anillado", "+" + dinero(an.precio)], ["plastificado", "Plastificado", "+" + dinero(pl.precio) + "/hoja"]]));

  var lado = el("div", "pegado"); dos.appendChild(lado);
  var cuenta = el("div", "cuenta"); lado.appendChild(cuenta);
  var det = el("p"), tot = el("strong"), btn = boton("btn", "Agregar al pedido");
  cuenta.appendChild(det); cuenta.appendChild(tot); cuenta.appendChild(btn);
  lado.appendChild(el("p", "nota", "Después de enviar tu pedido, mándanos los archivos por el mismo chat de WhatsApp. El precio final se confirma al recibir tus archivos."));

  var resultado = {};
  function calcular(){
    var unit = est.tipo === "bn" ? bn.precio : co.precio;
    var paginas = est.pag * est.juegos;
    var hojas = est.caras === "doble" ? Math.ceil(est.pag / 2) * est.juegos : paginas;
    var total = paginas * unit;
    if (est.acabado === "anillado") total += an.precio * est.juegos;
    if (est.acabado === "plastificado") total += pl.precio * hojas;
    var partes = [est.pag + " pág.", est.juegos + (est.juegos > 1 ? " juegos" : " juego"), est.caras === "doble" ? "doble cara" : "una cara"];
    if (est.acabado !== "ninguno") partes.push(est.acabado);
    det.textContent = paginas + " páginas impresas en " + hojas + " hojas";
    tot.textContent = dinero(total);
    resultado = { n:(est.tipo === "bn" ? "Impresión B/N" : "Impresión a color"), d:partes.join(", "), precio:total, archivos:true };
  }
  btn.onclick = function(){ agregarExtra({ n:resultado.n, d:resultado.d, precio:resultado.precio, archivos:true }); };
  calcular();

  var b2 = el("section", "bloque"); var c2 = el("div", "cab"); c2.appendChild(el("h2", "", "Otros servicios")); b2.appendChild(c2);
  var g = el("div", "grid"); s.productos.forEach(function(p){ g.appendChild(tarjeta(p)); }); b2.appendChild(g); wr.appendChild(b2);
};

PAGINA.lista = function(main){
  encabezado(main, "Lista escolar", "Elige el nivel, quita lo que ya tienes y agrega todo al pedido de una vez.", "lista", "#fff4c7");
  var wr = el("div", "wrap"); main.appendChild(wr);

  var b1 = el("section", "bloque"); var p1 = el("div", "paso", "Elige el nivel"); p1.dataset.n = "1"; b1.appendChild(p1);
  var niv = el("div", "niveles"); niv.setAttribute("role", "radiogroup"); niv.setAttribute("aria-label", "Nivel");
  var actual = N.listas[0];
  N.listas.forEach(function(L, i){
    var l = el("label"), inp = el("input"); inp.type = "radio"; inp.name = "nivel"; inp.checked = i === 0;
    inp.onchange = function(){ actual = L; armar(); };
    l.appendChild(inp); l.appendChild(el("b", "", L.nombre)); l.appendChild(el("small", "", L.edades));
    niv.appendChild(l);
  });
  b1.appendChild(niv); wr.appendChild(b1);

  var b2 = el("section", "bloque"); var p2 = el("div", "paso", "Revisa tu combo"); p2.dataset.n = "2"; b2.appendChild(p2);
  var dos = el("div", "dos"); b2.appendChild(dos);
  var panel = el("div", "panel"); dos.appendChild(panel);
  var lado = el("div", "pegado"); dos.appendChild(lado);
  var cuenta = el("div", "cuenta"); lado.appendChild(cuenta);
  var det = el("p"), tot = el("strong"), btn = boton("btn", "Agregar combo al pedido");
  cuenta.appendChild(det); cuenta.appendChild(tot); cuenta.appendChild(btn);
  var otra = boton("btn btn-sec", null, null, function(){ enviar("Hola " + N.nombre + ", quiero cotizar mi lista escolar. Les envío la foto por aquí."); });
  otra.style.width = "100%"; otra.style.marginTop = "10px"; otra.innerHTML = svg("foto"); otra.appendChild(document.createTextNode("¿Tu lista es distinta? Envía la foto"));
  lado.appendChild(otra);
  wr.appendChild(b2);

  var sel = {};
  function armar(){
    sel = {}; panel.innerHTML = "";
    actual.items.forEach(function(it){
      var p = PROD[it[0]]; if (!p || p.precio == null) return;
      sel[p.id] = { on:true, n:it[1] };
      var f = el("div", "fila-it");
      var cb = el("input"); cb.type = "checkbox"; cb.checked = true; cb.setAttribute("aria-label", "Incluir " + p.n);
      var nm = el("div", "nm", p.n), sub = el("small"); nm.appendChild(sub);
      var st = el("div", "step"), num = el("span", "", it[1]);
      function upd(){ num.textContent = sel[p.id].n; sub.textContent = dinero(p.precio) + " c/u · " + dinero(p.precio * sel[p.id].n); f.classList.toggle("off", !sel[p.id].on); totalizar(); }
      st.appendChild(boton("", "−", "Menos " + p.n, function(){ if (sel[p.id].n > 1) { sel[p.id].n--; upd(); } }));
      st.appendChild(num);
      st.appendChild(boton("", "+", "Más " + p.n, function(){ sel[p.id].n++; upd(); }));
      cb.onchange = function(){ sel[p.id].on = cb.checked; upd(); };
      f.appendChild(cb); f.appendChild(nm); f.appendChild(st); panel.appendChild(f);
      upd();
    });
    totalizar();
  }
  function totalizar(){
    var t = 0, c = 0;
    Object.keys(sel).forEach(function(k){ if (sel[k].on) { t += PROD[k].precio * sel[k].n; c += sel[k].n; } });
    det.textContent = "Combo " + actual.nombre + ": " + c + " útiles";
    tot.textContent = dinero(t);
    btn.disabled = !c; btn.style.opacity = c ? 1 : .5;
  }
  btn.onclick = function(){
    Object.keys(sel).forEach(function(k){ if (sel[k].on) pedido.items[k] = (pedido.items[k] || 0) + sel[k].n; });
    avisar(); brinca(); mostrarAviso("Combo " + actual.nombre + " agregado");
  };
  armar();
};

PAGINA.ofertas = function(main){
  var fin = new Date(); fin.setDate(fin.getDate() + ((7 - fin.getDay()) % 7));
  var fecha = fin.toLocaleDateString("es-EC", { weekday:"long", day:"numeric", month:"long" });
  encabezado(main, "Ofertas", "Precios rebajados, válidos hasta el " + fecha + " o hasta agotar stock.", "oferta", "#fde6e2");
  var wr = el("div", "wrap"); main.appendChild(wr);
  var ofs = TODOS.filter(function(p){ return p.antes; }).sort(function(a, b){ return descuento(b) - descuento(a); });
  var bl = el("section", "bloque");
  if (!ofs.length) bl.appendChild(el("p", "vacio", "Pronto tendremos nuevas ofertas."));
  else { var g = el("div", "grid"); ofs.forEach(function(p){ g.appendChild(tarjeta(p)); }); bl.appendChild(g); }
  wr.appendChild(bl);
};

PAGINA.pedido = function(main){
  encabezado(main, "Tu pedido", "Revisa todo y envíalo. Te confirmamos por WhatsApp.", "bolsa", "#eef4f2");
  var wr = el("div", "wrap"); main.appendChild(wr);
  var bl = el("section", "bloque"); wr.appendChild(bl);
  var form = { entrega:"Retiro en el local", nombre:"", nota:"" };

  function pintar(){
    bl.innerHTML = "";
    var t = totales();
    if (!t.cant) {
      var v = el("div", "vacio-grande"); v.appendChild(icono("bolsa"));
      v.appendChild(el("h2", "", "Tu pedido está vacío"));
      v.appendChild(el("p", "", "Elige una sección y agrega lo que necesitas."));
      var a = el("a", "btn btn-pri", "Ver secciones"); a.href = "index.html"; v.appendChild(a);
      bl.appendChild(v); return;
    }
    var dos = el("div", "dos"); bl.appendChild(dos);
    var panel = el("div", "panel"); dos.appendChild(panel);
    Object.keys(pedido.items).forEach(function(k){
      var p = PROD[k], n = pedido.items[k];
      var f = el("div", "fila-it");
      var nm = el("div", "nm", p.n); nm.appendChild(el("small", "", n + " × " + dinero(p.precio) + " = " + dinero(n * p.precio)));
      var acc = el("div", "acc"); acc.style.margin = "0"; acc.style.flex = "0 0 108px"; controles(acc, p);
      f.appendChild(nm); f.appendChild(acc); panel.appendChild(f);
    });
    pedido.extras.forEach(function(x){
      var f = el("div", "fila-it");
      var nm = el("div", "nm", x.n); nm.appendChild(el("small", "", x.d + " · " + dinero(x.precio)));
      f.appendChild(nm); f.appendChild(boton("quitar", "Quitar", "Quitar " + x.n, function(){ quitarExtra(x.uid); }));
      panel.appendChild(f);
    });

    var lado = el("div", "panel pegado"); dos.appendChild(lado);
    var c1 = el("div", "campo"); c1.appendChild(el("b", "", "¿Cómo lo recibes?"));
    var op = el("div", "opciones");
    ["Retiro en el local"].concat(N.domicilio ? ["Entrega a domicilio"] : []).forEach(function(o){
      var l = el("label"), i = el("input"); i.type = "radio"; i.name = "entrega"; i.value = o; i.checked = form.entrega === o;
      i.onchange = function(){ form.entrega = o; };
      l.appendChild(i); l.appendChild(document.createTextNode(o)); op.appendChild(l);
    });
    c1.appendChild(op); lado.appendChild(c1);
    var c2 = el("div", "campo"); c2.appendChild(el("b", "", "Tu nombre"));
    var nom = el("input", "texto"); nom.type = "text"; nom.placeholder = "Para tener listo tu pedido"; nom.autocomplete = "name"; nom.value = form.nombre;
    nom.oninput = function(){ form.nombre = nom.value; }; c2.appendChild(nom); lado.appendChild(c2);
    var c3 = el("div", "campo"); c3.appendChild(el("b", "", "Nota (opcional)"));
    var nt = el("textarea", "texto"); nt.placeholder = "Ej.: cuadernos de cuadros, esferos azules"; nt.value = form.nota;
    nt.oninput = function(){ form.nota = nt.value; }; c3.appendChild(nt); lado.appendChild(c3);
    if (t.archivos) lado.appendChild(el("p", "nota", "Después de enviar el pedido, mándanos por el mismo chat los archivos para imprimir."));
    var c4 = el("div", "campo"); var tt = el("div", "total"); tt.appendChild(el("span", "", "Total")); tt.appendChild(el("span", "", dinero(t.total))); c4.appendChild(tt); lado.appendChild(c4);
    var env = boton("btn btn-wa", null, null, enviarPedido); env.style.width = "100%"; env.style.padding = "15px";
    env.innerHTML = svg("wa"); env.appendChild(document.createTextNode("Enviar pedido por WhatsApp")); lado.appendChild(env);
    lado.appendChild(boton("vaciar", "Vaciar pedido", null, function(){ if (confirm("¿Vaciar todo el pedido?")) { pedido.items = {}; pedido.extras = []; avisar(); } }));
  }
  function enviarPedido(){
    var t = totales();
    var l = Object.keys(pedido.items).map(function(k){ var p = PROD[k]; return "• " + pedido.items[k] + " x " + p.n + " (" + dinero(pedido.items[k] * p.precio) + ")"; })
      .concat(pedido.extras.map(function(x){ return "• " + x.n + ": " + x.d + " (" + dinero(x.precio) + ")"; }));
    var msg = "Hola " + N.nombre + ", quiero hacer este pedido:\n" + l.join("\n") + "\n\nTotal: " + dinero(t.total) + "\nEntrega: " + form.entrega +
      (form.nombre.trim() ? "\nNombre: " + form.nombre.trim() : "") + (form.nota.trim() ? "\nNota: " + form.nota.trim() : "") +
      (t.archivos ? "\n\nLes envío por aquí los archivos para imprimir." : "");
    enviar(msg);
  }
  oyentes.push(pintar);
  pintar();
};

/* ---------- Arranque ---------- */
var main = armarEstructura();
if (PAG === "inicio") PAGINA.inicio(main);
else if (PAG === "lista") PAGINA.lista(main);
else if (PAG === "ofertas") PAGINA.ofertas(main);
else if (PAG === "pedido") PAGINA.pedido(main);
else if (SEC[PAG]) { if (SEC[PAG].archivos) PAGINA.copias(main, SEC[PAG]); else PAGINA.categoria(main, SEC[PAG]); }
pintarComun();

window.addEventListener("storage", function(e){ if (e.key === CLAVE) { pedido = cargar(); oyentes.forEach(function(f){ f(); }); } });
})();
