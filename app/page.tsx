'form' // Si vous avez besoin d'interactivité, vous pouvez passer en 'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col font-sans">
      
      {/* HEADER DE NAVIGATION */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60 bg-[#0b0f19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/30">
            💖
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide block leading-tight">Étude 2026</span>
            <span className="text-xs text-gray-400">Sexualité & Perceptions</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-purple-400 hover:text-white transition">Accueil</a>
          <a href="#" className="hover:text-white transition">À propos</a>
          <a href="#" className="hover:text-white transition">Confidentialité</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
          <a href="#" className="hover:text-white transition">Statistiques</a>
        </nav>
      </header>

      {/* SECTION HERO (AVEC LA PHOTO EN ARRIÈRE-PLAN) */}
      <main className="relative flex-1 flex items-center justify-center px-4 py-12 overflow-hidden">
        
        {/* Arrière-plan avec la photo et un voile sombre pour la lisibilité */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 filter brightness-75"
          style={{ backgroundImage: `url('/A01.png')` }}
        />
        {/* Dégradé pour fondre l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent z-0" />

        <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Texte de présentation */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% Anonyme</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Étude 2026 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
                Sexualité & Perceptions
              </span>
            </h1>
            
            <p className="text-gray-300 text-base leading-relaxed">
              Une étude confidentielle sur les expériences, les préférences et les perceptions sexuelles chez les adultes en 2026.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-400 pt-2">
              <div className="flex items-center space-x-1.5 bg-gray-900/60 px-3 py-1.5 rounded-lg border border-gray-800">
                <span>🔒</span><span>100% Anonyme</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-gray-900/60 px-3 py-1.5 rounded-lg border border-gray-800">
                <span>🛡️</span><span>Sécurisé & Chiffré</span>
              </div>
            </div>
          </div>

          {/* Formulaire Email + Bouton Commencer */}
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/80 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-purple-950/40">
            <form action="/quiz" method="GET" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Votre adresse email <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="nom@exemple.com"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                <p className="text-[11px] text-gray-400 mt-2 leading-normal">
                  Cette vérification par email est nécessaire pour lutter contre les spams et les bots, garantissant ainsi l'intégrité de l'étude.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:opacity-95 transition shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Commencer l'étude</span>
                <span className="group-hover:translate-x-1 transition">→</span>
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}