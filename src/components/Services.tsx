import React from 'react';
import { Cog as Cow, Users as Horse, Wheat, PlaneTakeoff, Bird as Birds, BookOpen } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageSrc }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div
        className="aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-green-100 text-green-700 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-green-800">{title}</h3>
        </div>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Chicken Farming",
      description: "High-quality poultry raised in a clean and healthy environment.",

      icon: <Birds className="h-5 w-5" />,
      imageSrc: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Strong Horses",
      description: "Majestic horses bred for strength and endurance, perfect for various purposes.",
      icon: <Horse className="h-5 w-5" />,
      imageSrc: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Premium Cows",
      description: "High-quality cattle raised using modern farming practices and ethical standards.",
      icon: <Cow className="h-5 w-5" />,
      imageSrc: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Wheat Farming",
      description: "Successfully harvested wheat crops using sustainable farming methods.",
      icon: <Wheat className="h-5 w-5" />,
      imageSrc: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Cotton Seeding",
      description: "Expert cotton cultivation with modern tools and traditional knowledge.",
      icon: <PlaneTakeoff className="h-5 w-5" />,
      imageSrc: "/images/cotton.jpg"
    },
    {
      title: "Agricultural Consultation",
      description: "Professional guidance on farming practices, livestock management, and crop selection.",
      icon: <BookOpen className="h-5 w-5" />,
      imageSrc: "/images/consulatation.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-serif mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-700">
            Combining modern tools with traditional values to deliver excellence in agriculture and livestock.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};