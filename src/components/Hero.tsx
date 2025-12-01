import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('professional');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-200 to-emerald-200 flex items-center justify-center text-6xl">
            ✈️
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Harrison Schreiman
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          International Business Student | Strategic Consultant | Global Explorer
        </p>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          I'm an Honors candidate at Northeastern University's D'Amore McKim School of Business, passionate about international business, strategic consulting, and exploring the world. I combine analytical thinking with hands-on experience to solve complex challenges and create meaningful impact.
        </p>

        <div className="flex justify-center gap-4 mb-12 text-sm text-gray-600">
          <span className="px-3 py-1 bg-white rounded-full">14 countries visited</span>
          <span className="px-3 py-1 bg-white rounded-full">Fluent in 3 languages</span>
          <span className="px-3 py-1 bg-white rounded-full">3.95 GPA</span>
        </div>

        <button
          onClick={scrollToNext}
          className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-all transform hover:translate-y-1"
        >
          <span>Explore</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
