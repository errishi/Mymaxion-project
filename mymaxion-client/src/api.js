const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const apiBaseURL = baseURL.replace(/\/$/, '');

const normalizeProduct = (product) => ({ ...product, id: product._id || product.id });
const normalizeService = (service) => ({ ...service, id: service._id || service.id, name: service.name || service.title });
const normalizeJob = (job) => ({ ...job, id: job._id || job.id });
const normalizeTestimonial = (testimonial) => ({ ...testimonial, id: testimonial._id || testimonial.id });

const request = async (path, options = {}) => {
  const token = localStorage.getItem('mymaxion_token');
  const url = path.startsWith('http') ? path : `${apiBaseURL}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error(data.error || data.message || 'Request failed.'), { response: { data } });
  return data;
};

export const getProducts = () => request('/api/products').then((items) => items.map(normalizeProduct));
export const getProduct = (slug) => request(`/api/products/${slug}`).then(normalizeProduct);
export const getServices = () => request('/api/services').then((items) => items.map(normalizeService));
export const getService = (slug) => request(`/api/services/${slug}`).then(normalizeService);
export const getJobs = () => request('/api/jobs').then((items) => items.map(normalizeJob));
export const getTestimonials = () => request('/api/testimonials').then((items) => items.map(normalizeTestimonial));
export const submitEnquiry = (enquiry) => request('/api/enquiries', { method: 'POST', body: JSON.stringify(enquiry) });
export const getSitemap = () => request('/api/sitemap');
export const recordPageHit = () => request('/api/analytics/hit', { method: 'POST' });

