// Fuente de verdad de los prompts de imagen.
// Editar ESTE archivo y correr:  node scripts/generar-prompts.js
// Regenera data/nanobanana-prompts.json y data/nano/PROMPTS.md

const fs = require('fs');

// Ojo: las descripciones van en prosa, SIN el formato "PAPÁ (CARLOS):".
// Ese formato de etiqueta hacía que el generador dibujara los rótulos dentro de la ilustración.
const PAPA = "el papá es un hombre de unos 35 años, piel clara, cabello castaño oscuro corto y ondulado con volumen al frente, barba corta y bigote castaño oscuro bien recortados, cejas pobladas, ojos café oscuro, nariz recta, sonrisa cálida, complexión media, viste playera de manga corta verde oliva y pantalón de mezclilla azul";

const MAMA = "la mamá es una mujer de unos 33 años, piel clara, ojos café claro, cejas definidas, sonrisa suave, viste blusa morada de manga corta y pantalón de mezclilla azul; su cabello es castaño oscuro y ondulado y va SIEMPRE recogido en un chongo bajo y despeinado en la nuca, con dos mechones sueltos enmarcando el rostro — la mamá NUNCA lleva el cabello suelto ni sobre los hombros, el chongo se le ve claramente desde cualquier ángulo";

const HIJO = "el hijo es un niño de unos 7 años, piel clara, cabello castaño oscuro rizado abundante y despeinado, ojos café grandes y expresivos, mejillas sonrosadas, viste playera morada de manga corta y pantalón de mezclilla";

const SIN_TEXTO = "MUY IMPORTANTE: la ilustración no debe contener NINGÚN texto: ni letras, ni palabras, ni nombres, ni etiquetas, ni rótulos, ni títulos, ni subtítulos, ni marcas de agua. Solo la escena ilustrada, limpia";

const ESTILO = "ESTILO OBLIGATORIO: ilustración digital pintada a mano estilo libro de cuentos, semi-realista, trazo suave con textura visible de pincel, sombreado cálido y volumétrico, rostros expresivos con ojos grandes, paleta vino y morado profundo con dorado y acentos cálidos, fondo interior hogareño con textura, iluminación cálida difusa, calidad de póster educativo profesional, mismo trazo y misma paleta que la imagen de referencia";

// Las imágenes viejas del sitio eran panorámicas (800x437). Las tarjetas recortan a 200px de alto
// y el modal muestra la imagen completa, así que un 4:3 se ve desproporcionadamente alto.
const FORMATO = "FORMATO: imagen panorámica horizontal en proporción 16:9 (mucho más ancha que alta, tipo banner de 1200x675 píxeles), con la escena encuadrada de forma que se aproveche todo el ancho";

const NEGATIVO = "mamá con el cabello suelto, mamá con el pelo sobre los hombros, mamá sin chongo, formato vertical, formato cuadrado, imagen alta, texto, letras, palabras, nombres, etiquetas, rótulos, títulos, subtítulos, leyendas, marcas de agua, carteles con texto, arte vectorial, 3D, fotorrealista, anime, personajes distintos a la ficha, cambiar etnia o tono de piel, cambiar color o forma del cabello, quitar la barba al papá, soltar el chongo de la mamá, alisar el cabello del niño, paleta pastel, colores fríos, neón, manos deformes, sombras duras, fondo recargado";

