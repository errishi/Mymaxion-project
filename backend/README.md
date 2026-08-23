# MyMaxion Backend

This Express.js backend serves as the content engine for the MyMaxion corporate website. It transforms static HTML assets into structured JSON and provides RESTful APIs for products, services, jobs, testimonials, enquiries, and more.

## Features

- MongoDB via Mongoose (adjustable to PostgreSQL with Sequelize)
- JWT authentication & role-based access (admin/staff)
- Caching using `node-cache`
- Security via Helmet and CORS
- Dynamic HTML-to-JSON parsing using Cheerio
- RSS feed generation for products
- Asset serving and download endpoints
- Internationalization file listing
- Hit counter & analytics stub
- Dockerfile & docker-compose
- ESLint & Prettier configuration

## Quick Start

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   API available at `http://localhost:4000`.

4. Build for production or use Docker:
   ```bash
   npm run docker:build
   ```

## API Endpoints

- `GET /api/products`
- `GET /api/products/rss`
- `GET /api/products/:slug`
- `POST /api/products` (admin)
- `GET /api/services` etc.
- `POST /api/enquiries` to submit forms
- `POST /api/auth/login` and `/register`
- `GET /api/pages/:slug?` map to `.htm`
- and many more (see routes folder).

## Notes

- Place static HTML files under `backend/public` or respective subfolders.
- Ensure frontend CORS origin is set in `.env`.

This backend is designed to be modular and easily extensible as MyMaxion grows.