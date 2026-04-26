import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import type { Service } from '../../../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={service.link}
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#00C896]/10 transition-all duration-500"
    >
      <div className="w-full h-52 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
            <i className={`${service.icon} text-xl text-[#00C896]`} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00C896] transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">{service.cardDescription}</p>
      </div>
    </Link>
  );
}

export default function Services() {
  const services = useAppSelector((s) => s.content.data?.services ?? []);

  return (
    <section id="services" className="w-full py-16 bg-gray-50">
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive your digital transformation journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </section>
  );
}