const escenas_ep = [
  ["ep-1", "Confianza y Seguridad de Nosotros Mismos como Padres", "el papá y la mamá de pie muy juntos, seguros y sonrientes, con el hijo al frente abrazado por ambos; sala de estar acogedora con librero, lámpara encendida y cuadros familiares al fondo; postura firme y serena que transmite autoconfianza"],
  ["ep-2", "Detectar los Tipos de Comportamiento", "la mamá recostada de lado sobre la alfombra observando con atención al hijo que juega con bloques de colores; sobre ella flotan tres signos de interrogación dorados; sala de estar cálida; expresión de mamá curiosa y paciente"],
  ["ep-3", "El Por Qué y Para Qué del Comportamiento", "el hijo solo en primer plano, de pie, con la mano en la barbilla y expresión pensativa; un gran signo de interrogación dorado flotando a su lado; fondo de habitación infantil desenfocado; el niño aparece solo, sin ningún adulto en la escena"],
  ["ep-4", "Estimulación No Es lo Mismo que Elogio", "el hijo sentado a la mesa dibujando con crayones sobre una hoja; la mamá inclinada a su lado sosteniendo una estrella dorada brillante y mirándolo con orgullo; mesa de comedor con crayones de colores; luz cálida de tarde"],
  ["ep-5", "Cómo Hablar para que mi Hijo Escuche", "el papá en cuclillas a la altura del hijo, con las manos abiertas mientras le habla con calma; el niño lo mira a los ojos con atención; un pequeño globo de diálogo con un corazón rojo entre ambos; sala de estar cálida"],
  ["ep-6", "Cómo Escuchar para que mi Hijo Hable", "la mamá sentada con la barbilla apoyada en la mano escuchando con toda su atención al hijo, que habla y gesticula con entusiasmo; un globo de diálogo con un corazón rojo sale del niño; ambiente hogareño acogedor con cobija"],
  ["ep-7", "Consecuencias Naturales y Consecuencias Lógicas", "la mamá sentada en el suelo frente al hijo, señalando con gesto tranquilo y explicativo; el niño escucha sentado con las piernas cruzadas; a un costado dos pequeñas placas ilustradas, una con una plantita y otra con un reloj, integradas al fondo; luz cálida de habitación"]
];

const escenas_cd = [
  ["cd-1", "Autismo", "la mamá acompañando de cerca al hijo, que juega concentrado con piezas de rompecabezas de colores sobre una alfombra; ambiente ordenado, tranquilo y amable a los sentidos; una pieza de rompecabezas dorada flotando suavemente"],
  ["cd-2", "TDAH", "el papá acompañando con paciencia al hijo, lleno de energía y en movimiento; líneas de movimiento suaves alrededor del niño; el papá le pone la mano en el hombro para ayudarlo a enfocar la atención en una sola actividad sobre la mesa"],
  ["cd-3", "Diversidad Intelectual", "la mamá y el hijo armando juntos un rompecabezas grande sobre la mesa y celebrando una pieza que acaba de encajar; manos de la mamá guiando con delicadeza; corazones dorados pequeños flotando"],
  ["cd-4", "Síndrome de Down", "la mamá sentada abrazando con ternura al hijo, que sonríe ampliamente; girasoles en un florero al fondo; salón inclusivo cálido; abrazo genuino y respetuoso"],
  ["cd-5", "Dislexia", "la mamá señalando un libro abierto junto al hijo, sentados lado a lado en la mesa; algunas letras doradas flotan sobre el libro reacomodándose en orden; expresión de descubrimiento en el niño"],
  ["cd-6", "Ansiedad Infantil", "la mamá envolviendo en un abrazo cálido y protector al hijo, que respira profundo con los ojos cerrados; por la ventana se ve el sol asomando entre nubes; ambiente sereno y seguro"],
  ["cd-7", "Conducta Alimentaria", "la mamá sentada a la mesa de la cocina acompañando con paciencia y sonrisa gentil al hijo, frente a un plato con frutas y verduras coloridas; cocina hogareña cálida; momento tranquilo, sin presión"],
  ["cd-8", "Deserción Escolar", "el papá y la mamá acompañando al hijo, con mochila escolar puesta, que camina hacia la entrada de una escuela cálidamente iluminada; libros y estrellas doradas flotando; gesto motivador de los papás"]
];

const NO_INCLUYAS = () => "No incluyas nada de lo siguiente: " + NEGATIVO + ".";

function ficha(escena) {
  const usa = [];
  if (/pap[áa]/i.test(escena)) usa.push(PAPA);
  if (/mam[áa]|maestra/i.test(escena)) usa.push(MAMA);
  if (/hijo|ni[ñn]o/i.test(escena)) usa.push(HIJO);
  return usa;
}

