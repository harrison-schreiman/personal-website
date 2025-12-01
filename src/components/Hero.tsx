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
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-200 to-stone-200 flex items-center justify-center text-6xl text-gray-700">
            👤
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm [Your Name]
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          [Your Professional Title]
        </p>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to my corner of the internet. I'm passionate about [your field/interests],
          exploring new places, and creating meaningful connections. Here you'll find my
          professional journey and personal adventures.
        </p>

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
