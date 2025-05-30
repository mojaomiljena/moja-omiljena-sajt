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
          {children}
        </main>
      </body>
    </html>
  );
}
