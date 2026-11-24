// ============================================================
//  CATÀLEG D'APPS — només cal editar aquest fitxer
// ------------------------------------------------------------
//  Per afegir una app, copia una línia { ... }, i canvia:
//    titol   → nom de l'app
//    materia → gica2 | bigica1 | biogeo4 | steam | mates | docencia
//    nivell  → p. ex. "4t ESO", "2n Batx" (pot quedar buit "")
//    desc    → una frase curta (pot quedar buida "")
//    url     → adreça completa (https://...) o carpeta del repositori
//              (p. ex. "mates/pizzeria/"). Si està buida "", la targeta
//              surt com a "pendent".
//  Compte amb les comes entre línies!
// ============================================================

const MATERIES = [
  { id: "gica2",    nom: "Geologia i CCAA · 2n Batx" },
  { id: "bigica1",  nom: "Biologia, Geologia i CCAA · 1r Batx" },
  { id: "biogeo4",  nom: "Biologia i Geologia · 4t ESO" },
  { id: "steam",    nom: "STEAM" },
  { id: "mates",    nom: "Matemàtiques" },
  { id: "docencia", nom: "Docència" },
];

const APPS = [
  { titol: "Laboratori de marees",   materia: "gica2",    nivell: "", desc: "Simulador de marees: Lluna, Sol, marees vives i mortes.", url: "geologia-ccaa/marees/" },
  { titol: "Simulador d'eclipsis",   materia: "gica2",    nivell: "", desc: "Sol, Terra i Lluna: fases, eclipsis reals 2026–2028.", url: "geologia-ccaa/eclipsis/" },
  { titol: "Fases de la Lluna",      materia: "gica2",    nivell: "", desc: "El cel de l'observador, l'òrbita des de l'espai i reptes.", url: "geologia-ccaa/fases-lluna/" },
  { titol: "Translació",             materia: "gica2",    nivell: "", desc: "La translació de la Terra: equinoccis, solsticis i estacions.", url: "geologia-ccaa/translacio/" },
  { titol: "Atmosfera en moviment",  materia: "gica2",    nivell: "", desc: "La circulació de l'atmosfera.", url: "geologia-ccaa/atmosfera/" },
  { titol: "Laboratori de núvols",   materia: "gica2",    nivell: "", desc: "Humitat, refredament adiabàtic, efecte foehn, núvols i precipitació.", url: "geologia-ccaa/nuvols/" },
  { titol: "Factors del clima",      materia: "gica2",    nivell: "", desc: "Què fa que cada lloc tingui el seu clima.", url: "geologia-ccaa/factors-clima/" },
  { titol: "Com es fa un climograma",materia: "gica2",    nivell: "", desc: "Construir i llegir un climograma pas a pas.", url: "geologia-ccaa/climograma/" },
  { titol: "Mosaic de climes",       materia: "gica2",    nivell: "", desc: "Els climes del món comparats.", url: "geologia-ccaa/mosaic-climes/" },
  { titol: "La Terra",               materia: "gica2",    nivell: "", desc: "Animació de la Terra girant en 3D.", url: "geologia-ccaa/la-terra/" },

  { titol: "El cicle de les roques", materia: "bigica1",  nivell: "", desc: "Processos que transformen unes roques en altres.", url: "biogeo/cicle-roques/" },
  { titol: "Tectònica de plaques",   materia: "bigica1",  nivell: "", desc: "Mapa de plaques, límits i contextos tectònics.", url: "https://profejuanalcolea.github.io/TECTONICPLATE/" },
  { titol: "Els terratrèmols",       materia: "bigica1",  nivell: "", desc: "Magnitud i intensitat.", url: "biogeo/terratremols/" },
  { titol: "Viatge a l'interior de la Terra", materia: "bigica1", nivell: "", desc: "Explorador: mètodes d'estudi, ones sísmiques i capes de la Terra.", url: "biogeo/interior-terra/" },

  { titol: "L'hora i el Sol",        materia: "biogeo4",  nivell: "", desc: "Fusos horaris, terminador i canvi d'hora.", url: "" },
  { titol: "Mitosi amb Tradescantia",materia: "biogeo4",  nivell: "", desc: "Pràctica de laboratori.", url: "" },

  { titol: "On aterrem? (Mart)",     materia: "steam",    nivell: "4t ESO", desc: "Missió a Mart: on aterrar segons la geomorfologia.", url: "" },

  { titol: "Pizzeria Tres Quarts",   materia: "mates",    nivell: "", desc: "Com s'escriuen les fraccions en català, amb en FR-4C.", url: "mates/pizzeria/" },
  { titol: "Operació Fracció",       materia: "mates",    nivell: "", desc: "Escape room de fraccions: el laboratori precintat.", url: "mates/operacio-fraccio/" },
  { titol: "FR-4C",                  materia: "mates",    nivell: "4t ESO", desc: "Fraccions, enters i potències per objectius encadenats.", url: "https://profejuanalcolea.github.io/fr4c/" },

  { titol: "Calculadora d'accés a la universitat", materia: "docencia", nivell: "2n Batx", desc: "Nota d'accés i d'admissió, notes de tall i ponderacions.", url: "docencia/calculadora-pau/" },
  { titol: "On em situo?",           materia: "docencia", nivell: "Tutoria", desc: "Cada alumne situa el seu avatar de 0 a 100 davant les frases de l'equip docent.", url: "docencia/on-em-situo/" },
];
