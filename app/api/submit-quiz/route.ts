import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from "@sentry/nextjs";

const supabase = createClient(
  'https://cmljznnkutqlrwvemjid.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbGp6bm5rdXRxbHJ3dmVtamlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MTU3OTMsImV4cCI6MjA5OTI5MTc5M30.L4rYACLbcN2H2zlyA3C422n4u82-vAqxRmbKoyvdXuQ'
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // On envoie tout dans un seul objet JSON si vos colonnes sont limitées
    const { data, error } = await supabase
      .from('quiz_submissions')
      .insert([
        {
          answers: body, // Enregistre tout le corps (answers, otherInputs, conditionalInputs)
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Détail de l\'erreur Supabase :', JSON.stringify(error));
      
      // Optionnel : Vous pouvez aussi capturer l'erreur Supabase dans Sentry si besoin
      Sentry.captureException(new Error(error.message));

      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Erreur serveur interne :', err);
    
    // Capture l'erreur inattendue et l'envoie sur Sentry
    Sentry.captureException(err);

    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}