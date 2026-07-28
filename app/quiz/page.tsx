'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizPage() {
  const router = useRouter();

  const questions = [
    {
      id: 2,
      title: "Veuillez choisir votre sexe",
      type: "checkbox",
      options: ["Homme", "Femme", "Transgenre HTF", "Transgenre FTH", "Autre"]
    },
    {
      id: 3,
      title: "Veuillez indiquer votre nationalité",
      type: "text"
    },
    {
      id: 4,
      title: "Veuillez indiquer votre ville de résidence",
      type: "text"
    },
    {
      id: 5,
      title: "Veuillez choisir un prénom ou un pseudonyme",
      type: "text"
    },
    {
      id: 6,
      title: "Veuillez préciser votre âge",
      type: "text"
    },
    {
      id: 7,
      title: "Veuillez choisir votre orientation sexuelle",
      type: "radio",
      options: ["Hétérosexuel", "Homosexuel", "Bisexuel", "Autre"]
    },
    {
      id: 8,
      title: "Veuillez préciser votre situation",
      type: "checkbox",
      options: [
        "CELIBATAIRE",
        "MARIE(E)",
        "DIVORCE(E)",
        "EN INSTANCE DE DIVORCE",
        "VEUF/VEUVE",
        "EN SEPARATION",
        "MARIE(E) AVEC UN OU DES AMANTS",
        "EN RELATION LIBRE",
        "Autre"
      ]
    },
    {
      id: 9,
      title: "Avez-vous déjà eu des rapports sexuels ?",
      type: "checkbox",
      options: ["Oui", "Non"]
    },
    {
      id: 10,
      title: "Si oui, veuillez préciser le nombre SVP ? et le genre pour les BI.",
      type: "text"
    },
    {
      id: 11,
      title: "À quand remonte votre premier rapport sexuel ?",
      type: "text"
    },
    {
      id: 12,
      title: "Avec qui était votre premier rapport ? (Indiquez un prénom ou un pseudo)",
      type: "text"
    },
    {
      id: 13,
      title: "À quand remonte votre dernier rapport sexuel ?",
      type: "text"
    },
    {
      id: 14,
      title: "Avec qui était votre dernier rapport ?",
      type: "text"
    },
    {
      id: 15,
      title: "Combien de partenaires sexuels avez-vous eu au cours de votre vie ?",
      type: "text"
    },
    {
      id: 16,
      title: "Où avez-vous connu vos partenaires ? (Veuillez spécifier pour chacun)",
      type: "text"
    },
    {
      id: 17,
      title: "Quel âge avait votre plus jeune partenaire ?",
      type: "text"
    },
    {
      id: 18,
      title: "Quel âge avait le plus âgé de vos partenaires ?",
      type: "text"
    },
    {
      id: 19,
      title: "Précision : Après combien de temps avez-vous couché avec vos partenaires (ex: premier soir, après un mois...) ?",
      type: "text"
    },
    {
      id: 20,
      title: "Pour les conservateurs : Avez-vous eu des rapports avant le mariage ?",
      type: "checkbox",
      options: ["Oui", "Non"]
    },
    {
      id: 21,
      title: "Avez-vous eu des rapports extra-conjugaux ?",
      type: "checkbox",
      options: ["Oui", "Non", "Jamais marié(e)", "Autre"]
    },
    {
      id: 22,
      title: "Si oui, précisez avec combien de partenaires ? (des désignations svp)",
      type: "text"
    },
    {
      id: 23,
      title: "L'avez-vous déjà fait en période de menstruation ?",
      type: "checkbox",
      options: ["Oui", "Non"]
    },
    {
      id: 24,
      title: "L'avez-vous déjà fait en période d'interdiction ? (médicale, religieuse ou autre...)",
      type: "text"
    },
    {
      id: 25,
      title: "Selon vous, une femme doit avoir combien de partenaires sexuels avant d'être dans une relation officielle ?",
      type: "text"
    },
    {
      id: 26,
      title: "Selon vous, un homme doit avoir combien de partenaires sexuels avant d'être dans une relation officielle ?",
      type: "text"
    },
    {
      id: 27,
      title: "Avez-vous eu des rapports après votre séparation ?",
      type: "checkbox",
      options: ["Oui avec mon ex", "Oui avec d'autres personnes", "Non", "Jamais marié(e)", "Autre"]
    },
    {
      id: 28,
      title: "Avez-vous des enfants ?",
      type: "checkbox",
      options: ["Oui", "Je suis enceinte", "Non", "Autre"]
    },
    {
      id: 29,
      title: "Vos rapports étaient protégés ?",
      type: "checkbox",
      options: [
        "Oui (avec préservatifs)",
        "Oui (avec stérilet)",
        "Non, je préfère le naturel",
        "Non, mon/mes partenaires n'aiment pas les préservatifs",
        "Pilule",
        "Autre"
      ]
    },
    {
      id: 30,
      title: "Avez-vous eu des accidents avec les moyens de contraception ? si oui précisez",
      type: "text"
    },
    {
      id: 31,
      title: "Votre sexualité a changé après votre accouchement ?",
      type: "checkbox",
      options: ["Augmentée", "Baissée", "Mon partenaire ne me désire plus comme avant", "Jamais été enceinte", "Autre"]
    },
    {
      id: 32,
      title: "Vous préférez / avez eu des éjaculations ?",
      type: "checkbox",
      options: [
        "Interne (vaginal)",
        "Interne (anal)",
        "Externe (sur une partie du corps)",
        "Externe (loin du corps)",
        "Dans un préservatif",
        "Autre"
      ]
    },
    {
      id: 33,
      title: "Avez-vous eu des rapports avec des personnes d'une autre nationalité ? si oui précisez, si non écrivez-le",
      type: "text"
    },
    {
      id: 34,
      title: "Quel type de relations entretenez-vous avec vos partenaires ?",
      type: "checkbox",
      options: ["AMOUREUX", "ETANT EN COUPLE", "SEX FRIENDS", "AMANT", "AMI(E)", "CONTRE UN SERVICE", "Autre"]
    },
    {
      id: 35,
      title: "Êtes-vous satisfait / satisfaite de vos partenaires (côté sexuel uniquement) ?",
      type: "checkbox",
      options: ["Oui", "Non", "Je cherche encore mieux", "Autre"]
    },
    {
      id: 36,
      title: "Avez-vous déjà simulé un orgasme ? Si oui avec combien de partenaires ?",
      type: "text"
    },
    {
      id: 37,
      title: "Quel est le nombre maximal de partenaires sexuels que vous avez eu durant la même journée ?",
      type: "text"
    },
    {
      id: 38,
      title: "Avez-vous pratiqué la sodomie ? (anal)",
      type: "checkbox",
      options: ["Oui", "Non", "Uniquement la sodomie", "Pénétration accidentelle dans le feu de l'action", "Autre"]
    },
    {
      id: 39,
      title: "Avez-vous pratiqué des rapports vaginaux ?",
      type: "checkbox",
      options: ["Oui", "Non", "Sodomie et vaginal", "Autre"]
    },
    {
      id: 40,
      title: "Vos partenaires étaient ?",
      type: "checkbox",
      options: [
        "Tous/toutes plus âgé(e)s que vous",
        "Tous/toutes moins âgé(e)s que vous",
        "Beaucoup étaient plus âgés et peu étaient moins âgés que vous",
        "Beaucoup étaient moins âgés et peu étaient plus âgés que vous",
        "Autre"
      ]
    },
    {
      id: 41,
      title: "Avez-vous fait face à l'éjaculation précoce ?",
      type: "checkbox",
      options: [
        "Oui tous mes partenaires",
        "Non aucun de mes partenaires",
        "Oui je le suis",
        "Non je ne le suis pas",
        "Quelques-uns",
        "Cela dépend du jour et du mood",
        "Autre"
      ]
    },
    {
      id: 42,
      title: "Quelle est la durée moyenne de chacun de vos rapports ?",
      type: "text"
    },
    {
      id: 43,
      title: "Quelle est la durée maximale de vos rapports ?",
      type: "text"
    },
    {
      id: 44,
      title: "Quelle est la durée minimale de vos rapports ?",
      type: "text"
    },
    {
      id: 45,
      title: "Quel est le nombre maximal d'orgasmes que vous avez atteint pendant un rapport ?",
      type: "text"
    },
    {
      id: 46,
      title: "Quel est le nombre maximal d'orgasmes que votre partenaire a atteint lors d'un rapport ?",
      type: "text"
    },
    {
      id: 47,
      title: "Quel est le nombre maximal d'enchaînement d'orgasmes que votre partenaire a eu sans prendre de temps après avoir éjaculé/jouit ?",
      type: "text"
    },
    {
      id: 48,
      title: "Quel est le nombre maximal d'enchaînement d'orgasmes que vous avez eu sans prendre de temps après avoir éjaculé/jouit ?",
      type: "text"
    },
    {
      id: 49,
      title: "Pour vous, le plus important c'est ?",
      type: "checkbox",
      options: [
        "1. Le nombre d'orgasmes que votre partenaire a eu pendant le rapport",
        "2. La durée du rapport",
        "3. Autre chose ? Éclairez svp"
      ]
    },
    {
      id: 50,
      title: "Vous êtes pour ?",
      type: "checkbox",
      options: [
        "Un homme qui jouit une seule fois pendant un rapport (une seule éjaculation qui dure tout le long du rapport)",
        "Un homme qui jouit plusieurs fois pendant un rapport (plusieurs éjaculations et reprises)",
        "Autre"
      ]
    },
    {
      id: 51,
      title: "À quoi vous avez le plus affaire ?",
      type: "radio",
      options: [
        "Érections molles",
        "Éjaculation précoce",
        "Érections qui ne durent pas longtemps",
        "Qui jouit rapidement même en faisant plusieurs coups",
        "Autre"
      ]
    },
    {
      id: 52,
      title: "Est-ce que vous avez pris des boosters sexuels en tous genre ? Si oui définissez le genre",
      type: "checkbox",
      options: ["Oui", "Non"]
    },
    {
      id: 53,
      title: "Est-ce que l'un de vos partenaires a déjà pris des boosters sexuels en tous genre ? Si oui veuillez spécifiez",
      type: "checkbox",
      options: ["Oui", "Non"]
    },
    {
      id: 54,
      title: "Pour les Femmes : où aimez-vous recevoir l'éjaculation / où avez-vous l'habitude de la recevoir ? Pour les Hommes : où aimez-vous éjaculer / et où avez-vous l'habitude de le faire ?",
      type: "text"
    },
    {
      id: 55,
      title: "Un partenaire moyennement membré doit avoir entre ? approximativement en cm ?",
      type: "text"
    },
    {
      id: 56,
      title: "Un partenaire bien membré doit avoir approximativement combien de cm ?",
      type: "text"
    },
    {
      id: 57,
      title: "Un partenaire en dessous de la moyenne doit avoir approximativement en cm ?",
      type: "text"
    },
    {
      id: 58,
      title: "Le partenaire le mieux membré que vous ayez eu (approximativement en cm) et quel rapport avez-vous avec ?? (spécifiez un indice pour le différencier, ex: un prénom)",
      type: "text"
    },
    {
      id: 59,
      title: "Le partenaire le moins membré que vous ayez eu (approximativement en cm) et quel rapport avez-vous avec ?? (spécifiez un indice)",
      type: "text"
    },
    {
      id: 60,
      title: "Avez-vous eu des partenaires...",
      type: "checkbox",
      options: [
        "Tous mes partenaires étaient bien membrés",
        "Une grande majorité de mes partenaires étaient bien membrés",
        "Une minorité de mes partenaires étaient bien membrés",
        "Aucun de mes partenaires n'était bien membré",
        "Tous mes partenaires étaient membrés moyennement",
        "Une grande majorité de mes partenaires étaient moyennement membrés",
        "Une minorité de mes partenaires étaient moyennement membrés",
        "Aucun de mes partenaires n'était moyennement membré",
        "Tous mes partenaires étaient en dessous de la moyenne",
        "Une grande majorité de mes partenaires étaient en dessous de la moyenne",
        "Une minorité de mes partenaires étaient en dessous de la moyenne",
        "Aucun de mes partenaires n'était en dessous de la moyenne",
        "Autre"
      ]
    },
    {
      id: 61,
      title: "Les sexes (pénis) de vos partenaires étaient pareils ou diffèrent ? Si oui citez, si non définissez les différences",
      type: "checkbox",
      options: ["Longueur", "Largeur", "Forme", "Érection", "Couleur de peau", "Autre"]
    },
    {
      id: 62,
      title: "Pour vous c'est beaucoup plus...",
      type: "checkbox",
      options: ["La longueur du pénis", "La largeur du pénis", "Long mais fin", "Large mais court", "Qui se complète en longueur et largeur", "Autre"]
    },
    {
      id: 63,
      title: "La forme que vous avez le plus croisée / ou possédez",
      type: "checkbox",
      options: ["Long et large", "Long et fin", "Large et court", "Moyen et large", "Moyen et fin", "Court et très large", "Court et fin", "Autre"]
    },
    {
      id: 64,
      title: "Veuillez choisir au moins 02 formes pour chaque type afin de mieux illustrer. Veuillez énumérer selon le nombre de partenaire.",
      type: "image-text",
      image: "/modeles.png",
      description: "Référez-vous à la planche globale des modèles ci-dessous :"
    },
    {
      id: 65,
      title: "Veuillez préciser pour combien de vos partenaires (exemple : 1 sur 4)",
      type: "text"
    },
    {
      id: 66,
      title: "Vous préférez / possédez...",
      type: "checkbox",
      options: ["Veineux", "Moyennement", "Sans veines", "Peu importe", "Autre"]
    },
    {
      id: 67,
      title: "Vos partenaires / vous êtes...",
      type: "checkbox",
      options: ["Tous circoncis", "Quelques-uns sont circoncis", "Aucun ne l'est", "Autre"]
    },
    {
      id: 68,
      title: "Tous vos partenaires avaient la même quantité de sperme en jouissant ?",
      type: "checkbox",
      options: ["Oui", "Non", "Autre"]
    },
    {
      id: 69,
      title: "Vous préférez / avez un pénis...",
      type: "checkbox",
      options: ["Un modèle rasé", "Un modèle moyennement rasé", "Un modèle poilu", "Autre"]
    },
    {
      id: 70,
      title: "Quelles sont les modèles que vous avez eu ? Lesquelles préférez-vous ? Vous êtes comment ?",
      type: "image-text",
      image: "/modeles1.jpg",
      description: "Référez-vous au Modèle 1 ci-dessous :"
    },
    {
      id: 71,
      title: "Vos partenaires étaient / vous êtes ?",
      type: "image-text",
      image: "/modeles2.jpg",
      description: "Référez-vous au Modèle 2 ci-dessous :"
    },
    {
      id: 72,
      title: "Avec lequel de tes partenaires avez-vous eu le plus de rapports ? (Avec précision)",
      type: "text"
    },
    {
      id: 73,
      title: "Vous êtes / vos partenaires étaient ?",
      type: "image-text",
      image: "/modeles3.png",
      description: "Référez-vous au Modèle 3 ci-dessous :"
    },
    {
      id: 74,
      title: "Vous préférez / vous avez...",
      type: "checkbox",
      options: [
        "Grosses fesses et grosse poitrine",
        "Grosses fesses, poitrine moyenne",
        "Grosses fesses, petite poitrine",
        "Fesses moyennes, grosse poitrine",
        "Fesses moyennes, poitrine moyenne",
        "Fesses moyennes, petite poitrine",
        "Petites fesses, grosse poitrine",
        "Petites fesses, poitrine moyenne",
        "Petites fesses, petite poitrine",
        "Autre"
      ]
    },
    {
      id: 75,
      title: "Mesdames vous êtes ? / Messieurs vous avez eu quel(s) numéro(s), vous préférez quel numéro ?",
      type: "image-text",
      image: "/modeles4.jpg",
      description: "Référez-vous au Modèle 4 ci-dessous :"
    },
    {
      id: 76,
      title: "Mesdames vous êtes ? / Messieurs vous avez eu quel(s) modèle(s), vous préférez quel modèle ?",
      type: "image-text",
      image: "/modeles5.jpg",
      description: "Référez-vous au Modèle 5 ci-dessous :"
    },
    {
      id: 77,
      title: "Vous possédez un vagin ? / Vous préférez un vagin...",
      type: "checkbox",
      options: ["Un modèle rasé ou épilé ?", "Un modèle moyennement rasé ou épilé ?", "Un modèle poilu ou non épilé ?", "Autre"]
    },
    {
      id: 78,
      title: "Mesdames vous êtes ? / Messieurs vous avez eu quel(s) modèle(s), vous préférez quel modèle ?",
      type: "image-text",
      image: "/modeles6.jpg",
      description: "Référez-vous au Modèle 6 ci-dessous :"
    },
    {
      id: 79,
      title: "Vous préférez / vous avez...",
      type: "checkbox",
      options: ["Gros tétons", "Petits tétons", "Autre"]
    },
    {
      id: 80,
      title: "Vous préférez / pratiquez...",
      type: "checkbox",
      options: ["Cunnilingus", "Anulingus", "Les deux", "Aucun des deux", "Autre"]
    },
    {
      id: 81,
      title: "Vous préférez / possédez un vagin...",
      type: "checkbox",
      options: ["Petit et bien serré", "Petit et ouvert", "Grand et serré", "Grand et ouvert", "Autre"]
    },
    {
      id: 82,
      title: "Vous préférez / possédez des lèvres vaginales...",
      type: "checkbox",
      options: ["Des lèvres discrètes", "Des lèvres apparentes", "De petites lèvres qui sont voyantes", "De grandes lèvres voyantes", "Autre"]
    },
    {
      id: 83,
      title: "Vous préférez / pratiquez...",
      type: "checkbox",
      options: ["Fellation", "Il n'en est pas question", "Si mon partenaire l'aime", "Autre"]
    },
    {
      id: 84,
      title: "Pour vous, un bon partenaire doit être ou avoir ?",
      type: "text"
    },
    {
      id: 85,
      title: "Si vous deviez choisir un de vos partenaires, lequel choisiriez-vous pour être la référence dans vos rapports précédents, présent et futur ? et pourquoi ? (nom ou indice)",
      type: "text"
    },
    {
      id: 86,
      title: "Avez-vous fait des pratiques spéciales ?",
      type: "checkbox",
      options: [
        "Soumission extrême",
        "Domination extrême",
        "Plan à 3 FFH",
        "Plan à 3 HHF",
        "Plan à 4 HHFF",
        "Plan à 4 HHHF",
        "Plan à 4 FFFH",
        "Jeu de rôle sexuel",
        "Utilisation de sextoys",
        "Jeux avec de la nourriture",
        "Jeux de pisses",
        "BDSM",
        "Autre"
      ]
    },
    {
      id: 87,
      title: "Les pratiques spéciales que vous voulez essayer :",
      type: "checkbox",
      options: [
        "Soumission extrême",
        "Domination extrême",
        "Plan à 3 FFH",
        "Plan à 3 HHF",
        "Plan à 4 HHFF",
        "Plan à 4 HHHF",
        "Plan à 4 FFFH",
        "Jeu de rôle sexuel",
        "Utilisation de sextoys",
        "Jeux avec de la nourriture",
        "Jeux de pisses",
        "BDSM",
        "Autre"
      ]
    },
    {
      id: 88,
      title: "Votre fantasme le plus fou :",
      type: "text"
    },
    {
      id: 89,
      title: "Avez-vous eu des fantasmes libertins ? Si oui, écrivez-les :",
      type: "text"
    },
    {
      id: 90,
      title: "Avez-vous eu des pratiques libertines ? Si oui, écrivez lesquelles :",
      type: "text"
    },
    {
      id: 91,
      title: "Vous êtes-vous filmés ou pris en photos pendant l'acte ?",
      type: "checkbox",
      options: ["Filmé", "Pris en photo", "Aucun des deux", "Autre"]
    },
    {
      id: 92,
      title: "Gardez-vous quelque chose de vos partenaires ?",
      type: "checkbox",
      options: ["Photo de visage", "Photo de corps", "Photo de sexe", "Vidéo de vous (sextape)", "Autre"]
    },
    {
      id: 93,
      title: "Choisissez vos positions préférées (si elles ne sont pas disponibles, veuillez les mentionner dans la question suivante)",
      type: "image-text",
      image: "/modeles7.png",
      description: "Référez-vous au Modèle 7 ci-dessous :"
    },
    {
      id: 94,
      title: "Votre/vos position(s) préférée(s) :",
      type: "text"
    },
    {
      id: 95,
      title: "L'endroit le plus fou où vous l'avez fait :",
      type: "text"
    },
    {
      id: 96,
      title: "Vous aimez porter / vous aimez que votre partenaire porte :",
      type: "image-text",
      image: "/modeles8.jpg",
      description: "Référez-vous au Modèle 8 ci-dessous :"
    },
    {
      id: 97,
      title: "Votre ou vos meilleurs plans étaient ? Avec précision (un nom) :",
      type: "text"
    },
    {
      id: 98,
      title: "Votre mauvaise aventure était ??? (donnez des précisions) :",
      type: "text"
    },
    {
      id: 99,
      title: "Vos partenaires étaient / vous êtes plutôt ??",
      type: "checkbox",
      options: ["Doux", "Agressifs", "Un mélange des deux ??", "Autre"]
    },
    {
      id: 100,
      title: "L'avez-vous fait contre un service ou de l'argent ? Si oui, précisez comment brièvement :",
      type: "text"
    },
    {
      id: 101,
      title: "La chose la plus folle que vous avez fait en sexualité :",
      type: "text"
    },
    {
      id: 102,
      title: "L'un de vos partenaires vous a fait une cicatrice ? Si oui, veuillez préciser où et raconter sa petite histoire :",
      type: "text"
    },
    {
      id: 103,
      title: "L'un ou plusieurs de vos partenaires vous ont suggéré d'autres comme étant un bon coup ?",
      type: "text"
    },
    {
      id: 104,
      title: "Avez-vous suggéré un ou plusieurs de vos partenaires à d'autres personnes ? Si oui, précisez :",
      type: "text"
    },
    {
      id: 105,
      title: "Lequel de vos partenaires peut être une référence pour vos rapports présent, passés et futur ? et pourquoi ? (indice ou nom)",
      type: "text"
    },
    {
      id: 107,
      title: "Veuillez noter ce sondage merci",
      type: "radio",
      options: ["1", "2", "3", "4", "5"]
    },
    {
      id: 108,
      title: "Souhaitez-vous laisser un avis ou un commentaire général sur ce questionnaire ?",
      type: "text"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [otherInputs, setOtherInputs] = useState<Record<number, string>>({});
  const [conditionalInputs, setConditionalInputs] = useState<Record<number, string>>({});
  const [errorMsg, setErrorMsg] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedOption = answers[currentQuestion.id];

  const isOtherSelected = typeof selectedOption === 'string' && selectedOption.toLowerCase().includes('autre');
  const isYesConditional = 
    currentQuestion.title.toLowerCase().includes('si oui') && 
    (selectedOption === 'Oui' || (typeof selectedOption === 'string' && selectedOption.toLowerCase().startsWith('oui')));

  const isAnswerValid = () => {
    const val = answers[currentQuestion.id];
    if (val === undefined || val === null || val === '') return false;
    if (isOtherSelected && (!otherInputs[currentQuestion.id] || otherInputs[currentQuestion.id].trim() === '')) return false;
    if (isYesConditional && (!conditionalInputs[currentQuestion.id] || conditionalInputs[currentQuestion.id].trim() === '')) return false;
    return true;
  };

  const handleNext = async () => {
    if (!isAnswerValid()) {
      setErrorMsg(true);
      return;
    }
    setErrorMsg(false);

    if (currentIndex === questions.length - 1) {
      try {
        const response = await fetch('/api/submit-quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            answers,
            otherInputs,
            conditionalInputs,
          }),
        });

        if (response.ok) {
          router.push('/merci');
        } else {
          alert("Une erreur est survenue lors de l'envoi du quiz.");
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
        alert('Impossible de contacter le serveur.');
      }
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setErrorMsg(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, answers, otherInputs, conditionalInputs]);

  const handleSelectOption = (questionId: number, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
    setErrorMsg(false);
  };

  const handleTextChange = (questionId: number, text: string) => {
    setAnswers({ ...answers, [questionId]: text });
    if (text.trim() !== '') setErrorMsg(false);
  };

  const handleOtherInputChange = (questionId: number, text: string) => {
    setOtherInputs({ ...otherInputs, [questionId]: text });
    if (text.trim() !== '') setErrorMsg(false);
  };

  const handleConditionalInputChange = (questionId: number, text: string) => {
    setConditionalInputs({ ...conditionalInputs, [questionId]: text });
    if (text.trim() !== '') setErrorMsg(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-purple-400 font-semibold">
            Question {currentIndex + 1} sur {questions.length}
          </span>
          <span className="text-xs text-gray-500">
            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">
          {currentQuestion.title}
        </h2>

        {/* --- IMAGE DISPLAY (For image-text types) --- */}
        {currentQuestion.image && (
          <div className="mb-6 bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
            {currentQuestion.description && (
              <p className="text-purple-300 mb-3 text-xs text-center font-medium">{currentQuestion.description}</p>
            )}
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden flex justify-center items-center">
              <img 
                src={currentQuestion.image} 
                alt="Illustration modèle" 
                className="max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* --- TEXT / IMAGE-TEXT INPUT HANDLER --- */}
        {currentQuestion.type === 'text' && (
          <div className="mb-8">
            <input 
              type="text" 
              placeholder="Votre réponse... (Appuyez sur Entrée)"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleTextChange(currentQuestion.id, e.target.value)}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-all"
              autoFocus
            />
          </div>
        )}

        {/* --- IMAGE-TEXT INPUT HANDLER --- */}
        {currentQuestion.type === 'image-text' && (
          <div className="mb-8">
            <input 
              type="text" 
              placeholder="Précisez votre choix par rapport à l'image... (Appuyez sur Entrée)"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleTextChange(currentQuestion.id, e.target.value)}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-all"
              autoFocus
            />
          </div>
        )}

        {/* --- CHECKBOX / RADIO HANDLER --- */}
        {(currentQuestion.type === 'checkbox' || currentQuestion.type === 'radio') && currentQuestion.options && (
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={option}
                  onClick={() => handleSelectOption(currentQuestion.id, option)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected 
                      ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              );
            })}

            {isOtherSelected && (
              <div className="mt-4 animate-fadeIn">
                <input 
                  type="text" 
                  placeholder="Veuillez préciser votre réponse... (Appuyez sur Entrée)"
                  value={otherInputs[currentQuestion.id] || ''}
                  onChange={(e) => handleOtherInputChange(currentQuestion.id, e.target.value)}
                  className="w-full p-4 bg-purple-950/20 border border-purple-500/50 rounded-2xl text-white focus:outline-none focus:border-purple-400 transition-all"
                  autoFocus
                />
              </div>
            )}

            {isYesConditional && (
              <div className="mt-4 animate-fadeIn">
                <input 
                  type="text" 
                  placeholder="Veuillez préciser (genre, détails)... (Appuyez sur Entrée)"
                  value={conditionalInputs[currentQuestion.id] || ''}
                  onChange={(e) => handleConditionalInputChange(currentQuestion.id, e.target.value)}
                  className="w-full p-4 bg-blue-950/20 border border-blue-500/50 rounded-2xl text-white focus:outline-none focus:border-blue-400 transition-all"
                  autoFocus
                />
              </div>
            )}
          </div>
        )}

        {/* Error Notification */}
        {errorMsg && (
          <div className="mb-4 text-red-400 text-sm font-medium animate-shake">
            Veuillez répondre à la question avant de continuer.
          </div>
        )}

        {/* --- NAVIGATION CONTROLS --- */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all disabled:opacity-30"
          >
            ← Précédent
          </button>
          
          <button 
            onClick={handleNext}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition-all"
          >
            {currentIndex === questions.length - 1 ? "Soumettre →" : "Suivant (Entrée) →"}
          </button>
        </div>
      </div>
    </main>
  );
}