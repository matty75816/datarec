import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  // Initialisation à l'intérieur de la fonction
  const supabaseUrl = process.env.DB_URL_SUPABASE;
  const supabaseKey = process.env.DB_KEY_SUPABASE;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Variables manquantes" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // ... reste de ton code utilisant "supabase"
}