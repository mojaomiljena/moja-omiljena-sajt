export default function HaljinePage() {
  const haljine = Array.from({ length: 12 }, (_, i) => ({
    slika: `/images/haljina${i + 1}.jpg`,
    naziv: 'Haljina',
    cena: '4.500 RSD',
    velicine: 'S, M, L',
  }));

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Haljine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {haljine.map((haljina, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={haljina.slika}
              alt={`Haljina ${index + 1}`}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{haljina.naziv}</h2>
              <p className="text-pink-600 font-bold">{haljina.cena}</p>
              <p className="text-sm text-gray-500">Veličine: {haljina.velicine}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
