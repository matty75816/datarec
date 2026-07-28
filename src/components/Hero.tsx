export default function Hero() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
        Étude <span className="text-blue-500">2026</span>
      </h1>
      <p className="text-gray-400 text-lg mb-8">Bienvenue dans l'étude confidentielle.</p>
      
      <a 
        href="/quiz" 
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
      >
        Commencer l'étude →
      </a>
    </section>
  );
}