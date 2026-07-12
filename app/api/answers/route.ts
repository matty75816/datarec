export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  const supabaseUrl = process.env.DB_URL_SUPABASE;
  const supabaseKey = process.env.DB_KEY_SUPABASE;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Variables manquantes" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Ajoute ici le reste de ta logique (récupération des données, etc.)
  
  return NextResponse.json({ success: true });
}