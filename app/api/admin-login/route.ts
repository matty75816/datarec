import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true }, { status: 200 });
      
      // Définition d'un cookie sécurisé valable 1 jour
      response.cookies.set({
        name: 'admin_auth',
        value: 'authenticated',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 heures
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, error: 'Mot de passe incorrect' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}