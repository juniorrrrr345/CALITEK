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