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
          {children}
        </main>
      </body>
    </html>
  );
}
