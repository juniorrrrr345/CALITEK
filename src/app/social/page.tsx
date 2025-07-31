import Link from 'next/link';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { connectToDatabase } from '@/lib/mongodb-fixed';

interface SocialLink {
  _id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  isActive: boolean;
}

interface Settings {
  shopTitle: string;
  shopSubtitle: string;
  email: string;
  address: string;
  whatsappLink: string;
}

async function getSocialData() {
  try {
    const { db } = await connectToDatabase();
    
    const [socialLinks, settings] = await Promise.all([
      db.collection('socialLinks').find({ isActive: true }).toArray(),
      db.collection('settings').findOne({})
    ]);
    
    return {
      socialLinks: socialLinks as SocialLink[],
      settings: settings as Settings | null
    };
  } catch (error) {
    console.error('Erreur chargement social:', error);
    return {
      socialLinks: [],
      settings: null
    };
  }
}

export default async function SocialPage() {
  // Charger les données côté serveur
  const { socialLinks, settings } = await getSocialData();

  // Structure cohérente avec la boutique principale
  return (
    <div className="main-container">
      {/* Overlay global toujours présent */}
      <div className="global-overlay"></div>
      
      {/* Contenu principal */}
      <div className="content-layer">
        <Header />
        
        <div className="pt-12 sm:pt-14">
          <div className="h-4 sm:h-6"></div>
          
          <main className="pt-4 pb-24 sm:pb-28 px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl mx-auto">
            {/* Titre de la page avec style boutique */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3">
                Nos Réseaux
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto px-4 font-medium">
                Rejoignez <span className="text-blue-600 font-bold">{settings?.shopTitle || 'CALITEK'}</span> sur nos réseaux sociaux
              </p>
            </div>

            {socialLinks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link._id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200"
                  >
                    {/* Effet de hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${link.color}, transparent)`
                      }}
                    />
                    
                    <div className="relative p-6 sm:p-8 text-center">
                      {/* Icône avec fond coloré */}
                      <div 
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl sm:text-4xl transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${link.color}20`,
                          color: link.color
                        }}
                      >
                        {link.icon}
                      </div>
                      
                      {/* Nom du réseau */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                        {link.name}
                      </h3>
                      
                      {/* Indicateur de couleur */}
                      <div 
                        className="w-12 h-1 mx-auto rounded-full transition-all group-hover:w-16"
                        style={{ backgroundColor: link.color }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white/80 rounded-2xl">
                <p className="text-gray-500 text-lg">
                  Aucun réseau social configuré pour le moment.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Configurez vos réseaux depuis le panel admin
                </p>
              </div>
            )}

            {/* Section contact plus visible */}
            {settings?.whatsappLink && (
              <div className="mt-12 sm:mt-16 text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                  💬 Besoin d&apos;aide ?
                </h2>
                <a
                  href={settings.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Contactez-nous sur WhatsApp</span>
                </a>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {/* BottomNav toujours visible */}
      <BottomNav />
    </div>
  );
}