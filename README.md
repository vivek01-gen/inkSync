<div align="center">

<img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Three.js-0.166-000000?style=for-the-badge&logo=three.js&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />

<br><br>

<div style="background: linear-gradient(135deg, #ffd700, #ffed4e); padding: 20px; border-radius: 16px; display: inline-block;">
  <h1 style="color: #0a0a0f; margin: 0; font-size: 48px; font-weight: 900;">inkSync</h1>
</div>

<h3 style="color: #ffd700; margin-top: 10px;">Where Stories Come to Life</h3>

<p style="color: #888; max-width: 600px; margin: 20px auto;">
  A premium 3D publishing platform for authors to publish books, novels, art, and illustrations. 
  Built with React Three.js, Node.js, and MongoDB.
</p>

<a href="https://inksync.netlify.app" target="_blank"><strong>Live Demo</strong></a> •
<a href="#features"><strong>Features</strong></a> •
<a href="#tech-stack"><strong>Tech Stack</strong></a> •
<a href="#deployment"><strong>Deploy</strong></a> •
<a href="#api"><strong>API</strong></a>

</div>

---

## Features

### Public Pages
- **3D Hero Section** - Interactive Three.js floating books with particle effects
- **Library** - Searchable, filterable book catalog with genre filters
- **Authors Directory** - Author profiles with follower counts and published works
- **Art Gallery** - Visual artwork showcase with category filtering
- **Book Details** - Full book page with chapters, reviews, and ratings
- **Author Profiles** - Detailed author pages with their complete portfolio

### Author Panel (Admin)
- **Dashboard** - Analytics overview with stats, activity feed, and book progress
- **My Books** - Manage all published works with edit/delete controls
- **Upload Work** - Drag-and-drop file upload for books and artworks
- **Artworks** - Gallery management with preview and delete
- **Analytics** - Monthly reads/revenue charts and top-performing books
- **Settings** - Profile editor with avatar, bio, and account management

### Authentication
- JWT-based secure authentication
- Role-based access control (Author / Reader / Admin)
- Persistent login with localStorage

---

## Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **Three.js + React Three Fiber** | 3D Book Models & Particle Effects |
| **Framer Motion** | Page Transitions & Animations |
| **Tailwind CSS** | Styling & Dark Theme |
| **Zustand** | State Management |
| **React Query** | Server State & Caching |
| **React Router** | Client-side Routing |
| **Lucide React** | Icons |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js + Express** | REST API Server |
| **MongoDB + Mongoose** | Database & ODM |
| **JWT** | Authentication |
| **bcryptjs** | Password Hashing |
| **Multer** | File Uploads |
| **Cloudinary** | Image Storage |
| **Helmet + Rate Limit** | Security |

---

## Project Structure

