import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// NE PAS appeler createClient ici, en dehors de la fonction.

export async function POST(request: Request) {
  // Cette fonction ne sera appelée que lors d'une vraie requête HTTP, 
  // jamais au moment du build.
  
  const supabaseUrl = process.env.DB_URL_SUPABASE;
  const supabaseKey = process.env.DB_KEY_SUPABASE;

  if (!supabaseUrl || !supabaseKey) {
     return NextResponse.json({ error: "Variables manquantes" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // ... reste de ta logique ...
  return NextResponse.json({ success: true });
}