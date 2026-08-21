export interface ModuleAudio {
  src: string;
  title: string;
}

export interface EscuelaPadresModule {
  id: string;
  title: string;
  date: string;
  description: string;
  flierImage: string;
  youtubeUrls: string[];
  content?: string[];
  /** Sugestión auditiva / meditación. Se muestra SIEMPRE al final, después del texto y los videos. */
  audios?: ModuleAudio[];
}

export interface CapacidadDiferente {
  id: string;
  title: string;
  description: string;
  flierImage: string;
  youtubeUrls: string[];
  content?: string[];
  /** Sugestión auditiva / meditación. Se muestra SIEMPRE al final, después del texto y los videos. */
  audios?: ModuleAudio[];
}

export const escuelaPadresModules: EscuelaPadresModule[] = [
  {
    id: "ep-1",
    title: "Confianza y Seguridad de Nosotros Mismos como Padres",
    date: "14 ABR 2026",
    description: "Fortalece tu autoconfianza como padre o madre para guiar a tus hijos con seguridad y amor.",
    flierImage: "/assets/generated/ep-1.webp",
    youtubeUrls: ["https://youtu.be/n86g3ejYSD0", "https://youtu.be/LrOeC_-XEDI"],
    content: [
      "El adulto afianzado tiene seguridad en sí mismo y en los niños bajo su responsabilidad. Permite que el niño elija entre varias alternativas, estimula, propiciando que el menor confíe en sí mismo; contribuye, coopera, enfrenta los problemas y ejercita la creatividad.",
      "El adulto afianzado reconoce su naturaleza humana, tiene el coraje de saberse imperfecto y no exento de fallas, fija normas realistas, enfoca las virtudes y no se preocupa por guardar una imagen falsa de sí mismo. Es tolerante y paciente.",
      "En contraste, el adulto quebrantado tiene poca confianza en sí mismo. Para ganar un respeto que no tiene consigo, exige obediencia, premia y castiga, trata de ganar en todas las situaciones. La posible consecuencia es la rebeldía del joven.",
      "Si tenemos el anhelo de vivir en una sociedad democrática, una buena forma de comenzar es educando a los niños bajo el modelo de la estimulación y el respeto mutuo.",
      "Los errores pueden ser considerados como oportunidades de aprendizaje. Desarrolle el coraje de hacerle frente a los retos que la vida le presente.",
    ],
    // La clienta pidió expresamente: primero el contenido, después la sugestión auditiva.
    audios: [
      { src: "/audio/lupita-me-calma.mp3", title: "Lupita Me Calma" },
      { src: "/audio/la-magia-de-lupita.mp3", title: "La Magia de Lupita" },
    ],
  },
  {
    id: "ep-2",
    title: "Detectar los Tipos de Comportamiento",
    date: "21 ABR 2026",
    description: "Aprende a identificar y comprender los diferentes patrones de comportamiento en tus hijos.",
    flierImage: "/assets/generated/ep-2.webp",
    youtubeUrls: ["https://youtu.be/8vEOFHbur9U", "https://youtu.be/9YANsOvTaCk"],
    content: [
      "Los niños que se portan mal son individuos frustrados y desalentados. No sienten pertenencia en el grupo familiar al comportarse de manera positiva, por lo que buscan esa pertenencia comportándose inadecuadamente.",
      "Rudolf Dreikurs clasificó el comportamiento inadecuado en cuatro grandes categorías: Atención, Poder, Revancha y Demostración de insuficiencia.",
      "I. Atención: El niño prefiere obtener atención de manera positiva, pero si no lo logra así, la busca en forma negativa. Cuando los padres corrigen con advertencias o ruegos, el niño ha recibido la atención deseada.",
      "II. Poder: El niño que busca poder sólo se siente importante cuando considera que él es el jefe. Cuando un niño es desafiante, los adultos nos sentimos molestos y provocados.",
      "III. Revancha: Los niños que persiguen la revancha están convencidos de que no son dignos de ser queridos. Se sienten importantes sólo cuando pueden molestar a otros.",
      "IV. Demostración de insuficiencia: Estos niños están extremadamente descorazonados, han perdido la esperanza de tener éxito por otros medios y tratan de que nadie espere nada de ellos.",
      "Para identificar el objetivo: observe sus propios sentimientos ante el comportamiento del niño, y observe la reacción del niño a sus intentos de corrección. Los resultados del comportamiento inadecuado revelan su propósito.",
      "Hay cosas muy importantes que observar: el comportamiento inadecuado reporta un beneficio al niño — el comportamiento tiene un propósito.",
      "Observe su propia reacción antes del comportamiento inadecuado del niño. Lo que usted sienta, sus propios sentimientos, le señalarán el objetivo del comportamiento.",
      "Observe la reacción del niño a sus intentos de corrección. La respuesta del menor al comportamiento de usted también le harán saber lo que pretende.",
    ],
  },
  {
    id: "ep-3",
    title: "El Por Qué y Para Qué del Comportamiento",
    date: "05 MAY 2026",
    description: "Descubre las razones profundas detrás de las conductas de tus hijos y cómo responder efectivamente.",
    flierImage: "/assets/generated/ep-3.webp",
    youtubeUrls: ["https://youtu.be/dxmAwefylas", "https://youtu.be/kqnUlj7lVEY"],
    content: [
      "Las emociones nos mueven en la vida. Generalmente nuestras emociones se originan por las creencias que tenemos, no provienen de afuera; sin embargo, acostumbramos decir: 'me puso bravo', colocando con ello la responsabilidad de nuestras emociones en otros.",
      "Al igual que el comportamiento inadecuado sirve para un propósito, nuestras emociones se basan en nuestras creencias y en nuestros propósitos. SENTIMOS COMO CREEMOS, COMO PENSAMOS.",
      "Para identificar mejor nuestros propósitos y creencias, utilicemos la pregunta '¿Para qué?' y las respuestas nos irán llevando a un autoconocimiento.",
      "Los niños aprenden a utilizar sus emociones para alcanzar uno o más de los cuatro objetivos. Por ejemplo, el niño que descubrió el poder que le da el grito cuando acusa a su hermano mayor, lo seguirá usando mientras funciona.",
      "Frecuentemente los mayores no tenemos conocimiento de nuestras emociones, mucho menos sabemos canalizarlas; como secuela los niños toman comportamientos inadecuados y buscan la manera de que el adulto pague.",
      "Una vez que los adultos decidimos que no existe necesidad de controlar a los niños —porque pueden establecer límites y aprender mediante las consecuencias de sus acciones— y que sabemos canalizar nuestras propias emociones, no será necesario molestarnos ni enojarnos.",
    ],
  },
  {
    id: "ep-4",
    title: "Estimulación No Es lo Mismo que Elogio",
    date: "12 MAY 2026",
    description: "Conoce la diferencia entre estimular el crecimiento y simplemente elogiar a tus hijos.",
    flierImage: "/assets/generated/ep-4.webp",
    youtubeUrls: ["https://youtu.be/PL44Iz3yOx4"],
    content: [
      "El ELOGIO resalta el control externo: 'Eres valioso sólo cuando haces lo que quiero.' El niño aprende a medir su valor complaciendo o rebelándose.",
      "El ELOGIO resalta la evaluación externa: 'Para ser valioso debes complacerme.' El niño aprende a temer la desaprobación.",
      "El ELOGIO se premia sólo por trabajos completos y bien hechos. El niño desarrolla normas no realistas y aprende a temerle al fracaso.",
      "La ESTIMULACIÓN resalta la habilidad del niño para manejarse efectivamente en la vida: 'Confío en que te vuelvas responsable e independiente.' El niño aprende a tener el coraje de ser imperfecto.",
      "La ESTIMULACIÓN reconoce el esfuerzo y el mejoramiento: 'No tienes que ser perfecto. El esfuerzo y el mejoramiento constantes son importantes.' El niño aprende a aceptar los esfuerzos propios.",
      "La ESTIMULACIÓN destaca las cualidades y contribuciones: 'Tu contribución es valiosa. Trabajamos mejor contigo.' El niño aprende a usar sus habilidades para bien de todos.",
      "Si queremos que nuestros hijos crean en sí mismos, necesitamos creer en ellos. Los pequeños necesitan ser estimulados frecuentemente para sentirse bien.",
    ],
  },
  {
    id: "ep-5",
    title: "Cómo Hablar para que mi Hijo Escuche",
    date: "19 MAY 2026",
    description: "Técnicas de comunicación efectiva para que tus palabras realmente lleguen a tus hijos.",
    flierImage: "/assets/generated/ep-5.webp",
    youtubeUrls: ["https://youtu.be/20PcA8zWWN8"],
    content: [
      "El mensaje-yo simplemente describe cómo se siente usted frente al comportamiento del niño. Se centra en usted y no en el niño: reporta lo que siente usted, no acusa.",
      "Ejemplo: 'Cuando te haces el chistoso en el salón de clases a mí me da coraje, ya que el grupo se desorganiza y me cuesta trabajo volver a lo que estábamos.'",
      "Por lo general no es el comportamiento del niño en sí lo que lo molesta, sino las consecuencias que dicho comportamiento le ocasionan. Hágales saber que sus sentimientos están relacionados con las consecuencias de su actuación.",
      "Construcción del mensaje-yo: (1) Describe el comportamiento que interfiere contigo. (2) Expresa tus sentimientos respecto a las consecuencias. (3) Enfatiza el 'porque' para que el niño sepa que sus sentimientos están relacionados a la consecuencia.",
      "Los mensajes-yo exigen una actitud de no enjuiciamiento. Un mensaje expresado con enojo se vuelve un 'mensaje-tú' que conlleva hostilidad.",
      "La dificultad no está en el enojo mismo, sino en el propósito del enojo, que puede ser controlar, ganar o tomar revancha. Sea consciente de la frecuencia con que usa el enojo.",
    ],
  },
  {
    id: "ep-6",
    title: "Cómo Escuchar para que mi Hijo Hable",
    date: "26 MAY 2026",
    description: "Desarrolla habilidades de escucha activa para crear un espacio seguro donde tus hijos se expresen.",
    flierImage: "/assets/generated/ep-6.webp",
    youtubeUrls: ["https://youtu.be/wocQXx4n7zU"],
    content: [
      "Ser un oyente eficaz requiere concentración: implica establecer un contacto visual y una determinada postura que muestre interés por el interlocutor.",
      "Escuchar reflexivamente significa dar respuestas abiertas que reflejan los sentimientos de las personas y sus significados. Requiere ser sensible a una gran variedad de sentimientos y tener la habilidad de expresarlos.",
      "Una respuesta cerrada es aquella que indica que el oyente no ha escuchado ni comprendido lo dicho —tiende a cortar la comunicación. Una respuesta abierta indica que el oyente ha escuchado y comprendido.",
      "Ejemplo — Niño: 'Mis compañeros se ríen de mí.' Respuesta cerrada: '¡Imponte!' Respuesta abierta: '¿Te sientes herido?'",
      "Mofarse, amonestar, censurar, rememorar, sermonear o ridiculizar no son acciones que promueven una comunicación eficaz. Evite el papel de comandante, moralista, sabelotodo, juez, crítico, psicólogo o consolador.",
      "Ayudar al niño a explorar alternativas significa ayudarle a identificar y considerar las posibilidades existentes para resolver el problema. Los pasos son: escuchar reflexivamente, investigar opciones, ayudar a escoger una solución y obtener un compromiso.",
    ],
  },
  {
    id: "ep-7",
    title: "Consecuencias Naturales y Consecuencias Lógicas",
    date: "02 JUN 2026",
    description: "Aprende a usar consecuencias naturales y lógicas como herramientas de aprendizaje para tus hijos.",
    flierImage: "/assets/generated/ep-7.webp",
    youtubeUrls: [
      "https://youtu.be/Ph1LuYvsWH8",
      "https://youtu.be/2rHZZ_sf3U0",
      "https://youtu.be/n-SOyIl5Nqc",
      "https://youtu.be/J1sPILcZ0x0",
    ],
    content: [
      "El sistema de premios y castigos no responsabiliza al educando de su comportamiento. Permite encubrirse y condiciona el comportamiento aprobado solamente en presencia de figuras de autoridad.",
      "Las CONSECUENCIAS NATURALES son el resultado de permitir que el niño experimente la realidad natural sin la intervención de los adultos.",
      "Las CONSECUENCIAS LÓGICAS permiten que el niño aprenda del orden social. Para que sean eficaces, el niño debe verlas lógicamente relacionadas con su comportamiento.",
      "Diferencias clave: El castigo expresa el poder de la autoridad. Las consecuencias lógicas expresan la realidad del orden social. El castigo es arbitrario. Las consecuencias lógicas se relacionan con el comportamiento inadecuado.",
      "El castigo está personalizado e implica juicios morales. Las consecuencias lógicas son impersonales. El castigo exige obediencia. Las consecuencias permiten elegir y responsabilizarse.",
      "Principios básicos: Firmes y cariñosos. Hable menos y actúe más. Evite pelear o rendirse. Deje que los niños compartan la responsabilidad. Separe el hecho de quien lo hace para que el niño tenga confianza en sí mismo.",
    ],
  },
];

