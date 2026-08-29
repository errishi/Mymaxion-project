import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const getServiceImage = (service) => {
  if (service?.image) return service.image;

  const slug = (service?.slug || '').toLowerCase();
  if (slug.includes('wastewater')) return '/wastewater.webp';
  if (slug.includes('mineral')) return '/mineralWater.webp';
  if (slug.includes('swimming')) return '/waterpool.webp';
  if (slug.includes('environmental')) return '/assessment.png';

  return '/wastewater.webp';
};

export function ProductCard({ product }) {
  return (
    <div className="glass-panel card-hover overflow-hidden animate-fadeIn">
      <div className="relative h-52 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">{product.category}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display bg-red-900text-xl font-extrabold text-slate-900 mb-3">{product.name}</h3>
        <p className="text-slate-600 text-sm leading-6 mb-5 line-clamp-2">{product.description}</p>

        {/* Link to detail page */}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center text-teal-700 font-bold text-sm hover:text-teal-900 group"
        >Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}

export function ServiceCard({ service }) {
  const imageSrc = getServiceImage(service);
  const subtitleMap = {
    'For Reuse': 'Water reuse systems for industrial and municipal applications.',
    'For Sludge Treatment': 'Efficient sludge treatment and dewatering for disposal or reuse.',
    'For Desalination': 'Advanced desalination for converting saline water into usable water.',
    'For Urban Wastewater Treatment': 'Municipal wastewater treatment for cleaner discharge and recovery.',
    'For Drinking Water': 'Safe, compliant water purification for drinking and process needs.',
  };

  const subtitle = subtitleMap[service?.name] || '';

  return (
    <div className="glass-panel card-hover overflow-hidden animate-fadeIn">
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={service.name || 'Service'}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/wastewater.webp';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 rounded-lg bg-slate-900/35 p-3 backdrop-blur-sm">
          <h3 className="font-display text-xl font-extrabold text-white leading-tight">{service.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-extrabold text-slate-900 mb-2">{service.name}</h3>
        {subtitle && <p className="text-sm text-slate-600 mb-3">{subtitle}</p>}
        <p className="text-slate-600 text-sm leading-6 mb-5 line-clamp-2">{service.description}</p>

        {/* Link to detail page */}
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-teal-700 font-bold text-sm hover:text-teal-900 group"
        >
          Explore
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}

