import type { Notice } from "@/types";

export const initialNotices: Notice[] = [
  {
    id: "1",
    firstName: "Monique",
    lastName: "LEFRANC",
    birthPlace: "Mévergnies-lez-Lens",
    birthDate: "1940-05-26",
    deathPlace: "Attre",
    deathDate: "2026-05-06",
    photo: "/portrait-1.jpg",
    funeralInfo:
      "Les funérailles, suivies de l'inhumation, seront célébrées en l'église Saint-Martin à Attre, le mercredi 13 mai 2026 à 9 heures 30.\n\nRéunion à l'église.\n\nLes condoléances seront reçues à l'issue de la cérémonie.",
    visitingInfo:
      "La famille sera présente au funerarium le lundi 11 mai 2026 de 16 heures à 18 heures.",
  },
  {
    id: "2",
    firstName: "Jean-Pierre",
    lastName: "DUBOIS",
    birthPlace: "Ath",
    birthDate: "1952-06-15",
    deathPlace: "Maffle",
    deathDate: "2026-05-01",
    photo: "/portrait-2.jpg",
    funeralInfo:
      "Les funérailles auront lieu le samedi 9 mai 2026 à 10 heures en l'église Saint-Martin de Maffle, suivies de l'incinération.",
    visitingInfo: "",
  },
  {
    id: "3",
    firstName: "Simone",
    lastName: "DEVOS",
    birthPlace: "Ghislenghien",
    birthDate: "1938-04-03",
    deathPlace: "Ath",
    deathDate: "2026-04-28",
    photo: "/portrait-3.jpg",
    funeralInfo:
      "La cérémonie des adieux aura lieu le vendredi 6 mai 2026 à 14 heures au funerarium de Maffle. Inhumation au cimetière d'Ath.",
    visitingInfo: "",
  },
];
