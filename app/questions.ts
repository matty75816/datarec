// src/app/questions.ts

export interface Question {
  id: number;
  category: string;
  text: string;
  type: 'text' | 'radio' | 'conditional' | 'radio-other';
  options?: string[];
  image?: string;
}

export const questionsQuiz: Question[] = [
  // --- SECTION 1 : PORTRAIT & IDENTITÉ ---
  { 
    id: 1, 
    category: "Profil", 
    text: "Veuillez choisir votre sexe", 
    type: "radio", 
    options: ["Homme", "Femme", "Transgenre HTF", "Transgenre FTH"] 
  },
  { id: 2, category: "Profil", text: "Veuillez indiquer votre nationalité", type: "text" },
  { id: 3, category: "Profil", text: "Veuillez indiquer votre ville de résidence", type: "text" },
  { id: 4, category: "Profil", text: "Veuillez choisir un prénom ou un pseudonyme", type: "text" },
  { id: 5, category: "Profil", text: "Veuillez préciser votre âge", type: "text" },
  { 
    id: 6, 
    category: "Profil", 
    text: "Veuillez choisir votre orientation sexuelle", 
    type: "radio", 
    options: ["Hétérosexuel", "Homosexualité", "Bisexuel"] 
  },
  { 
    id: 7, 
    category: "Profil", 
    text: "Veuillez préciser votre situation", 
    type: "radio", 
    options: ["Célibataire", "Marié(e)", "Divorcé(e)", "En instance de divorce", "Veuf/Veuve", "En séparation", "Marié(e) avec un ou des amants", "En relation libre"] 
  },

  // --- SECTION 2 : HISTORIQUE SANTÉ & SEXUALITÉ ---
  { id: 8, category: "Historique", text: "Avez-vous déjà eu des rapports sexuels ?", type: "radio", options: ["Oui", "Non"] },
  { id: 9, category: "Historique", text: "Si oui, veuillez préciser le nombre SVP et le genre pour les bisexuels.", type: "text" },
  { id: 10, category: "Historique", text: "À quand remonte votre premier rapport sexuel ?", type: "text" },
  { id: 11, category: "Historique", text: "Avec qui était votre premier rapport ? (Indiquez un prénom ou un pseudo).", type: "text" },
  { id: 12, category: "Historique", text: "À quand remonte votre dernier rapport sexuel ?", type: "text" },
  { id: 13, category: "Historique", text: "Avec qui était votre dernier rapport ?", type: "text" },
  { id: 14, category: "Historique", text: "Combien de partenaires sexuels avez-vous eu au cours de votre vie ?", type: "text" },
  { id: 15, category: "Historique", text: "Où avez-vous connu vos partenaires ? (Veuillez spécifier pour chacun).", type: "text" },
  { id: 16, category: "Historique", text: "Quel âge avait votre plus jeune partenaire ?", type: "text" },
  { id: 17, category: "Historique", text: "Quel âge avait le plus âgé de vos partenaires ?", type: "text" },
  { id: 18, category: "Historique", text: "Précision : Après combien de temps avez-vous couché avec vos partenaires (ex : premier soir, après un mois...) ?", type: "text" },
  { id: 19, category: "Historique", text: "Pour les conservateurs : Avez-vous eu des rapports avant le mariage ?", type: "radio", options: ["Oui", "Non"] },
  { id: 20, category: "Historique", text: "Avez-vous eu des rapports extra-conjugaux ?", type: "radio", options: ["Oui", "Non", "Jamais marié(e)"] },
  { id: 21, category: "Historique", text: "Si oui, précisez avec combien de partenaires ? (des désignations svp)", type: "text" },
  { id: 22, category: "Historique", text: "L'avez-vous déjà fait en période de menstruation ?", type: "radio", options: ["Oui", "Non"] },
  { id: 23, category: "Historique", text: "L'avez-vous déjà fait en période d'interdiction ? (médicale, religieuse ou autre...) Veuillez préciser.", type: "text" },
  { id: 24, category: "Historique", text: "Selon vous, une femme doit avoir combien de partenaires sexuels avant d'être dans une relation officielle ?", type: "text" },
  { id: 25, category: "Historique", text: "Selon vous, un homme doit avoir combien de partenaires sexuels avant d'être dans une relation officielle ?", type: "text" },
  { id: 26, category: "Historique", text: "Avez-vous eu des rapports après votre séparation ?", type: "radio", options: ["Oui avec mon ex", "Oui avec d'autres personnes", "Non", "Jamais marié(e)"] },
  { 
    id: 27, 
    category: "Historique", 
    text: "Avez-vous des enfants ?", 
    type: "radio-other", 
    options: ["Oui", "Je suis enceinte", "Non"] 
  },
  { id: 28, category: "Historique", text: "Vos rapports étaient protégés ?", type: "radio", options: ["Oui (avec préservatifs)", "Oui (avec stérilet)", "Non, je préfère le naturel", "Non, mon/mes partenaires n'aiment pas les préservatifs", "Pilule"] },
  { id: 29, category: "Historique", text: "Avez-vous eu des accidents avec les moyens de contraception ? Si oui, précisez.", type: "text" },
  { 
    id: 30, 
    category: "Historique", 
    text: "Votre sexualité a-t-elle changé après votre accouchement ?", 
    type: "radio-other", 
    options: ["Augmentée", "Baissée", "Mon partenaire ne me désire plus comme avant", "Jamais été enceinte"] 
  },
  { id: 31, category: "Historique", text: "Où préférez-vous / avez-vous eu des éjaculations ?", type: "radio", options: ["Interne (vaginale)", "Interne (anale)", "Externe (sur une partie du corps)", "Externe (loin du corps)", "Dans un préservatif"] },
  { id: 32, category: "Historique", text: "Avez-vous eu des rapports avec des personnes d'une autre nationalité ? Si oui, précisez. Si non, écrivez-le.", type: "text" },
  { id: 33, category: "Historique", text: "Quel type de relations entretenez-vous avec vos partenaires ?", type: "radio", options: ["Amoureux", "En couple", "Sex friends", "Amant", "Ami(e)", "Contre un service"] },
  { id: 34, category: "Historique", text: "Êtes-vous satisfait/satisfaite de vos partenaires (côté sexuel uniquement) ?", type: "radio", options: ["Oui", "Non", "Je cherche encore mieux"] },
  { id: 35, category: "Historique", text: "Avez-vous déjà simulé un orgasme ? Si oui, avec combien de partenaires ? (ex: 1/3)", type: "text" },
  { id: 36, category: "Historique", text: "Quel est le nombre maximal de partenaires sexuels que vous avez eu durant la même journée ?", type: "text" },
  { id: 37, category: "Historique", text: "Avez-vous eu que des rapports vaginaux ?", type: "radio", options: ["Oui", "Non", "Uniquement la sodomie", "Pénétration accidentelle dans le feu de l'action"] },
  { id: 38, category: "Historique", text: "Avez-vous pratiqué des rapports vaginaux ?", type: "radio", options: ["Oui", "Non", "Sodomie et vaginal"] },
  { id: 39, category: "Historique", text: "Vos partenaires étaient ?", type: "radio", options: ["Tous/toutes plus âgé(e)s que vous", "Tous/toutes moins âgé(e)s que vous", "Beaucoup étaient plus âgé(e)s et peu étaient moins âgé(e)s que vous", "Beaucoup étaient moins âgé(e)s et peu étaient plus âgé(e)s que vous"] },
  { id: 40, category: "Historique", text: "Avez-vous fait face à l'éjaculation précoce ?", type: "radio", options: ["Oui, tous mes partenaires", "Non, aucun de mes partenaires", "Oui, je le suis", "Non, je ne le suis pas", "Quelques-uns", "Cela dépend du jour et du mood"] },
  { id: 41, category: "Historique", text: "Quelle est la durée moyenne de chacun de vos rapports ?", type: "text" },
  { id: 42, category: "Historique", text: "Quelle est la durée maximale de vos rapports ?", type: "text" },
  { id: 43, category: "Historique", text: "Quelle est la durée minimale de vos rapports ?", type: "text" },
  { id: 44, category: "Historique", text: "Quel est le nombre maximal d'orgasmes que vous avez atteint pendant un rapport ?", type: "text" },
  { id: 45, category: "Historique", text: "Quel est le nombre maximal d'orgasmes que votre partenaire a atteint lors d'un rapport ?", type: "text" },
  { id: 46, category: "Historique", text: "Quel est le nombre maximal d'enchaînements d'orgasmes que votre partenaire a eu sans prendre de temps après avoir éjaculé/joui ?", type: "text" },
  { id: 47, category: "Historique", text: "Quel est le nombre maximal d'enchaînements d'orgasmes que vous avez eu sans prendre de temps après avoir éjaculé/joui ?", type: "text" },
  { id: 48, category: "Historique", text: "Pour vous, le plus important c'est : 1. Le nombre d'orgasmes que votre partenaire a eu pendant le rapport ? 2. La durée du rapport ? 3. Autre chose ? Éclairez svp.", type: "text" },
  { id: 49, category: "Historique", text: "Vous êtes pour :", type: "radio", options: ["Un homme qui jouit une seule fois pendant un rapport (une seule éjaculation qui dure tout le long du rapport)", "Un homme qui jouit plusieurs fois pendant un rapport (plusieurs éjaculations et reprises)"] },
  { id: 50, category: "Historique", text: "Avez-vous pris des boosters sexuels en tout genre ?", type: "conditional" },
  { id: 51, category: "Historique", text: "Est-ce que l'un de vos partenaires a déjà pris des boosters sexuels en tout genre ?", type: "conditional" },
  { id: 52, category: "Historique", text: "Pour les femmes : où aimez-vous recevoir l'éjaculation / où avez-vous l'habitude de la recevoir ? Pour les hommes : où aimez-vous éjaculer / où avez-vous l'habitude de le faire ?", type: "text" },

  // --- SECTION 3 : MORPHOLOGIE & PRÉFÉRENCES ---
  { id: 53, category: "Morphologie", text: "Un partenaire moyennement membré doit avoir entre combien et combien approximativement en cm ?", type: "text" },
  { id: 54, category: "Morphologie", text: "Un partenaire bien membré doit avoir approximativement combien de cm ?", type: "text" },
  { id: 55, category: "Morphologie", text: "Un partenaire en dessous de la moyenne doit avoir approximativement combien en cm ?", type: "text" },
  { id: 56, category: "Morphologie", text: "Le partenaire le mieux membré que vous ayez eu : approximativement en cm et quel rapport avez-vous eu avec lui/elle ? (Spécifiez un indice ou un prénom pour le différencier).", type: "text" },
  { id: 57, category: "Morphologie", text: "Le partenaire le moins membré que vous ayez eu : approximativement en cm et quel rapport avez-vous eu avec lui/elle ? (Spécifiez un indice ou un prénom pour le différencier).", type: "text" },
  { 
    id: 58, 
    category: "Morphologie", 
    text: "Avez-vous eu des partenaires :", 
    type: "radio", 
    options: [
      "Tous mes partenaires étaient bien membrés", "Une grande majorité de mes partenaires étaient bien membrés", "Une minorité de mes partenaires étaient bien membrés", "Aucun de mes partenaires n'était bien membré",
      "Tous mes partenaires étaient moyennement membrés", "Une grande majorité de mes partenaires étaient moyennement membrés", "Une minorité de mes partenaires étaient moyennement membrés", "Aucun de mes partenaires n'était moyennement membré",
      "Tous mes partenaires étaient en dessous de la moyenne", "Une grande majorité de mes partenaires étaient en dessous de la moyenne", "Une minorité de mes partenaires étaient en dessous de la moyenne", "Aucun de mes partenaires n'était en dessous de la moyenne"
    ] 
  },
  { id: 59, category: "Morphologie", text: "Le sexe (pénis) de vos partenaires était-il pareil ou différent ? Si différent, définissez les différences (cochez ou sélectionnez) :", type: "radio", options: ["Longueur", "Largeur", "Forme", "Érection", "Couleur de peau"] },
  { id: 60, category: "Morphologie", text: "Pour vous, c'est beaucoup plus :", type: "radio", options: ["La longueur du pénis", "La largeur du pénis", "Long mais fin", "Large mais court", "Qui se complète en longueur et largeur"] },
  { id: 61, category: "Morphologie", text: "La forme que vous avez le plus croisée / ou possédez :", type: "radio", options: ["Long et large", "Long et fin", "Large et court", "Moyen et large", "Moyen et fin", "Court et très large", "Court et fin"] },
  { id: 62, category: "Morphologie", text: "Veuillez préciser pour combien de vos partenaires (exemple : 1 sur 4).", type: "text" },
  { id: 63, category: "Morphologie", text: "Vous préférez / possédez :", type: "radio", options: ["Veineux", "Moyennement", "Sans veines", "Peu importe"] },
  { 
    id: 64, 
    category: "Morphologie", 
    text: "Veuillez choisir au moins deux formes pour chaque type afin de mieux illustrer. Veuillez énumérer selon le nombre de partenaires. Si vous préférez avoir une forme particulière, écrivez SOUH puis votre choix.", 
    type: "text",
    image: "/modeles.png"
  },
  { 
    id: 65, 
    category: "Morphologie", 
    text: "Quelles sont les formes/modèles que vous avez eu ? Lesquelles préférez-vous ? Vous êtes comment ?", 
    type: "text",
    image: "/modeles1.jpg"
  },
  { 
    id: 66, 
    category: "Morphologie", 
    text: "Vos partenaires étaient / vous êtes ?", 
    type: "text",
    image: "/modeles2.jpg"
  },
  { 
    id: 67, 
    category: "Morphologie", 
    text: "Vous êtes / vos partenaires étaient ?", 
    type: "text",
    image: "/modeles3.png" // <-- L'image originale reste attachée ici
  },
  { 
    id: 68, 
    category: "Morphologie", 
    text: "Vos partenaires étaient-ils circoncis ou pas ?", 
    type: "radio", 
    options: ["Tous circoncis", "Quelques-uns sont circoncis", "Aucun ne l'est (Non)"] // <-- Nouvelle question propre sans image
  },
  { id: 69, category: "Morphologie", text: "Tous vos partenaires avaient-ils la même quantité de sperme en jouissant ?", type: "radio", options: ["Oui", "Non"] },
  { id: 70, category: "Morphologie", text: "Vous préférez / avez un pénis :", type: "radio", options: ["Un modèle rasé", "Un modèle moyennement rasé", "Un modèle poilu"] },
  { id: 71, category: "Morphologie", text: "Vous préférez / vous avez :", type: "radio", options: ["De grands testicules", "Des testicules moyens"] },
  { 
    id: 72, 
    category: "Morphologie", 
    text: "Mesdames, vous êtes ? Messieurs, vous avez eu quel(s) numéro(s) ? Vous préférez quel numéro ?", 
    type: "text",
    image: "/modeles4.png"
  },
  { 
    id: 73, 
    category: "Morphologie", 
    text: "Mesdames, vous êtes ? Messieurs, vous avez eu quel(s) modèle(s) ? Vous préférez quel modèle ?", 
    type: "text",
    image: "/modeles5.jpg"
  },
  { 
    id: 74, 
    category: "Morphologie", 
    text: "Avec lequel de vos partenaires avez-vous eu le plus de rapports ? (avec précision).", 
    type: "text" 
  },
  { 
    id: 75, 
    category: "Morphologie", 
    text: "Mesdames, vous êtes ? Messieurs, vous avez eu quel(s) numéro(s) ? Vous préférez quel numéro ?", 
    type: "text",
    image: "/modeles6.jpg"
  },
  { id: 76, category: "Morphologie", text: "Vous préférez / vous avez :", type: "radio", options: ["Grosses fesses et grosse poitrine", "Grosses fesses et poitrine moyenne", "Grosses fesses et petite poitrine", "Fesses moyennes et grosse poitrine", "Fesses moyennes et poitrine moyenne", "Fesses moyennes et petite poitrine", "Petites fesses et grosse poitrine", "Petites fesses et poitrine moyenne", "Petites fesses et petite poitrine"] },
  { id: 77, category: "Morphologie", text: "Vous préférez / vous avez :", type: "radio", options: ["Gros tétons", "Petits tétons"] },
  { id: 78, category: "Morphologie", text: "Vous préférez / pratiquez :", type: "radio", options: ["Cunnilingus", "Annulingus", "Les deux", "Aucun des deux"] },
  { id: 79, category: "Morphologie", text: "Vous préférez / possédez un vagin :", type: "radio", options: ["Petit et bien serré", "Petit et ouvert", "Grand et serré", "Grand et ouvert"] },
  { id: 80, category: "Morphologie", text: "Vous préférez / possédez des lèvres vaginales :", type: "radio", options: ["Des lèvres discrètes", "Des lèvres apparentes", "De petites lèvres voyantes", "De grandes lèvres voyantes"] },
  { id: 81, category: "Morphologie", text: "Vous préférez / pratiquez :", type: "radio", options: ["Fellation", "Il n'en est pas question", "Si mon partenaire l'aime"] },
  { id: 82, category: "Morphologie", text: "Pour vous, un bon partenaire doit être ou avoir quoi ?", type: "text" },
  { id: 83, category: "Morphologie", text: "Si vous deviez choisir un de vos partenaires, lequel choisiriez-vous pour être la référence dans vos rapports précédents, présents et futurs ? Et pourquoi ? (Un nom ou un indice).", type: "text" },

  // --- SECTION 4 : SANTÉ & PRATIQUES (FANTASMES) ---
  { 
    id: 84, 
    category: "Pratiques", 
    text: "Avez-vous eu des pratiques spéciales ?", 
    type: "radio", 
    options: ["Soumission extrême", "Domination extrême", "Plan à 3 FFH", "Plan à 3 HHF", "Plan à 4 HHFF", "Plan à 4 HHHF", "Plan à 4 FFFH", "Jeu de rôle sexuel", "Utilisation de sextoys", "Jeux avec de la nourriture", "Jeux de pisse", "BDSM"] 
  },
  { 
    id: 85, 
    category: "Pratiques", 
    text: "Les pratiques spéciales que vous voulez essayer :", 
    type: "radio", 
    options: ["Soumission extrême", "Domination extrême", "Plan à 3 FFH", "Plan à 3 HHF", "Plan à 4 HHFF", "Plan à 4 HHHF", "Plan à 4 FFFH", "Jeu de rôle sexuel", "Utilisation de sextoys", "Jeux avec de la nourriture", "Jeux de pisse", "BDSM"] 
  },
  { id: 86, category: "Pratiques", text: "Votre fantasme le plus fou ?", type: "text" },
  { id: 87, category: "Pratiques", text: "Avez-vous eu des fantasmes libertins ? Si oui, écrivez-les.", type: "text" },
  { id: 88, category: "Pratiques", text: "Avez-vous eu des pratiques libertines ? Si oui, écrivez lesquelles.", type: "text" },
  { id: 89, category: "Pratiques", text: "Vous êtes-vous filmés ou pris en photo pendant l'acte ?", type: "radio", options: ["Filmé(e)", "Pris(e) en photo", "Aucun des deux"] },
  { 
    id: 90, 
    category: "Pratiques", 
    text: "Gardez-vous quelque chose de vos partenaires ?", 
    type: "radio", 
    options: ["Photo du visage", "Photo du corps", "Photo du sexe", "Vidéo de vous (sextape)"]
  },
  { 
    id: 91, 
    category: "Pratiques", 
    text: "Choisissez vos positions préférées. Si elles ne sont pas disponibles, veuillez les mentionner dans la question suivante.", 
    type: "text",
    image: "/modeles7.png"
  },
  { id: 92, category: "Pratiques", text: "Votre/vos position(s) préférée(s) ?", type: "text" },
  { id: 93, category: "Pratiques", text: "L'endroit le plus fou où vous l'avez fait ?", type: "text" },
  { 
    id: 94, 
    category: "Pratiques", 
    text: "Vous aimez porter / vous aimez que votre partenaire porte ?", 
    type: "text",
    image: "/modeles8.jpg"
  },
  { id: 95, category: "Pratiques", text: "Votre ou vos meilleurs plans étaient ? avec précision ( un nom )", type: "text" },
  { id: 96, category: "Pratiques", text: "Votre mauvaise aventure était ? (Donnez des précisions).", type: "text" },
  { id: 97, category: "Pratiques", text: "Vos partenaires étaient / vous êtes plutôt :", type: "radio", options: ["Doux", "Agressifs", "Un mélange des deux"] },
  { id: 98, category: "Pratiques", text: "Vous préférez quoi ? Écrivez en quelques mots.", type: "text" },
  { id: 99, category: "Pratiques", text: "L'avez-vous fait contre un service ou de l'argent ? Si oui, précisez comment brièvement.", type: "text" },
  { id: 100, category: "Pratiques", text: "La chose la plus folle que vous ayez faite en sexualité ?", type: "text" },
  { id: 101, category: "Pratiques", text: "L'un de vos partenaires vous a-t-il fait une cicatrice ? Si oui, veuillez préciser où et raconter sa petite histoire.", type: "text" },
  { id: 102, category: "Pratiques", text: "L'un ou plusieurs de vos partenaires vous ont-ils suggéré(e) à d'autres comme étant un bon coup ?", type: "text" },
  { id: 103, category: "Pratiques", text: "Avez-vous suggéré un ou plusieurs de vos partenaires à d'autres personnes ? Si oui, précisez.", type: "text" },
  { id: 104, category: "Pratiques", text: "Lequel de vos partenaires peut être une référence pour vos rapports présents, passés et futurs ? Et pourquoi ? (Un indice ou un nom).", type: "text" },
  
  // --- SECTION 5 : NOTE FINALE ---
  { id: 105, category: "Avis", text: "Veuillez noter ce sondage, merci !", type: "radio", options: ["1", "2", "3", "4", "5"] }
];

export const finalThankYouMessage = "Votre contribution est désormais enregistrée. Merci d'avoir pris le temps de répondre à ce questionnaire avec sincérité. Vos données, traitées de manière strictement anonyme, sont précieuses pour la réussite de cette étude.";