import { navItems } from '../data/navItems.js';

export const getSitemap = (req, res) => {
  // simple static list
  res.json({ nav: navItems });
};
