'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FinDuQuiz() {
  const [copied, setCopied] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-900/80 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-8 shadow-2xl shadow-purple-950/40 text-center space-y-6">
        
        {/* Badge de succès */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
            ✓
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Merci pour votre contribution ! 🎉
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vos réponses sont enregistrées et resteront strictement anonymes. Vous avez aidé cette étude à être plus complète.
          </p>
        </div>

        {/* Notez cette expérience */}
        <div className="pt-2 border-t border-gray-800/80">
          <p className="text-xs text-gray-400 mb-3">Notez cette expérience</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl transition transform hover:scale-110 ${
                  rating && star <= rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Bouton de partage */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handleShare}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:opacity-95 transition shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{copied ? 'Lien copié !' : 'Partagez le lien'}</span>
            <span>🔗</span>
          </button>
        </div>

        {/* Retour à l'accueil */}
        <div>
          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-gray-300 transition underline underline-offset-4"
          >
            Retourner à l'accueil
          </Link>
        </div>

      </div>
    </div>
  );
}