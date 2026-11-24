// ============================================================
//  CATÀLEG D'APPS — només cal editar aquest fitxer
// ------------------------------------------------------------
//  Per afegir una app, copia una línia { ... }, i canvia:
//    titol   → nom de l'app
//    materia → geo | biogeo | mates | docencia
//    nivell  → p. ex. "4t ESO", "2n Batx" (pot quedar buit "")
//    desc    → una frase curta (pot quedar buida "")
//    url     → adreça completa (https://...) o carpeta del repositori
//              (p. ex. "mates/pizzeria/"). Si està buida "", la targeta
//              surt com a "pendent".
//  Compte amb les comes entre línies!
// ============================================================

const MATERIES = [
  { id: "geo",      nom: "Geologia i CCAA" },
  { id: "biogeo",   nom: "Biologia i Geologia" },
  { id: "mates",    nom: "Matemàtiques" },
  { id: "docencia", nom: "Docència" },
];

const APPS = [
  { titol: "Laboratori de marees",   materia: "geo",      nivell: "2n Batx", desc: "Simulador de marees: Lluna, Sol, marees vives i mortes.", url: "geologia-ccaa/marees/" },
  { titol: "Simulador d'eclipsis",   materia: "geo",      nivell: "",        desc: "Sol, Terra i Lluna: fases, eclipsis reals 2026–2028.", url: "geologia-ccaa/eclipsis/" },

  { titol: "L'hora i el Sol",        materia: "biogeo",   nivell: "4t ESO",  desc: "Fusos horaris, terminador i canvi d'hora.", url: "" },
  { titol: "On aterrem? (Mart)",     materia: "biogeo",   nivell: "4t ESO",  desc: "Projecte STEAM: on aterrar a Mart.", url: "" },
  { titol: "Mitosi amb Tradescantia",materia: "biogeo",   nivell: "4t ESO",  desc: "Pràctica de laboratori.", url: "" },

  { titol: "Pizzeria Tres Quarts",   materia: "mates",    nivell: "",        desc: "Joc de fraccions.", url: "" },
  { titol: "Operació Fracció",       materia: "mates",    nivell: "",        desc: "Escape room de fraccions.", url: "" },
  { titol: "Fraccions per objectius",materia: "mates",    nivell: "",        desc: "Reptes encadenats.", url: "" },

  { titol: "Calculadora nota PAU",   materia: "docencia", nivell: "2n Batx", desc: "Nota d'accés i d'admissió.", url: "" },
];
