import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb-fixed';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const page = await db.collection('pages').findOne({ slug: 'info' });
    
    return NextResponse.json({
      content: page?.content || '',
      updatedAt: page?.updatedAt || new Date()
    });
  } catch (error) {
    console.error('Erreur API info:', error);
    return NextResponse.json({ content: '', error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { content, title } = await request.json();
    const { db } = await connectToDatabase();
    
    const result = await db.collection('pages').replaceOne(
      { slug: 'info' },
      { 
        slug: 'info', 
        title: title || 'Informations', 
        content: content || '', 
        updatedAt: new Date() 
      },
      { upsert: true }
    );
    
    console.log('✅ Page info sauvegardée');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Erreur API info POST:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Erreur inconnue' 
    }, { status: 500 });
  }
}