import './globals.css';

export const metadata = {
  title: 'Moja Omiljena',
  description: 'Kombinezoni i haljine od viskoze za vrele letnje dane. Udobnost, ženstvenost i jednostavnost.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-pink-700">Dobrodošla u "Moja Omiljena"</h1>
            <p className="mt-4 text-lg text-gray-700">
              "Moja Omiljena" je nastala iz potrebe za udobnošću, pre svega. Modeli su napravljeni od viskoze koja je prirodni materijal i kako kažu – leti hladi dok pamuk ipak greje. Isprobaj i ti modele dizajnirane da se nose bez brushaltera za vrele letnje dane. Neka neki od modela postane i Tvoj Omiljeni!
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Kratki kombinezoni</h2>
              <p className="text-sm text-gray-600">Savršeni za gradske šetnje i leto u pokretu.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Dugi kombinezoni</h2>
              <p className="text-sm text-gray-600">Elegancija i udobnost u jednom komadu odeće.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Haljine</h2>
              <p className="text-sm text-gray-600">Za svaki dan i posebne prilike – tvoja omiljena haljina!</p>
            </div>
          </section>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-pink-600 text-white font-medium rounded-full shadow hover:bg-pink-700 transition"
            >
              Pogledaj kolekciju
            </a>
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
