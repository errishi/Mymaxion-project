// Products data
export const products = [
  {
    id: 'labelling-machine',
    name: 'Labelling Machine',
    description: 'Automatic labelling machine for precise product labeling',
    image: '/labelling.png',
    slug: 'labelling-machine',
  },
  {
    id: 'stretch-wrapping-machine',
    name: 'Stretch Wrapping Machine',
    description: 'Efficient stretch wrapping for secure product packaging',
    image: '/wrapping.png',
    slug: 'stretch-wrapping-machine',
  },
  {
    id: 'water-bottle-packaging-machine',
    name: 'Water Bottle Packaging Machine',
    description: 'Specialized machinery for bottled water packaging',
    image: '/packingmachine.png',
    slug: 'water-bottle-packaging-machine',
  },
  {
    id: 'linear-rotary-filling-machine',
    name: 'Linear Rotary Filling Machine',
    description: 'High-precision filling machine for various liquid products',
    image: '/OIP.webp',
    slug: 'linear-rotary-filling-machine',
  },
  {
    id: 'mild-steel-vessel',
    name: 'Mild Steel Vessel',
    description: 'Durable vessels for liquid storage and treatment',
    image: '/midlevel.webp',
    slug: 'mild-steel-vessel',
  },
  {
    id: 'online-blowing-machine',
    name: 'Online Blowing Machine',
    description: 'Automated bottle blowing and production equipment',
    image: '/boiling.jpg',
    slug: 'online-blowing-machine',
  },
];

// Services data
export const services = [
  {
    id: 'environmental-impact-assessment',
    name: 'Environmental Impact Assessment Services',
    description: 'Comprehensive EIA services for project development',
    image: '/assessment.png',
    slug: 'environmental-impact-assessment-services',
  },
  {
    id: 'environmental-clearance',
    name: 'Environmental Clearance Services',
    description: 'Expert assistance in obtaining environmental clearances',
    image: '/cleanlinees.webp',
    slug: 'environmental-clearance-services',
  },
  {
    id: 'wastewater-treatment',
    name: 'Wastewater Treatment Plants',
    description: 'Complete wastewater treatment solutions',
    image: '/wastewater.webp',
    slug: 'wastewater-treatment',
  },
  {
    id: 'mineral-water-treatment',
    name: 'Mineral Water Treatment Plants',
    description: 'Industrial-grade mineral water treatment systems',
    image: '/mineralWater.webp',
    slug: 'mineral-water-treatment',
  },
  {
    id: 'swimming-pool-construction',
    name: 'Swimming Pool Construction',
    description: 'Professional indoor and outdoor pool construction',
    image: '/waterpool.webp',
    slug: 'swimming-pool-construction',
  },
];

// Wastewater treatment variants
export const wastewaterPlants = [
  {
    name: 'For Urban Wastewater Treatment',
    slug: 'wastewater-treatment-plant-for-urban-wastewater-treatment',
  },
  {
    name: 'For Drinking Water',
    slug: 'wastewater-treatment-plant-for-drinking-water',
  },
  {
    name: 'For Reuse',
    slug: 'wastewater-treatment-plant-for-reuse',
  },
  {
    name: 'For Desalination',
    slug: 'wastewater-treatment-plant-for-desalination',
  },
  {
    name: 'For Sludge Treatment',
    slug: 'wastewater-treatment-plant-for-sludge-treatment',
  },
];

// Mineral water treatment by industry
export const mineralWaterPlants = [
  {
    industry: 'Food & Beverage',
    slug: 'mineral-water-treatment-plant-for-food-beverage-industry',
  },
  {
    industry: 'Pharmaceutical',
    slug: 'mineral-water-treatment-plant-for-pharmaceutical-industry',
  },
  {
    industry: 'Chemical',
    slug: 'mineral-water-treatment-plant-for-chemical-industry',
  },
  {
    industry: 'Energy',
    slug: 'mineral-water-treatment-plant-for-energy-industry',
  },
  {
    industry: 'Healthcare',
    slug: 'mineral-water-treatment-plant-for-healthcare-industry',
  },
  {
    industry: 'Metal Mining',
    slug: 'mineral-water-treatment-plant-for-metal-mining-industry',
  },
  {
    industry: 'Microelectronic',
    slug: 'mineral-water-treatment-plant-for-microelectronic-industry',
  },
  {
    industry: 'Pulp & Paper',
    slug: 'mineral-water-treatment-plant-for-pulp-paper-industry',
  },
  {
    industry: 'Refining & Petrochemical',
    slug: 'mineral-water-treatment-plant-for-refining-petrochemical-industry',
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'Pure Water Solutions',
    content: 'MyMaxion provided exceptional water treatment solutions. Their team was professional and delivered on time.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Operations Manager',
    company: 'Green Industries Ltd',
    content: 'Outstanding service and quality. The environmental impact assessment was thorough and comprehensive.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Project Lead',
    company: 'Beverage Manufacturing Co',
    content: 'Their packaging machinery is top-notch. We increased our production efficiency by 40%.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Plant Manager',
    company: 'Mineral Water Corp',
    content: 'Excellent technical support and after-sales service. Highly recommended!',
    rating: 5,
  },
];

// Navigation items
export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Sitemap', path: '/sitemap' },
];

// Company info
export const companyInfo = {
  name: 'MyMaxion',
  tagline: 'Engineering Excellence in Water Treatment & Packaging Solutions',
  description: 'Leading provider of innovative water treatment plants, packaging machinery, and environmental services.',
  email: 'info@mymaxion.in',
  phone: '+91-9810310547',
  address: 'Surya Vihar najafgarh, 110047, Delhi, India',
  website: 'www.mymaxion.in',
};

// Footer links
export const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Careers', path: '/jobs' },
  ],
  services: [
    { label: 'Water Treatment', path: '/services' },
    { label: 'Environmental Services', path: '/services' },
    { label: 'Packaging Solutions', path: '/products' },
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Sitemap', path: '/sitemap' },
  ],
};