export const capacidadesDiferentes: CapacidadDiferente[] = [
  {
    id: "cd-1",
    title: "Autismo",
    description: "Comprende el espectro autista y las estrategias para apoyar a niños con TEA en el hogar y la escuela.",
    flierImage: "/assets/generated/cd-1.webp",
    youtubeUrls: ["https://youtu.be/maElNnDJ2Yo", "https://youtu.be/JCQYWOpWW7Q"],
    content: [
      "El Trastorno del Espectro Autista (TEA) se caracteriza por diferencias en la comunicación social y patrones de comportamiento repetitivos o restringidos.",
      "La adaptación curricular comienza por conocer las fortalezas individuales del niño y construir sobre ellas, respetando su ritmo de aprendizaje.",
      "Estrategias clave: rutinas claras y predecibles, apoyos visuales, comunicación alternativa y aumentativa, y ambientes sensorialmente organizados.",
      "La colaboración entre padres, maestros y especialistas es fundamental para crear una red de apoyo consistente.",
    ],
  },
  {
    id: "cd-2",
    title: "TDAH",
    description: "Herramientas prácticas para padres y maestros de niños con Trastorno por Déficit de Atención e Hiperactividad.",
    flierImage: "/assets/generated/cd-2.webp",
    youtubeUrls: ["https://youtu.be/4PYdoIvj0MA", "https://youtu.be/mefS4di03Oc"],
    content: [
      "El TDAH se manifiesta en dificultades de atención, impulsividad e hiperactividad que afectan el aprendizaje y las relaciones sociales.",
      "Las instrucciones breves y claras, dividir las tareas en pasos pequeños y ofrecer descansos frecuentes son estrategias efectivas en el aula.",
      "El niño con TDAH necesita estructura, rutinas y límites consistentes aplicados con firmeza y cariño, nunca con castigo.",
      "Reconocer y estimular el esfuerzo —no solo el resultado— es especialmente importante para estos niños que frecuentemente reciben más retroalimentación negativa que positiva.",
    ],
  },
  {
    id: "cd-3",
    title: "Diversidad Intelectual",
    description: "Estrategias inclusivas y amorosas para acompañar el desarrollo de niños con discapacidad intelectual.",
    flierImage: "/assets/generated/cd-3.webp",
    youtubeUrls: ["https://youtu.be/QNxXuFU1yNY", "https://youtu.be/jEh7PwjD97s"],
    content: [
      "La adaptación curricular para niños con discapacidad intelectual implica ajustar los objetivos, metodologías y criterios de evaluación a las capacidades reales del estudiante.",
      "Cada niño tiene sus propias estrategias de aprendizaje. La educación abarca muchos aspectos; requerimos adaptación curricular para apoyarlos en el proceso educativo.",
      "Enfocarse en las habilidades y sobre todo en los esfuerzos, por mínimos que sean, es el punto de partida para acompañar a estos niños.",
      "La aceptación sincera, con todas sus imperfecciones, es la base de una relación educativa respetuosa y efectiva.",
    ],
  },
  {
    id: "cd-4",
    title: "Síndrome de Down",
    description: "Recursos y enfoques positivos para potenciar las capacidades de niños con Síndrome de Down.",
    flierImage: "/assets/generated/cd-4.webp",
    youtubeUrls: [],
    content: [
      "Los niños con Síndrome de Down aprenden mejor en ambientes inclusivos, estimulantes y respetuosos de su ritmo propio.",
      "La estimulación temprana y la intervención oportuna en las áreas de lenguaje, motricidad y socialización marcan una gran diferencia en su desarrollo.",
      "El respeto mutuo y la alta expectativa —adaptada a sus posibilidades reales— son el motor que impulsa su crecimiento.",
      "Visualizar a futuro: conocer y reconocer las habilidades del niño y visualizarlo sirviendo a la sociedad de esa manera le dará una idea de cómo explotar todo su potencial.",
    ],
  },
  {
    id: "cd-5",
    title: "Dislexia",
    description: "Identifica y apoya a niños con dislexia con técnicas adaptadas para el aprendizaje de la lectoescritura.",
    flierImage: "/assets/generated/cd-5.webp",
    youtubeUrls: [],
    content: [
      "La dislexia es una dificultad específica del aprendizaje relacionada con la decodificación del lenguaje escrito, no con la inteligencia del niño.",
      "El apoyo debe centrarse en métodos multisensoriales, más tiempo para las actividades, y evaluaciones que reflejen el verdadero conocimiento del estudiante.",
      "Evitar la comparación entre pares es crucial: 'cada niño tiene sus propias estrategias' y debe competir preferentemente contra sí mismo.",
      "Predique con el ejemplo: mostrar que el aprendizaje puede tomar distintos caminos y que el esfuerzo constante es lo que importa.",
    ],
  },
  {
    id: "cd-6",
    title: "Ansiedad Infantil",
    description: "Comprende y acompaña a niños que experimentan ansiedad, con herramientas para el manejo emocional.",
    flierImage: "/assets/generated/cd-6.webp",
    youtubeUrls: ["https://youtu.be/ikwE1KL5Oco", "https://youtu.be/EK4hORra1K8"],
    content: [
      "La ansiedad infantil se expresa en muchas formas: miedos, quejas físicas, evitación escolar, irritabilidad o llanto frecuente.",
      "Escuchar reflexivamente es la primera herramienta: reconocer los sentimientos del niño sin minimizarlos ni magnificarlos.",
      "Las emociones se originan por las creencias que tenemos. Ayudar al niño a identificar sus pensamientos ansiosos y reencuadrarlos es un proceso gradual y requiere paciencia.",
      "La aceptación y la paciencia son valores fundamentales: los niños no son máquinas y hay que trabajar con ellos tranquilamente, contribuir a su crecimiento con aceptación y confianza.",
    ],
  },
  {
    id: "cd-7",
    title: "Conducta Alimentaria",
    description: "Herramientas para identificar y acompañar a niños con dificultades en la conducta alimentaria.",
    flierImage: "/assets/generated/cd-7.jpg",
    youtubeUrls: ["https://youtu.be/vgU9DYUMXYM", "https://youtu.be/51AU--0g2lY"],
    content: [
      "La conducta alimentaria en niños puede verse afectada por factores emocionales, sensoriales y del entorno familiar, más allá de una simple preferencia o capricho.",
      "Establecer rutinas de alimentación tranquilas, sin presión ni castigo, favorece una relación sana con la comida desde temprana edad.",
      "La sugestión positiva y el modelado del adulto son herramientas clave: los niños aprenden observando los hábitos alimentarios de quienes los rodean.",
      "Cuando las dificultades persisten, la colaboración entre padres, docentes y especialistas permite diseñar estrategias adaptadas a cada niño.",
    ],
  },
  {
    id: "cd-8",
    title: "Deserción Escolar",
    description: "Estrategias para prevenir y atender la deserción escolar desde el hogar y el aula.",
    flierImage: "/assets/generated/cd-8.jpg",
    youtubeUrls: ["https://youtu.be/Xk5dJm1JJZg"],
    content: [
      "La deserción escolar rara vez ocurre de forma repentina; suele ser el resultado acumulado de factores emocionales, familiares, académicos y sociales.",
      "Detectar a tiempo las señales de desenganche — ausentismo, bajo rendimiento, aislamiento — permite intervenir antes de que el niño abandone definitivamente.",
      "El vínculo afectivo con al menos un adulto significativo en la escuela es uno de los factores protectores más importantes contra la deserción.",
      "La comunicación abierta entre familia y escuela, junto con la estimulación constante del esfuerzo, crea las condiciones para que el niño quiera quedarse.",
    ],
  },
];