```
inkSync/
├── frontend/                    # React + Three.js Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── Book3D.tsx      # Three.js 3D Books Scene
│   │   │   ├── BookCard.tsx     # Book Display Card
│   │   │   ├── AuthorCard.tsx   # Author Profile Card
│   │   │   ├── ArtCard.tsx      # Artwork Gallery Card
│   │   │   ├── Navbar.tsx       # Navigation Bar
│   │   │   ├── Footer.tsx       # Site Footer
│   │   │   └── ProtectedRoute.tsx # Auth Guard
│   │   ├── pages/               # Page Components
│   │   │   ├── Home.tsx         # Landing Page with 3D
│   │   │   ├── Books.tsx        # Book Library
│   │   │   ├── Authors.tsx      # Authors Directory
│   │   │   ├── Art.tsx          # Art Gallery
│   │   │   ├── BookDetail.tsx   # Single Book Page
│   │   │   ├── AuthorDetail.tsx # Author Profile Page
│   │   │   ├── Login.tsx        # Sign In
│   │   │   ├── Register.tsx     # Sign Up
│   │   │   └── admin/           # Author Panel
│   │   │       ├── AdminLayout.tsx      # Sidebar Layout
│   │   │       ├── AdminDashboard.tsx   # Stats & Activity
│   │   │       ├── AdminBooks.tsx       # Book Management
│   │   │       ├── AdminUpload.tsx      # File Upload
│   │   │       ├── AdminArtworks.tsx    # Art Management
│   │   │       ├── AdminAnalytics.tsx   # Charts & Metrics
│   │   │       └── AdminSettings.tsx    # Profile Settings
│   │   ├── store.ts             # Zustand Auth Store
│   │   ├── api.ts               # Axios API Client
│   │   ├── App.tsx              # Router Configuration
│   │   ├── main.tsx             # App Entry Point
│   │   └── index.css            # Global Styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                     # Node.js + Express API
│   ├── models/                  # MongoDB Schemas
│   │   ├── User.js              # Author/User Model
│   │   ├── Book.js              # Book Model with Chapters
│   │   ├── Artwork.js           # Artwork Model
│   │   └── Analytics.js         # Analytics Tracking
│   ├── routes/                  # API Routes
│   │   ├── auth.js              # Authentication (Register/Login)
│   │   ├── books.js             # Books CRUD + Reviews
│   │   ├── authors.js           # Authors Directory
│   │   ├── artworks.js          # Artworks CRUD
│   │   ├── upload.js            # File Upload
│   │   └── analytics.js         # Analytics Dashboard
│   ├── middleware/              # Express Middleware
│   │   ├── auth.js              # JWT Protection
│   │   └── upload.js            # Multer Configuration
│   ├── uploads/                 # Local File Storage
│   ├── server.js                # Express Server Entry
│   ├── package.json
│   └── .env.example             # Environment Variables Template
│
└── README.md                    # This File
```

---

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/inksync.git
cd inksync
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

npm start
# Server runs on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env

npm run dev
# App runs on http://localhost:3000
```

---

## Deployment

### Frontend → Netlify
```bash
cd frontend
npm run build
# Upload dist/ folder to Netlify or connect GitHub repo
```

### Backend → Render
```bash
# Connect GitHub repo to Render
# Set environment variables in Render Dashboard
# Root Directory: backend
# Build Command: npm install
# Start Command: node server.js
```

### Database → MongoDB Atlas
1. Create free cluster at [mongodb.com](https://mongodb.com)
2. Create database user
3. Whitelist IP `0.0.0.0/0`
4. Copy connection string to `MONGODB_URI`

---

## Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/inksync
JWT_SECRET=your-super-secret-jwt-key-min-32-characters
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
FRONTEND_URL=https://your-netlify-url.netlify.app
PORT=5000
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-render-url.onrender.com/api
```

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/auth/profile` | Update profile |

### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books (public) |
| GET | `/api/books/:id` | Get single book |
| POST | `/api/books` | Create book (auth) |
| PUT | `/api/books/:id` | Update book (auth) |
| DELETE | `/api/books/:id` | Delete book (auth) |
| POST | `/api/books/:id/reviews` | Add review (auth) |

### Authors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/authors` | Get all authors |
| GET | `/api/authors/:id` | Get author with books |

### Artworks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/artworks` | Get all artworks |
| POST | `/api/artworks` | Create artwork (auth) |
| DELETE | `/api/artworks/:id` | Delete artwork (auth) |

### Upload
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload/image` | Upload image (auth) |
| POST | `/api/upload/document` | Upload document (auth) |

---

## Screenshots

| Home Page | Author Panel | Book Details |
|-----------|-------------|--------------|
| 3D floating books with particle effects | Dashboard with analytics charts | Full book with chapters & reviews |

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**Built with passion for storytellers everywhere**

[inkSync](https://inksync.netlify.app) • [Report Bug](https://github.com/YOUR_USERNAME/inksync/issues) • [Request Feature](https://github.com/YOUR_USERNAME/inksync/issues)

</div>
