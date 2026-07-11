"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questionsQuiz } from './questions';

export default function QuizComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [tempText, setTempText] = useState("");
  const [showConditionalInput, setShowConditionalInput] = useState(false);
  
  const router = useRouter();
  const currentQuestion = questionsQuiz[currentIndex];

  const sendAnswersToSupabase = async (allAnswers: Record<number, string>) => {
    try {
      const response = await fetch('/api/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: allAnswers }),
      });
      
      const result = await response.json();

      if (response.ok) {
        // Redirection vers la page de remerciement
        router.push('/merci');
      } else {
        alert("Erreur serveur : " + JSON.stringify(result));
      }
    } catch (error) {
      console.error("Erreur de fetch :", error);
      alert("Erreur de connexion.");
    }
  };

  const handleNext = () => {
    if (tempText) setAnswers(prev => ({ ...prev, [currentQuestion.id]: tempText }));
    setTempText("");
    setShowConditionalInput(false);
    if (currentIndex < questionsQuiz.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setTempText(answers[questionsQuiz[currentIndex - 1].id] || "");
      setShowConditionalInput(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Q{currentIndex + 1}. {currentQuestion.text}</h2>

      <div className="p-4 border rounded-lg bg-gray-50">
        <p>Type de question : {currentQuestion.type}</p>
        {/* Tu peux ajouter ici tes inputs selon le type de question */}
      </div>

      <div className="flex justify-between pt-4 border-t">
        <button 
          onClick={handleBack} 
          disabled={currentIndex === 0}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          ← Retour
        </button>

        <button 
          onClick={() => {
            if (currentIndex === questionsQuiz.length - 1) {
              const finalAnswers = { ...answers, [currentQuestion.id]: tempText };
              sendAnswersToSupabase(finalAnswers);
            } else {
              handleNext();
            }
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          {currentIndex === questionsQuiz.length - 1 ? "Envoyer les réponses →" : "Suivant →"}
        </button>
      </div>
    </div>
  );
}