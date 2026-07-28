"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';

export default function FinDuQuiz() {
  const router = useRouter();
  const siteUrl = "https://ton-site.com"; // Remplace par ton URL réelle
  const shareText = "Viens faire ce super quiz :";

  // Déclenchement des confettis au chargement
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(siteUrl);
    alert("Lien copié dans le presse-papier !");
  };

  return (
    <main className="min-h-screen bg-[#05050a] text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Merci pour votre temps !</h1>
      <p className="text-gray-400 mb-8">Pensez à partager avec vos amis.</p>

      {/* QR Code */}
      <div className="bg-white p-2 rounded-lg mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <QRCodeSVG value={siteUrl} size={150} />
      </div>

      {/* Réseaux Sociaux */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
        <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + siteUrl)}`} target="_blank" className="bg-green-600 p-3 rounded-lg font-bold hover:bg-green-700 transition">WhatsApp</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`} target="_blank" className="bg-blue-800 p-3 rounded-lg font-bold hover:bg-blue-900 transition">Facebook</a>
        <a href={`https://www.instagram.com/?url=${encodeURIComponent(siteUrl)}`} target="_blank" className="bg-pink-600 p-3 rounded-lg font-bold hover:bg-pink-700 transition">Instagram</a>
        <a href={`https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(siteUrl)}`} target="_blank" className="bg-yellow-400 text-black p-3 rounded-lg font-bold hover:bg-yellow-500 transition">Snapchat</a>
        <button onClick={copyToClipboard} className="col-span-2 bg-gray-700 p-3 rounded-lg font-bold hover:bg-gray-600 transition">Copier le lien</button>
      </div>

      <button onClick={() => router.push("/quiz")} className="text-blue-400 hover:text-blue-300 underline transition">
        Recommencer le quiz
      </button>
    </main>
  );
}