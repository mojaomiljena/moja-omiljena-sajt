import React from "react";

export default function Home() {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen font-sans">
      {/* Hero sekcija */}
      <header className="bg-white shadow-md py-10 px-6 text-center">
        <h1 className="text-4xl font-bold text-pink-600">Moja Omiljena</h1>
        <p className="mt-2 text-lg">Dobrodošli u butik ženske garderobe sa stilom i dušom!</p>
      </header>

      {/* Kolekcije */}
      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-pink-700">Nova kolekcija</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kombinezoni */}
          <div className="bg-white rounded-2xl shadow p-6">
            <img
              src="https://via.placeholder.com/600x400?text=Kombinezon"
              alt="Kombinezon"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Kombinezoni</h3>
            <p className="mb-2">Uživajte u udobnosti kombinezona od 100% viskoze. Savršen za šetnju, plažu ili kod kuće.</p>
            <p className="text-sm text-gray-500 mb-4">Veličine: S, M, L</p>
            <a
              href="viber://forward?text=Zelim da porucim kombinezon - Moja Omiljena"
              className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
            >
              Poruči preko Vibera
            </a>
          </div>

          {/* Haljine */}
          <div className="bg-white rounded-2xl shadow p-6">
            <img
              src="https://via.placeholder.com/600x400?text=Haljina"
              alt="Haljina"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Crna Haljina</h3>
            <p className="mb-2">Klasična crna haljina od prijatnog materijala. Elegantna i udobna.</p>
            <p className="text-sm text-gray-500 mb-4">Veličine: S, M, L</p>
            <a
              href="viber://forward?text=Zelim da porucim crnu haljinu - Moja Omiljena"
              className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
            >
              Poruči preko Vibera
            </a>
          </div>
        </div>
      </section>

      {/* Instagram sekcija */}
      <section className="py-10 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">Prati nas na Instagramu</h2>
        <p className="mb-6 text-gray-600">Za više modela i inspiraciju, pogledaj naš profil</p>
        <a
          href="https://www.instagram.com/moja.omiljena/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
        >
          @moja.omiljena
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 text-center py-6 mt-10 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Moja Omiljena. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}
