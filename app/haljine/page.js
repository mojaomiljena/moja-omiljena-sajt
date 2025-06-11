export default function HaljinePage() {
  const slike = Array.from({ length: 12 }, (_, i) => `/images/haljina${i + 1}.jpg`);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Haljina</h1>
      <p className="text-center mb-8 text-lg">Cena: 4.500 RSD • Veličine: S, M, L</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slike.map((src, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={src} alt={`Haljina ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
