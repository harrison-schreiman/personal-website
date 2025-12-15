import { Briefcase, Award, GraduationCap, Code, Users } from 'lucide-react';

interface AccomplishmentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

function AccomplishmentCard({ icon, title, subtitle, description, date }: AccomplishmentCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-gray-700">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-gray-700 font-medium mb-2">{subtitle}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Professional() {
  const accomplishments = [
    {
      icon: <Briefcase size={24} />,
      title: 'Business Development Consultant',
      subtitle: 'Inversiones Torres | Global Brigades Panama',
      description: 'Collaborated with Venezuelan automotive restoration business in Panama on business formalization and growth strategy. Streamlined operations, guided registration, and developed marketing approaches for vehicle sales.',
      date: 'Sep 2025 - Present'
    },
    {
      icon: <Users size={24} />,
      title: 'Honors College Teaching and Programming Assistant',
      subtitle: 'John Martinson Honors College | Boston, MA',
      description: 'Supervise Honors Discovery Studio sessions by supporting dynamic class discussions and organizing community engagement events. Mentor 28 Internal Admit students on academic transition, leadership development, and provide bi-weekly check-ins to support their success.',
      date: 'Aug 2025 - Present'
    },
    {
      icon: <Award size={24} />,
      title: 'Go-to-Market Strategy Project Lead',
      subtitle: 'Mobilicom | TAMID at Northeastern',
      description: 'Delivered comprehensive go-to-market strategy for Mobilicom\'s 8" Ground Control Station. Conducted competitive brand analysis, evaluated digital footprint, and developed targeted marketing proposals for military and commercial verticals.',
      date: 'Jan 2025 - May 2025'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Founder & President',
      subtitle: 'Aspera Consulting',
      description: 'Founded a strategic consulting organization providing problem-solving solutions for nonprofits. Managing executive board of 4 departments and coordinating member expansion and development initiatives.',
      date: 'Oct 2024 - Present'
    },
    {
      icon: <Code size={24} />,
      title: 'Junior Consultant & Tech Consultant',
      subtitle: 'TAMID Group | Consulting',
      description: 'Supporting Mobilicom\'s U.S. expansion through go-to-market strategies focused on cybersecurity and drone sectors. Conduct market analysis and competitive positioning for international clients. Also serve on Recruitment and Education Committees.',
      date: 'Sep 2024 - Present'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Fitness Consultant',
      subtitle: 'Northeastern University | Boston, MA',
      description: 'Partner with university fitness and wellness teams to enhance member experience and promote health initiatives. Provide personalized guidance on fitness programs, wellness resources, and community engagement opportunities to support student and staff health goals.',
      date: 'Sep 2024 - Present'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Honors Candidate in International Business',
      subtitle: 'Northeastern University | D\'Amore McKim School of Business',
      description: 'Pursuing a Bachelor of Science with concentration in Management at Boston\'s premier business school. Dean\'s List honors with 3.76/4.00 GPA.',
      date: 'Aug 2024 - May 2027'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Analytics Intern',
      subtitle: 'Eagle Industrial Group',
      description: 'Created statistical analyses and data visualizations tracking shipping rates, profit margins, and product costs. Collaborated with influencers to expand SafeRack brand identity and researched competitors for product innovation.',
      date: 'Aug 2023 - Dec 2023'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Executive Assistant',
      subtitle: 'Family Property Management | Hacienda Heights, CA',
      description: 'Oversee portfolio of 6 properties worth $2.5 Million, ensuring profitability while managing risk and tenant relations. Delegate maintenance tasks with a team of 4 employees to upkeep properties at their highest value and market standards.',
      date: 'Mar 2023 - Present'
    }
  ];

  return (
    <section id="professional" className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A snapshot of my career milestones and achievements
          </p>
        </div>

        <div className="space-y-6">
          {accomplishments.map((item, index) => (
            <AccomplishmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
