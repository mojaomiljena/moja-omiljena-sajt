export default function Home() {
  return (
    <div className="min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Moja Omiljena</h1>
      <p className="text-lg mb-10">Dobrodošli u butik ženske garderobe sa stilom i dušom!</p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <img src="https://via.placeholder.com/600x400?text=Kombinezon" alt="Kombinezon" className="rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-pink-600 mb-2">Kombinezoni</h2>
          <p className="text-sm mb-2">Udobni, praktični i lagani. Veličine: S, M, L.</p>
          <a href="viber://forward?text=Zelim kombinezon" className="inline-block mt-2 bg-pink-500 text-white px-4 py-2 rounded-full">Poruči preko Vibera</a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <img src="https://via.placeholder.com/600x400?text=Haljina" alt="Haljina" className="rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-pink-600 mb-2">Crna Haljina</h2>
          <p className="text-sm mb-2">Klasična crna haljina. Veličine: S, M, L.</p>
          <a href="viber://forward?text=Zelim crnu haljinu" className="inline-block mt-2 bg-pink-500 text-white px-4 py-2 rounded-full">Poruči preko Vibera</a>
        </div>
      </section>

      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-pink-700">Prati nas na Instagramu</h3>
        <a href="https://www.instagram.com/moja.omiljena/" target="_blank" className="text-pink-500 underline">@moja.omiljena</a>
      </div>
    </div>
  );
}

