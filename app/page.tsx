import { AnimalCard } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import animals from "@/data/animals.data";

export default function HomePage() {
  return (
    <main className="w-full h-screen">
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Find Your Perfect Companion
          </h1>
          <p className="text-gray-600">
            Discover loving animals waiting for their forever homes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
    </main>
  );
}
