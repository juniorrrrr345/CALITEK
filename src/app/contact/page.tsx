'use client';
import { useState, useEffect } from 'react';
import ContactPage from '@/components/ContactPage';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function ContactPageRoute() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Charger et rafraîchir le contenu
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/pages/contact', { cache: 'no-store' });
        if (response.ok) {
          const text = await response.text();
          if (text) {
            try {
              const data = JSON.parse(text);
              setContent(data.content || '');
            } catch (e) {
              console.error('Erreur parsing JSON:', e);
            }
          }
        }
      } catch (error) {
        console.error('Erreur chargement contact:', error);
      } finally {
        setLoading(false);
      }
    };

    // Charger immédiatement
    loadContent();

    // Rafraîchir toutes les 2 secondes pour voir les changements instantanément
    const interval = setInterval(loadContent, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      {/* Overlay global toujours présent */}
      <div className="global-overlay"></div>
      
      {/* Contenu principal */}
      <div className="content-layer">
        <Header />
        <div className="pt-12 sm:pt-14">
          <div className="h-4 sm:h-6"></div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-white/60">Chargement</p>
            </div>
          ) : (
            <ContactPage content={content} />
          )}
        </div>
      </div>
      
      {/* BottomNav */}
      <BottomNav />
    </div>
  );
}