import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  // On utilise des valeurs par défaut pour que le build ne plante pas
  // Si les variables Vercel sont absentes, on aura des chaînes vides
  const supabaseUrl = process.env.DB_URL_SUPABASE || "https://placeholder.co";
  const supabaseKey = process.env.DB_KEY_SUPABASE || "placeholder-key";

  // Initialisation sécurisée
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // Reste de ta logique...
  return NextResponse.json({ success: true });
}