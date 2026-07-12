export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Import dynamique ici seulement
  const { createClient } = await import('@supabase/supabase-js');

  const supabaseUrl = process.env.DB_URL_SUPABASE;
  const supabaseKey = process.env.DB_KEY_SUPABASE;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Variables manquantes" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  return NextResponse.json({ success: true });
}