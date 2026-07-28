export default function Features() {
  const steps = [
    { id: "1", title: "Répondez", desc: "à votre rythme" },
    { id: "2", title: "Anonyme", desc: "et sécurisé" },
    { id: "3", title: "Comprenez", desc: "les perceptions" },
    { id: "4", title: "Consultez", desc: "les résultats" },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          // Tout ce qui suit doit être à l'intérieur de cette parenthèse
          <div key={step.id} className="p-8 bg-[#0c0c16] rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold text-xl mb-6">
              {step.id}
            </div>
            <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}