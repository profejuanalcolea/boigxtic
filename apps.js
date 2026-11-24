// ============================================================
//  CATÀLEG D'APPS — només cal editar aquest fitxer
// ------------------------------------------------------------
//  Per afegir una app, copia una línia { ... }, i canvia:
//    titol   → nom de l'app
//    materia → gica2 | bigica1 | biogeo4 | steam | mates | docencia | altres
//    nivell  → p. ex. "4t ESO", "2n Batx" (pot quedar buit "")
//    desc    → una frase curta (pot quedar buida "")
//    url     → adreça completa (https://...) o carpeta del repositori
//              (p. ex. "mates/pizzeria/"). Si està buida "", la targeta
//              surt com a "pendent".
//    estat   → opcional: "beta" posa l'etiqueta «🧪 beta»
//    versions→ opcional: altres versions, p. ex. [ { nom: "Versió 1", url: "..." } ]
//  Compte amb les comes entre línies!
// ============================================================

const MATERIES = [
  { id: "gica2",    nom: "Geologia i CCAA · 2n Batx" },
  { id: "bigica1",  nom: "Biologia, Geologia i CCAA · 1r Batx" },
  { id: "biogeo4",  nom: "Biologia i Geologia · 4t ESO" },
  { id: "steam",    nom: "STEAM" },
  { id: "mates",    nom: "Matemàtiques" },
  { id: "docencia", nom: "Docència" },
  { id: "altres",   nom: "Altres" },
];

