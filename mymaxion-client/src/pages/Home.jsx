import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  Factory,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import { ProductCard, ServiceCard } from '../Components/Cards';
import { products, services } from '../data';

const principles = [
  {
    icon: Droplets,
    title: 'Water, made better',
    text: 'Treatment systems engineered around performance, purity, and responsible resource use.',
  },
  {
    icon: Factory,
    title: 'Built for industry',
    text: 'Practical equipment and packaging lines that keep operations moving with confidence.',
  },
  {
    icon: Leaf,
    title: 'Progress with purpose',
    text: 'Environmental expertise that helps ambitious teams meet standards and plan ahead.',
  },
  {
    icon: ShieldCheck,
    title: 'A partner for the long run',
    text: 'Thoughtful commissioning, responsive support, and solutions that last.',
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      {/* Hero Section */}
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="animate-slideInDown">
            <div className="section-kicker mb-5">
              Engineering that moves the world forward
            </div>

            <h1 className="font-display max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.055em] text-slate-900 sm:text-6xl lg:text-7xl">
              Clearer water.
              <br />
              <span className="text-teal-700">Smarter industry.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              MyMaxion brings water treatment, environmental intelligence, and
              packaging technology together for businesses ready to operate with
              more clarity.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Talk to our team <ArrowUpRight size={17} />
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore capabilities <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" />
                25+ years of expertise
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" />
                500+ projects delivered
              </span>
            </div>
          </div>

          <div className="relative animate-slideUp">
            <div className="absolute -inset-5 rounded-[2rem] bg-teal-200/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/45 p-3 shadow-2xl shadow-teal-900/10 backdrop-blur-xl">
              <img
                src="/homeimage.jpeg"
                alt="MyMaxion water treatment infrastructure"
                className="h-[420px] w-full rounded-[1.15rem] object-cover sm:h-[510px]"
              />
              <div className="glass absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-xl px-5 py-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-700">
                    The MyMaxion standard
                  </p>
                  <p className="font-display mt-1 font-bold text-slate-800">
                    Designed for real-world impact
                  </p>
                </div>
                <ArrowUpRight className="text-teal-700" size={21} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-wrap pt-10">
        <div className="mb-10 max-w-2xl">
          <div className="section-kicker mb-4">What we bring</div>
          <h2 className="section-title">
            Technical depth, made easy to work with.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const PrincipleIcon = principle.icon;
            return (
              <div
                key={principle.title}
                className="glass-panel card-hover p-6"
              >
                <PrincipleIcon size={25} className="mb-8 text-teal-700" />
                <h3 className="font-display text-lg font-extrabold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {principle.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-wrap">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <div className="section-kicker mb-4">Featured solutions</div>
            <h2 className="section-title">Built around your next milestone.</h2>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-2 text-sm font-bold text-teal-700 sm:flex"
          >
            View all products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-wrap pt-0">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <div className="section-kicker mb-4">Our expertise</div>
            <h2 className="section-title">One partner. The full picture.</h2>
          </div>
          <Link
            to="/services"
            className="hidden items-center gap-2 text-sm font-bold text-teal-700 sm:flex"
          >
            View all services <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-4 mb-16 overflow-hidden rounded-[1.5rem] bg-slate-900 px-6 py-14 text-white sm:mx-6 lg:mx-auto lg:max-w-6xl lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-teal-300">
              Let&apos;s build what&apos;s next
            </div>
            <h2 className="font-display max-w-2xl text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">
              Have a complex requirement? Start with a conversation.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Tell us where you are today. We&apos;ll help you find the clearest
              path forward.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
          >
            Contact MyMaxion <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}