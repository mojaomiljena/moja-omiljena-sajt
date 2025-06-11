import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Moja Omiljena',
  description:
    'Ženska garderoba od viskoze za leto. Kombinezoni i haljine koje se nose bez brushaltera. Udobnost, stil i jednostavnost.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Dobrodošla u "Moja Omiljena"</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Kolekcija garderobe nastala iz potrebe za udobnošću i jednostavnošću. Svi modeli su od viskoze – prirodnog
            materijala koji leti hladi. Nosi se bez brushaltera, za opušten, ženstven i autentičan letnji stil.
          </p>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Kratki kombinezoni</h2>
              <p className="mb-4">Savršeni za gradske šetnje i leto u pokretu.</p>
              <Link
                href="/kratki-kombinezoni"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Dugi kombinezoni</h2>
              <p className="mb-4">Elegancija i udobnost u jednom komadu odeće.</p>
              <Link
                href="/dugi-kombinezoni"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Haljine</h2>
              <p className="mb-4">Za svaki dan i posebne prilike – tvoja omiljena haljina!</p>
              <Link
                href="/haljine"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