function build(id, title, escena) {
  const personajes = ficha(escena);
  const bloque = personajes.length
    ? "Personajes fijos, no alterar ningún rasgo: " + personajes.join("; ") + ". "
    : "";
  return {
    id,
    title,
    escena,
    prompt: bloque + "Escena: " + escena + ". " + ESTILO + ". " + FORMATO + ". " + SIN_TEXTO + ".",
    negativePrompt: NEGATIVO,
    promptNanoBanana: bloque + "Escena: " + escena + ". " + ESTILO + ". " + FORMATO + ". " + SIN_TEXTO + ". " + NO_INCLUYAS(),
    formato: "16:9 panorámico — 1200x675 px",
    imagenReferencia: "data/nano/referencia-familia.jpg"
  };
}

const out = {
  _instrucciones: {
    problema: "Las imágenes generadas no conservaban la misma familia ni el estilo del arte original de la clienta: cada imagen mostraba personajes distintos (etnia, cabello, ropa) y estilos distintos (caricatura plana vs pastel vs pintura).",
    referenciaOficial: "data/nano/referencia-familia.jpg — el render aprobado de la familia (Carlos, Lucía y Mateo). El origen del estilo es public/assets/flyer-diplomado.jpg, el flyer que envió la clienta.",
    problemaResuelto21ago: "La primera tanda salió con los rótulos 'PAPÁ (Carlos: 35)', 'MAMÁ (Lucía: 33)' y 'HIJO (Mateo: 7)' pintados dentro de la ilustración. Causa: los prompts describían a los personajes con formato de etiqueta (NOMBRE EN MAYÚSCULAS seguido de dos puntos) y la imagen de referencia también traía esos rótulos. Solución: descripciones en prosa, bloque explícito de 'sin texto' en cada prompt, y usar como referencia una imagen LIMPIA sin rótulos.",
    flujoObligatorio: [
      "1. Generar PRIMERO la referencia de familia con el prompt de _hojaDePersonajes. Debe salir SIN ningún rótulo. Guardarla como data/nano/referencia-familia.jpg.",
      "2. Verificar que esa referencia no tenga texto y validarla con la clienta. Si la aprueba, queda bloqueada.",
      "3. Generar cada escena pasando SIEMPRE esa referencia limpia como imagen de referencia (image-to-image). Solo con texto NO se logra consistencia real de personajes.",
      "4. Usar la misma semilla (seed) en todas las escenas si el generador lo permite.",
      "5. Revisar cada resultado: si trae rótulos, se descarta y se regenera. No se sube ninguna imagen con texto encima.",
      "6. Pedir SIEMPRE proporción 16:9 (1200x675). Las tarjetas del sitio recortan a 200px de alto y el modal muestra la imagen completa: un 4:3 o un cuadrado se ve desproporcionado.",
      "7. Exportar a .webp a 1200px de ancho y reemplazar los archivos en public/assets/generated/ con el mismo nombre (ep-1.webp … cd-8.webp). Nota: cd-7 y cd-8 hoy son .jpg; al regenerarlos pasarlos a .webp y actualizar data/content.ts."
    ],
    notaCapacidadesDiferentes: "Decisión tomada: en las 8 escenas de Capacidades Diferentes aparece EXACTAMENTE la misma familia (Carlos, Lucía y Mateo), igual que en Escuela de Padres. Las escenas ilustran el acompañamiento de los papás sobre el tema, NO al niño con la condición: nunca se debe dibujar a Mateo con rasgos de una condición específica. El tema se comunica por la situación y los elementos de apoyo (rompecabezas, libro, plato de comida, mochila), no por el aspecto del niño."
  },
  _estiloBase: ESTILO,
  _negativePromptGlobal: NEGATIVO,
  _personajes: { papa: PAPA, mama: MAMA, hijo: HIJO },
  _hojaDePersonajes: {
    id: "referencia-familia",
    title: "Referencia de familia (generar PRIMERO, debe salir sin rótulos)",
    prompt:
      "Retrato de una familia de tres integrantes de pie muy juntos en la sala de su casa, mirando al frente: " +
      PAPA + "; " + MAMA + "; " + HIJO + ". " +
      "Los tres se leen claramente como una misma familia. " + ESTILO + ". " + FORMATO + ". " + SIN_TEXTO + ". " + NO_INCLUYAS(),
    negativePrompt: NEGATIVO,
    imagenReferencia: "public/assets/flyer-diplomado.jpg"
  },
  escuelaPadres: escenas_ep.map((a) => build(a[0], a[1], a[2])),
  capacidadesDiferentes: escenas_cd.map((a) => build(a[0], a[1], a[2])),
  general: [
    {
      id: "gen-1",
      title: "Fondo del Hero",
      escena: "Fondo decorativo sin personajes",
      prompt: "Fondo morado vino profundo con textura de pergamino, ornamentos dorados delicados, motivos florales sutiles, listón de diploma y corona de laurel dorada, orbes de luz suave, sin personajes. " + ESTILO + ". " + FORMATO + ". " + SIN_TEXTO + ".",
      negativePrompt: NEGATIVO,
      imagenReferencia: "public/assets/flyer-diplomado.jpg"
    },
    {
      id: "gen-2",
      title: "Banner divisor de secciones",
      escena: "El papá, la mamá y el hijo caminando tomados de la mano, vistos de espaldas",
      prompt:
        "Personajes fijos, no alterar ningún rasgo: " + PAPA + "; " + MAMA + "; " + HIJO + ". " +
        "Escena: los tres caminando tomados de la mano vistos desde atrás, formato panorámico horizontal muy ancho, cielo con degradado morado y dorado, estrellas y corazones dorados flotando, bordes con degradado suave. " + ESTILO + ". " + FORMATO + ". " + SIN_TEXTO + ".",
      negativePrompt: NEGATIVO,
      imagenReferencia: "data/nano/referencia-familia.jpg"
    }
  ]
};