const APPS = [
  { titol: "Laboratori de marees",   materia: "gica2",    nivell: "", desc: "Simulador de marees: Lluna, Sol, marees vives i mortes.", url: "geologia-ccaa/marees/" },
  { titol: "Operació Perfil",        materia: "gica2",    nivell: "", desc: "Mapa topogràfic, escala, càlculs i perfil, com a la PAU.", url: "geologia-ccaa/operacio-perfil/" },
  { titol: "Simulador d'eclipsis",   materia: "gica2",    nivell: "", desc: "Sol, Terra i Lluna: fases, eclipsis reals 2026–2028.", url: "geologia-ccaa/eclipsis/" },
  { titol: "Fases de la Lluna",      materia: "gica2",    nivell: "", desc: "El cel de l'observador, l'òrbita des de l'espai i reptes.", url: "geologia-ccaa/fases-lluna/" },
  { titol: "Translació",             materia: "gica2",    nivell: "", desc: "La translació de la Terra: equinoccis, solsticis i estacions.", url: "geologia-ccaa/translacio/" },
  { titol: "Atmosfera en moviment",  materia: "gica2",    nivell: "", desc: "La circulació de l'atmosfera.", url: "geologia-ccaa/atmosfera/" },
  { titol: "L'ozó estratosfèric",    materia: "gica2",    nivell: "", desc: "Simulador: equilibri natural de l'ozó i destrucció per CFC.", url: "geologia-ccaa/ozo/" },
  { titol: "Laboratori de núvols",   materia: "gica2",    nivell: "", desc: "Humitat, refredament adiabàtic, efecte foehn, núvols i precipitació.", url: "geologia-ccaa/nuvols/" },
  { titol: "Factors del clima",      materia: "gica2",    nivell: "", desc: "Què fa que cada lloc tingui el seu clima.", url: "geologia-ccaa/factors-clima/" },
  { titol: "Com es fa un climograma",materia: "gica2",    nivell: "", desc: "Construir i llegir un climograma pas a pas.", url: "geologia-ccaa/climograma/" },
  { titol: "Mosaic de climes",       materia: "gica2",    nivell: "", desc: "Els climes del món comparats.", url: "geologia-ccaa/mosaic-climes/" },
  { titol: "La Terra",               materia: "gica2",    nivell: "", desc: "Animació de la Terra girant en 3D.", url: "geologia-ccaa/la-terra/" },

  { titol: "El cicle de les roques", materia: "bigica1",  nivell: "", desc: "Processos que transformen unes roques en altres.", url: "biogeo/cicle-roques/" },
  { titol: "Tectònica de plaques",   materia: "bigica1",  nivell: "", desc: "Mapa de plaques, límits i contextos tectònics.", url: "https://profejuanalcolea.github.io/TECTONICPLATE/" },
  { titol: "Els terratrèmols",       materia: "bigica1",  nivell: "", desc: "Magnitud i intensitat.", url: "biogeo/terratremols/" },
  { titol: "Viatge a l'interior de la Terra", materia: "bigica1", nivell: "", desc: "Explorador: mètodes d'estudi, ones sísmiques i capes de la Terra.", url: "biogeo/interior-terra/" },
  { titol: "Les capes de la Terra",  materia: "bigica1",  nivell: "", desc: "L'estructura interna de la Terra, capa a capa.", url: "biogeo/capes-terra/" },
  { titol: "Viatge al centre de la Terra", materia: "bigica1", nivell: "", desc: "Un viatge des de l'escorça fins al nucli.", url: "biogeo/viatge-centre-terra/" },
  { titol: "Timeline · Història de la Vida", materia: "bigica1", nivell: "", desc: "Joc de cartes: ordena els esdeveniments a la línia del temps.", url: "biogeo/timeline-vida/" },
  { titol: "Prediu l'Ou",            materia: "bigica1",  nivell: "", desc: "Prediccions abans de la pràctica de l'ou a la salmorra.", url: "biogeo/prediu-ou/" },
  { titol: "L'Ou a la Salmorra",     materia: "bigica1",  nivell: "", desc: "La pràctica de densitat: l'ou a l'aigua salada.", url: "biogeo/ou-salmorra/" },

  { titol: "Els orgànuls cel·lulars",materia: "biogeo4",  nivell: "", desc: "Presentació interactiva amb l'Ammo: dibuixos animats i sons.", url: "biogeo4/organuls/" },
  { titol: "Detectius del microscopi", materia: "biogeo4", nivell: "", desc: "Activitat 1.3: nucli, mitocondri i bacteri al microscopi electrònic.", url: "biogeo4/organuls-detectius/" },
  { titol: "L'hora i el Sol",        materia: "biogeo4",  nivell: "", desc: "Fusos, terminador sobre la península, models horaris i repte final.", url: "biogeo4/hora-sol/" },

  { titol: "Missió Mart",            materia: "steam",    nivell: "4t ESO", desc: "Exercicis de la missió amb la Laika: mode alumne i mode professorat.", url: "steam/missio-mart/" },
  { titol: "Terraformació",          materia: "steam",    nivell: "4t ESO", desc: "Canviem Mart o ens adaptem? (V2)", url: "steam/terraformacio/" },
  { titol: "On aterrem? (Mart)",     materia: "steam",    nivell: "4t ESO", estat: "beta", desc: "Missió a Mart: on aterrar segons la geomorfologia.", url: "steam/on-aterrem/",
    versions: [ { nom: "Versió 1", url: "steam/on-aterrem-v1/" } ] },

  { titol: "Pizzeria Tres Quarts",   materia: "mates",    nivell: "", desc: "Com s'escriuen les fraccions en català, amb en FR-4C.", url: "mates/pizzeria/" },
  { titol: "Operació Fracció",       materia: "mates",    nivell: "", desc: "Escape room de fraccions: el laboratori precintat.", url: "mates/operacio-fraccio/" },
  { titol: "FR-4C",                  materia: "mates",    nivell: "4t ESO", desc: "Fraccions, enters i potències per objectius encadenats.", url: "https://profejuanalcolea.github.io/fr4c/" },

  { titol: "Calculadora d'accés a la universitat", materia: "docencia", nivell: "2n Batx", desc: "Nota d'accés i d'admissió, notes de tall i ponderacions.", url: "docencia/calculadora-pau/" },
  { titol: "On em situo?",           materia: "docencia", nivell: "Tutoria", desc: "Cada alumne situa el seu avatar de 0 a 100 davant les frases de l'equip docent.", url: "docencia/on-em-situo/" },

  { titol: "Els models atòmics",     materia: "altres",   nivell: "4t ESO", desc: "Dalton, Thomson, Rutherford, Bohr i el model actual, amb l'Einsteinet.", url: "altres/models-atomics/" },
  { titol: "Models atòmics (mòbil)", materia: "altres",   nivell: "4t ESO", desc: "La mateixa presentació, en vertical per al mòbil.", url: "altres/models-atomics-mobil/" },
  { titol: "Repàs d'electrònica analògica", materia: "altres", nivell: "4t ESO", desc: "Tecnologia: formulari, teoria, exercicis resolts i preguntes.", url: "altres/electronica/" },
];
