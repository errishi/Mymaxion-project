/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler.js';

// routers
import productsRouter from './routes/products.js';
import servicesRouter from './routes/services.js';
import jobsRouter from './routes/jobs.js';
import testimonialsRouter from './routes/testimonials.js';
import enquiriesRouter from './routes/enquiries.js';
import authRouter from './routes/auth.js';
import sitemapRouter from './routes/sitemap.js';
import i18nRouter from './routes/i18n.js';
import analyticsRouter from './routes/analytics.js';
import filesRouter from './routes/files.js';

dotenv.config();

const app = express();

// middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));

// routes
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/enquiries', enquiriesRouter);
app.use('/api/auth', authRouter);
app.use('/api/sitemap', sitemapRouter);
app.use('/api/i18n', i18nRouter);
app.use('/api/pages', (await import('./routes/pages.js')).default);
app.use('/api/analytics', analyticsRouter);
app.use('/api/files', filesRouter);

app.get("/", (req,res) => {
  res.send("Welcome to mymaxion..");
});

// static assets
app.use('/assets', express.static('public'));

// serve html error pages
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

export default app;