fs.writeFileSync(
  "data/nanobanana-prompts.json",
  JSON.stringify(out, null, 2),
  "utf8"
);
console.log("OK — EP:", out.escuelaPadres.length, "| CD:", out.capacidadesDiferentes.length, "| general:", out.general.length);

// ---- Version legible para copiar y pegar en el generador ----
const L = [];
L.push("# Prompts de imágenes — Diplomado en el Aula y en Familia");
L.push("");
L.push("> Archivo generado. **No lo edites a mano.** Para cambiar un prompt edita `scripts/generar-prompts.js` y corre `node scripts/generar-prompts.js`, que regenera este archivo y `data/nanobanana-prompts.json`.");
L.push("");
L.push("## Antes de empezar");
L.push("");
out._instrucciones.flujoObligatorio.forEach((p) => L.push("- " + p));
L.push("");
L.push("**Negative prompt (el mismo para todas):**");
L.push("");
L.push("```");
L.push(NEGATIVO);
L.push("```");
L.push("");
L.push("---");
L.push("");
L.push("## Paso 1 — Referencia de familia");
L.push("");
L.push("Imagen de referencia: `" + out._hojaDePersonajes.imagenReferencia + "`");
L.push("");
L.push("```");
L.push(out._hojaDePersonajes.prompt);
L.push("```");
L.push("");
L.push("---");
L.push("");

const secciones = [
  ["## Paso 2 — Escuela para Padres", out.escuelaPadres],
  ["## Paso 3 — Capacidades Diferentes", out.capacidadesDiferentes],
  ["## Paso 4 — Generales", out.general],
];
for (const [titulo, items] of secciones) {
  L.push(titulo);
  L.push("");
  for (const it of items) {
    L.push("### `" + it.id + "` — " + it.title);
    L.push("");
    L.push("```");
    L.push(it.promptNanoBanana || it.prompt);
    L.push("```");
    L.push("");
  }
  L.push("---");
  L.push("");
}

fs.writeFileSync("data/nano/PROMPTS.md", L.join("\n"), "utf8");
console.log("PROMPTS.md escrito");
