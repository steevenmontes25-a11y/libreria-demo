/* =====================================================================
   DATOS DEL NEGOCIO
   Este es el ÚNICO archivo que cambias para cada cliente.
   - whatsapp vacío  = modo ejemplo (sale la franja amarilla de "ejemplo")
   - precio: número, o null si es "Consultar"
   - antes: precio anterior (si lo pones, el producto aparece en Ofertas)
   - u: unidad (opcional), ej. "por hoja"
   - tag: etiqueta (opcional), ej. "Más vendido"
   - foto: link o nombre de archivo de una imagen (opcional)
   - sub: subcategoría (para los filtros de cada sección)
   ===================================================================== */
var NEGOCIO = {
  nombre: "Tu Librería",
  zona: "Tu barrio, Quito",
  titular: "Útiles, copias e impresiones cerca de tu casa",
  descripcion: "Elige una sección, arma tu pedido y envíalo por WhatsApp. Lo tenemos listo para retirar o te lo llevamos.",
  direccion: "Aquí va la dirección de tu local",
  mapa: "",                 // link de Google Maps (vacío = no se muestra)
  whatsapp: "",             // 593 + número sin el 0, ej: 593991234567
  abre: 8, cierra: 20,      // horario en formato 24h (19.5 = 19:30)
  horario: "Lunes a domingo, de 8:00 a 20:00",
  domicilio: true,
  zonaDomicilio: "Entregas en el sector, costo según la distancia",
  pagos: "Efectivo o transferencia",
  colorPrincipal: "",       // ej. "#0f4c45" (vacío = color por defecto)
  colorAcento: "",          // ej. "#ffd84d"

  secciones: [
    { id:"escolar", pagina:"escolar.html", nombre:"Útiles escolares", icono:"mochila", tinte:"#fff4c7",
      desc:"Cuadernos, lápices, colores y geometría",
      subs:["Cuadernos","Escritura","Colores","Geometría"],
      productos:[
        { id:"cuad-uni", n:"Cuaderno universitario", d:"100 hojas, cuadros o líneas", precio:1.75, tag:"Más vendido", i:"cuaderno", sub:"Cuadernos" },
        { id:"cuad-esc", n:"Cuaderno escolar", d:"60 hojas, pasta dura", precio:1.10, i:"cuaderno", sub:"Cuadernos" },
        { id:"cuad-dib", n:"Cuaderno de dibujo", d:"40 hojas blancas", precio:1.30, i:"cuaderno", sub:"Cuadernos" },
        { id:"lapiz", n:"Lápiz HB", d:"Unidad", precio:0.35, i:"lapiz", sub:"Escritura" },
        { id:"esfero", n:"Esferos", d:"Azul, negro o rojo", precio:0.40, tag:"Más vendido", i:"lapiz", sub:"Escritura" },
        { id:"borrador", n:"Borrador y sacapuntas", d:"Combo", precio:0.60, i:"lapiz", sub:"Escritura" },
        { id:"pinturas", n:"Pinturas x12", d:"Colores largos", precio:2.50, i:"paleta", sub:"Colores" },
        { id:"marcadores", n:"Marcadores x10", d:"Punta fina", precio:2.80, antes:3.20, i:"paleta", sub:"Colores" },
        { id:"crayones", n:"Crayones x12", d:"Gruesos, para inicial", precio:1.50, i:"paleta", sub:"Colores" },
        { id:"regla", n:"Regla 30 cm", d:"Transparente", precio:0.50, i:"regla", sub:"Geometría" },
        { id:"escuadras", n:"Juego geométrico", d:"Regla, escuadras y graduador", precio:1.75, i:"regla", sub:"Geometría" },
        { id:"compas", n:"Compás", d:"Con lápiz incluido", precio:2.20, i:"regla", sub:"Geometría" },
        { id:"tijera", n:"Tijera escolar", d:"Punta redonda", precio:1.20, i:"tijera", sub:"Geometría" }
      ]},
    { id:"oficina", pagina:"oficina.html", nombre:"Oficina", icono:"carpeta", tinte:"#e4edf8",
      desc:"Papel, archivo y equipos para tu trabajo",
      subs:["Papel","Archivo","Equipos"],
      productos:[
        { id:"resma", n:"Resma de papel A4", d:"500 hojas, 75 g", precio:5.50, antes:6.00, i:"hojas", sub:"Papel" },
        { id:"block", n:"Block cuadriculado", d:"80 hojas", precio:1.20, i:"hojas", sub:"Papel" },
        { id:"postit", n:"Notas adhesivas", d:"Paquete de 100", precio:1.00, antes:1.30, i:"hojas", sub:"Papel" },
        { id:"carpeta", n:"Carpeta archivadora", d:"Lomo ancho", precio:2.75, i:"carpeta", sub:"Archivo" },
        { id:"folders", n:"Folders", d:"Paquete de 10", precio:1.80, i:"carpeta", sub:"Archivo" },
        { id:"sobres", n:"Sobres manila", d:"Paquete de 10", precio:1.50, i:"carpeta", sub:"Archivo" },
        { id:"grapadora", n:"Grapadora", d:"Incluye caja de grapas", precio:4.50, i:"grapadora", sub:"Equipos" },
        { id:"calc", n:"Calculadora básica", d:"12 dígitos", precio:6.00, antes:7.25, i:"calculadora", sub:"Equipos" },
        { id:"perforadora", n:"Perforadora", d:"2 huecos", precio:3.75, i:"grapadora", sub:"Equipos" }
      ]},
    { id:"arte", pagina:"arte.html", nombre:"Arte y manualidades", icono:"paleta", tinte:"#fde6e2",
      desc:"Pinturas, papeles y todo para decorar",
      subs:["Pintura","Papeles","Pegar y decorar"],
      productos:[
        { id:"temperas", n:"Témperas x6", d:"Colores básicos", precio:3.00, i:"paleta", sub:"Pintura" },
        { id:"pinceles", n:"Pinceles x5", d:"Varios grosores", precio:2.25, i:"pincel", sub:"Pintura" },
        { id:"acuarelas", n:"Acuarelas x12", d:"Pastilla con pincel", precio:3.50, antes:4.00, i:"paleta", sub:"Pintura" },
        { id:"cartulinas", n:"Cartulinas A4", d:"10 colores", precio:1.25, tag:"Más vendido", i:"hojas", sub:"Papeles" },
        { id:"fomix", n:"Fomix escarchado", d:"Pliego", precio:0.80, i:"hojas", sub:"Papeles" },
        { id:"crepe", n:"Papel crepé", d:"Pliego", precio:0.30, i:"hojas", sub:"Papeles" },
        { id:"goma", n:"Goma líquida", d:"250 ml", precio:1.50, i:"goma", sub:"Pegar y decorar" },
        { id:"silicona", n:"Barras de silicona", d:"Paquete de 10", precio:1.20, i:"goma", sub:"Pegar y decorar" },
        { id:"escarcha", n:"Escarcha", d:"Frasco, varios colores", precio:0.50, i:"estrella", sub:"Pegar y decorar" }
      ]},
    { id:"libros", pagina:"libros.html", nombre:"Libros", icono:"libro", tinte:"#ece6f7",
      desc:"Novelas, plan lector y libros de consulta",
      subs:["Juvenil","Plan lector","Consulta"],
      productos:[
        { id:"novelas", n:"Novelas juveniles", d:"Bestsellers y BookTok", precio:null, i:"libro", sub:"Juvenil" },
        { id:"manga", n:"Manga y cómics", d:"Pregunta por tu saga", precio:null, i:"libro", sub:"Juvenil" },
        { id:"plan", n:"Plan lector", d:"Libros por año escolar", precio:null, i:"libro", sub:"Plan lector" },
        { id:"dicc", n:"Diccionario escolar", d:"Español, tapa flexible", precio:6.50, i:"libro", sub:"Consulta" },
        { id:"ingles", n:"Diccionario inglés-español", d:"Edición escolar", precio:7.00, antes:8.00, i:"libro", sub:"Consulta" },
        { id:"atlas", n:"Atlas del Ecuador", d:"Mapas actualizados", precio:5.00, i:"mapa", sub:"Consulta" }
      ]},
    { id:"copias", pagina:"copias.html", nombre:"Copias e impresiones", icono:"impresora", tinte:"#e2f2ec", archivos:true,
      desc:"Cotiza tus impresiones al instante",
      productos:[
        { id:"copia-bn", n:"Copias B/N", d:"Tamaño A4", precio:0.05, u:"por hoja", tag:"Al instante", i:"impresora" },
        { id:"impr-color", n:"Impresión a color", d:"Tamaño A4", precio:0.25, u:"por hoja", i:"impresora" },
        { id:"anillado", n:"Anillado", d:"Hasta 100 hojas", precio:1.50, i:"cuaderno" },
        { id:"plastificado", n:"Plastificado", d:"Tamaño A4", precio:0.75, i:"hojas" },
        { id:"escaneo", n:"Escaneo a PDF", d:"Te lo enviamos por WhatsApp", precio:0.25, u:"por hoja", i:"impresora" },
        { id:"fotos", n:"Impresión de fotos", d:"Tamaño 10 x 15", precio:0.40, i:"foto" }
      ]}
  ],

  /* Combos de la página "Lista escolar" (usa los id de los productos) */
  listas: [
    { id:"inicial", nombre:"Inicial", edades:"3 a 5 años",
      items:[["crayones",1],["cuad-dib",2],["lapiz",2],["borrador",1],["tijera",1],["goma",1],["temperas",1]] },
    { id:"elemental", nombre:"2.º a 4.º", edades:"Básica elemental",
      items:[["cuad-esc",5],["lapiz",3],["borrador",1],["pinturas",1],["regla",1],["tijera",1],["goma",1]] },
    { id:"media", nombre:"5.º a 7.º", edades:"Básica media",
      items:[["cuad-esc",6],["cuad-dib",1],["esfero",3],["lapiz",2],["pinturas",1],["escuadras",1],["compas",1]] },
    { id:"superior", nombre:"8.º a 10.º", edades:"Básica superior",
      items:[["cuad-uni",6],["esfero",4],["lapiz",2],["escuadras",1],["compas",1],["calc",1]] },
    { id:"bachillerato", nombre:"Bachillerato", edades:"1.º a 3.º",
      items:[["cuad-uni",7],["esfero",4],["lapiz",2],["calc",1],["carpeta",1],["dicc",1]] }
  ]
};
