import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div className="glass-panel card-hover overflow-hidden animate-fadeIn">
      <div className="relative h-52 overflow-hidden">
        <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-extrabold text-white">{service.name}</h3>
      </div>

      {/* Content */}
      <div className="p-6">
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

