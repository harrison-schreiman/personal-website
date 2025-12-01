import { MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

interface TravelDestination {
  location: string;
  country: string;
  date: string;
  description: string;
  imageEmoji: string;
}

function TravelCard({ location, country, date, description, imageEmoji }: TravelDestination) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-64 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center text-8xl">
        {imageEmoji}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{location}</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={16} className="mr-1" />
              <span>{country}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Travel() {
  const [selectedFilter] = useState('all');

  const destinations: TravelDestination[] = [
    {
      location: 'Tokyo',
      country: 'Japan',
      date: 'Spring 2023',
      description: 'Explored the perfect blend of ancient tradition and cutting-edge technology. From serene temples to bustling streets of Shibuya.',
      imageEmoji: '🗼'
    },
    {
      location: 'Barcelona',
      country: 'Spain',
      date: 'Summer 2022',
      description: 'Immersed in Gaudí\'s architectural masterpieces and enjoyed the vibrant Mediterranean culture and cuisine.',
      imageEmoji: '🏛️'
    },
    {
      location: 'Reykjavik',
      country: 'Iceland',
      date: 'Winter 2022',
      description: 'Witnessed the Northern Lights and explored dramatic volcanic landscapes and geothermal wonders.',
      imageEmoji: '🌋'
    },
    {
      location: 'Marrakech',
      country: 'Morocco',
      date: 'Fall 2021',
      description: 'Lost in the maze of souks, captivated by the colors, scents, and rich history of this ancient city.',
      imageEmoji: '🕌'
    },
    {
      location: 'New Zealand',
      country: 'South Island',
      date: 'Spring 2021',
      description: 'Trekked through breathtaking mountains, pristine lakes, and untouched wilderness. A paradise for nature lovers.',
      imageEmoji: '🏔️'
    },
    {
      location: 'Santorini',
      country: 'Greece',
      date: 'Summer 2020',
      description: 'Mesmerized by iconic white buildings with blue domes, stunning sunsets, and crystal-clear Aegean waters.',
      imageEmoji: '🏖️'
    }
  ];

  return (
    <section id="travel" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Adventures</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the world, one destination at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <TravelCard key={index} {...destination} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">{destinations.length}</span> countries visited and counting...
          </p>
        </div>
      </div>
    </section>
  );
}
