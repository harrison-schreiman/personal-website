import { Briefcase, Award, GraduationCap, Code } from 'lucide-react';

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
      title: 'Senior Software Engineer',
      subtitle: 'Tech Company Inc.',
      description: 'Led development of scalable applications serving millions of users. Mentored junior developers and drove technical excellence across teams.',
      date: '2020 - Present'
    },
    {
      icon: <Award size={24} />,
      title: 'Industry Recognition Award',
      subtitle: 'Professional Association',
      description: 'Recognized for outstanding contributions to the field and innovative solutions to complex problems.',
      date: '2022'
    },
    {
      icon: <Code size={24} />,
      title: 'Open Source Contributor',
      subtitle: 'Various Projects',
      description: 'Active contributor to major open source projects with over 1000 commits and multiple published packages.',
      date: '2018 - Present'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Master of Computer Science',
      subtitle: 'University Name',
      description: 'Specialized in distributed systems and artificial intelligence. Graduated with honors.',
      date: '2018'
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
