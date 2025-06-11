import './globals.css';

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

          <div id="kratki-kombinezoni" className="mt-20"></div>
          <div id="dugi-kombinezoni" className="mt-20"></div>

          {/* Galerija haljina */}
          <div id="haljine" className="mt-20">
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-8">Haljine</h2>
            <div className="grid grid-cols-1 gap-10">
              <div>
                <img src="/haljina1.jpg" alt="Haljina 1" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Crna haljina bez bretela • 3.500 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina2.jpg" alt="Haljina 2" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa izrezom • 3.400 RSD • Veličine: S, M</p>
              </div>
              <div>
                <img src="/haljina3.jpg" alt="Haljina 3" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa šeširom • 3.500 RSD • Veličine: M, L</p>
              </div>
              <div>
                <img src="/haljina4.jpg" alt="Haljina 4" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa tankim bretelama • 3.200 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina5.jpg" alt="Haljina 5" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina crna gola leđa • 3.400 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina6.jpg" alt="Haljina 6" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina gola leđa plaža • 3.400 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina7.jpg" alt="Haljina 7" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa otvorenim leđima • 3.500 RSD • Veličine: S, M</p>
              </div>
              <div>
                <img src="/haljina8.jpg" alt="Haljina 8" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Crna elegantna haljina • 3.600 RSD • Veličine: M, L</p>
              </div>
              <div>
                <img src="/haljina9.jpg" alt="Haljina 9" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa slamnatim šeširom • 3.500 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina10.jpg" alt="Haljina 10" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa šeširom i pojasom • 3.600 RSD • Veličine: S, M</p>
              </div>
              <div>
                <img src="/haljina11.jpg" alt="Haljina 11" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina crna gola leđa – dvorište • 3.500 RSD • Veličine: S, M, L</p>
              </div>
              <div>
                <img src="/haljina12.jpg" alt="Haljina 12" className="rounded-xl shadow-md mb-2" />
                <p className="text-center font-semibold">Haljina sa šeširom u prirodi • 3.600 RSD • Veličine: S, M, L</p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
