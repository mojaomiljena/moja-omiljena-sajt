// Ovo je test da očistimo Vercel build
export default function Haljine() {
  const brojHaljina = 12;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Haljine</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: brojHaljina }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={`/images/haljina${i + 1}.jpg`}
              alt={`Haljina ${i + 1}`}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <p className="mt-2 text-lg">Haljina {i + 1}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
