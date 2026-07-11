import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers } = body;

    // Nous générons un ID aléatoire basé sur le temps pour être sûr qu'il soit unique
    // Comme ta colonne est un 'bigint', nous créons un nombre basé sur la date actuelle
    const manualId = Date.now(); 

    const { data, error } = await supabase
      .from('data')
      .insert([{ 
        id: manualId, // On envoie manuellement l'ID
        reponses: answers 
      }]);

    if (error) {
      console.error("Erreur Supabase :", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}