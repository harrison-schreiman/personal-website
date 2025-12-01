import { MapPin } from 'lucide-react';

interface Country {
  name: string;
  continent: string;
  emoji: string;
  visited: boolean;
}

export default function Travel() {
  const countries: Country[] = [
    { name: 'USA', continent: 'North America', emoji: '🇺🇸', visited: true },
    { name: 'Canada', continent: 'North America', emoji: '🇨🇦', visited: true },
    { name: 'Mexico', continent: 'North America', emoji: '🇲🇽', visited: true },
    { name: 'Colombia', continent: 'South America', emoji: '🇨🇴', visited: true },
    { name: 'Brazil', continent: 'South America', emoji: '🇧🇷', visited: true },
    { name: 'UK', continent: 'Europe', emoji: '🇬🇧', visited: true },
    { name: 'Netherlands', continent: 'Europe', emoji: '🇳🇱', visited: true },
    { name: 'Belgium', continent: 'Europe', emoji: '🇧🇪', visited: true },
    { name: 'France', continent: 'Europe', emoji: '🇫🇷', visited: true },
    { name: 'Spain', continent: 'Europe', emoji: '🇪🇸', visited: true },
    { name: 'Germany', continent: 'Europe', emoji: '🇩🇪', visited: true },
    { name: 'Austria', continent: 'Europe', emoji: '🇦🇹', visited: true },
    { name: 'South Korea', continent: 'Asia', emoji: '🇰🇷', visited: true },
    { name: 'Thailand', continent: 'Asia', emoji: '🇹🇭', visited: true },
    { name: 'Cambodia', continent: 'Asia', emoji: '🇰🇭', visited: true },
  ];

  const continents = ['North America', 'South America', 'Europe', 'Asia'];
  const visitedCount = countries.filter(c => c.visited).length;

  return (
    <section id="travel" className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Follow my progress to see every country in the world.
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            <span className="font-semibold text-2xl">{visitedCount}</span> countries visited
          </p>
          <p className="text-gray-600">
            My goal is to visit every country on Earth. Here's my progress so far.
          </p>
        </div>

        <div className="space-y-12">
          {continents.map((continent) => {
            const continentCountries = countries.filter(c => c.continent === continent);
            const continentVisited = continentCountries.filter(c => c.visited).length;

            return (
              <div key={continent} className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">{continent}</h3>
                  <span className="text-sm text-gray-600">
                    {continentVisited} of {continentCountries.length} countries
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {continentCountries.map((country) => (
                    <div
                      key={country.name}
                      className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                        country.visited
                          ? 'border-emerald-300 bg-emerald-50 shadow-md'
                          : 'border-gray-200 bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2">{country.emoji}</div>
                        <p className="font-semibold text-gray-900 text-sm">{country.name}</p>
                        {country.visited && (
                          <div className="mt-2 flex items-center justify-center">
                            <span className="text-xs text-emerald-600 font-medium">✓ Visited</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <MapPin className="text-blue-600" size={24} />
            <h4 className="text-lg font-semibold text-gray-900">World Progress</h4>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(visitedCount / 195) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Visited {visitedCount} of 195 countries ({((visitedCount / 195) * 100).toFixed(1)}% complete)
          </p>
        </div>
      </div>
    </section>
  );
}
