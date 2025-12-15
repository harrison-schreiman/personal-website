import { Heart, Users, Package } from 'lucide-react';

interface VolunteeringCardProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  description: string;
  date: string;
  highlights: string[];
  image?: string;
}

function VolunteeringCard({ icon, title, organization, description, date, highlights, image }: VolunteeringCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-700 font-medium">{organization}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{date}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <span key={index} className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Volunteering() {
  const volunteeringExperiences = [
    {
      icon: <Heart size={24} />,
      title: 'Habitat for Humanity Spring Break Service',
      organization: 'Northeastern University Alternate Spring Break',
      description: 'Organized, managed, and optimized Habitat for Humanity\'s warehouse operations for 6 hours daily across 5 days. Assisted with supply chain optimization at the Toronto site and learned about historical land acknowledgments of indigenous peoples.',
      date: 'Mar 2025',
      highlights: ['Operations Management', 'Supply Chain', 'Leadership', 'Community Impact'],
      image: '/Screenshot%202025-12-02%20at%201.01.45%20PM.png'
    },
    {
      icon: <Package size={24} />,
      title: 'Partners for World Health Weekend Service',
      organization: 'Northeastern Civic Engagement',
      description: 'Contributed to a weekend-long service trip to Portland, Maine with other Northeastern students. Organized and shipped thousands of medical supplies in one weekend to countries in dire need. Educated on health care concepts in rural areas.',
      date: 'Nov 2024',
      highlights: ['Global Health', 'Supply Chain', 'Logistics', 'International Impact'],
      image: '/Screenshot%202025-12-02%20at%201.02.07%20PM.png'
    },
    {
      icon: <Users size={24} />,
      title: 'Educational Tutor',
      organization: 'Northeastern University Alliance of Civically Engaged Students',
      description: 'Volunteer tutor assisting elementary, middle, and high school students with educational and professional needs. Created interactive activities and educational clubs to provide lifelong learning opportunities.',
      date: 'Aug 2024 - Present',
      highlights: ['Education', 'Mentorship', 'Community Service', 'Youth Development']
    },
    {
      icon: <Heart size={24} />,
      title: 'Adult Committee Member & Former Youth Secretary',
      organization: 'MV Activities Committee',
      description: 'Plan and design volunteering events, facilitating scheduling and participation for a group of over 200 volunteers. Work with elders to implement electronic-based strategies for brand image and outreach. Track trends through data analysis to improve attendance and volunteer rates.',
      date: 'Oct 2022 - Present',
      highlights: ['Event Planning', 'Community Engagement', 'Leadership', 'Data Analysis']
    }
  ];

  return (
    <section id="volunteering" className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteering & Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating meaningful change through service and community engagement
          </p>
        </div>

        <div className="space-y-6">
          {volunteeringExperiences.map((experience, index) => (
            <VolunteeringCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
