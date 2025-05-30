import './globals.css';

export const metadata = {
  title: 'Moja Omiljena',
  description: 'Kombinezoni i haljine od viskoze za vrele letnje dane. Udobnost, ženstvenost i jednostavnost.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Dobrodošla u "Moja Omiljena"</h1>
          <p className="max-w-2xl mx-auto text-lg">
            "Moja Omiljena" je nastala iz potrebe za udobnošću, pre svega. Modeli su napravljeni od viskoze koja je
            prirodni materijal i kako kažu – leti hladi dok pamuk ipak greje. Isprobaj i ti modele dizajnirane da se
            nose bez brushaltera za vrele letnje dane. Neka neki od modela postane i Tvoj Omiljeni!
          </p>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Kratki kombinezoni</h2>
              <p className="mb-4">Savršeni za gradske šetnje i leto u pokretu.</p>
              <a
                href="#kratki-kombinezoni"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Dugi kombinezoni</h2>
              <p className="mb-4">Elegancija i udobnost u jednom komadu odeće.</p>
              <a
                href="#dugi-kombinezoni"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Haljine</h2>
              <p className="mb-4">Za svaki dan i posebne prilike – tvoja omiljena haljina!</p>
              <a
                href="#haljine"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
              >
                Pogledaj kolekciju
              </a>
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">Moja Omiljena</h2>
            <p className="mb-6">Dobrodošli u butik ženske garderobe sa stilom i dušom!</p>
            <a
              href="https://www.instagram.com/moja.omiljena"
              className="text-pink-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @moja.omiljena
            </a>
          </section>

          {/* SEKCIJA: KRATKI KOMBINEZONI */}
          <div id="kratki-kombinezoni" className="mt-20">
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Kratki kombinezoni</h2>
            <p className="text-center mb-10">Udobni, praktični i lagani modeli za leto.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-4">
                <img src="/images/kombinezon-kratki1.jpg" alt="Kratki kombinezon" className="rounded mb-4" />
                <h3 className="font-semibold text-lg">Kombinezon cvetni mint</h3>
                <p className="text-sm mb-2">Veličine: S, M</p>
                <p className="text-sm text-pink-600 font-bold">3.200 RSD</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4">
                <img src="/images/kombinezon-kratki2.jpg" alt="Kratki kombinezon" className="rounded mb-4" />
                <h3 className="font-semibold text-lg">Kombinezon žuti cvetni</h3>
                <p className="text-sm mb-2">Veličine: S, M, L</p>
                <p className="text-sm text-pink-600 font-bold">3.200 RSD</p>
              </div>
            </div>
          </div>

          {/* DODAJU SE NAKNADNO: dugi kombinezoni i haljine */}
          <div id="dugi-kombinezoni" className="mt-20"></div>
          <div id="haljine" className="mt-20"></div>
        </main>
      </body>
    </html>
  );
}
