'use client';

interface ContactPageProps {
  content: string;
}

export default function ContactPage({ content }: ContactPageProps) {
  const parseMarkdown = (text: string) => {
    return text
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl sm:text-4xl font-bold text-black mb-6 text-center">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl sm:text-2xl font-bold text-black mb-3 mt-6">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-black">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic text-gray-700">$1</em>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-800 mb-2 list-disc">$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 text-gray-800 mb-2">$1. $2</li>')
      .replace(/`(.+?)`/g, '<code class="bg-gray-200 px-2 py-1 rounded text-blue-600 font-mono text-sm">$1</code>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mb-20">
      {/* Titre de la page avec style boutique */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3">
          Contact
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Affichage instantané du contenu */}
      {content ? (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12 bg-white/80 rounded-2xl">
          <p className="text-lg">Aucun contenu disponible</p>
          <p className="text-sm mt-2">Configurez cette page depuis le panel admin</p>
        </div>
      )}
    </div>
  );
}