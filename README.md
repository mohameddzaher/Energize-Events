# Energize Events - Event Management Company Website

A modern, creative, and professional website for Energize Events Management Company built with **Next.js 16** and **Tailwind CSS**.

## 🚀 Features

- ⚡ **Next.js 16** - Latest Next.js with App Router for optimal performance
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- ✨ **Framer Motion** - Smooth animations and transitions
- 🎠 **Swiper** - Beautiful image sliders and carousels
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🖼️ **Optimized Images** - Next.js Image component for fast loading
- 🎯 **Performance Optimized** - Fast loading times and smooth interactions

## 📁 Project Structure

```
energize-events/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js App Router
│   │   └── components/  # React components
│   └── public/        # Static assets
└── backend/           # Backend folder (reserved for future use)
```

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS
- **Framer Motion** - Animation library
- **Swiper** - Touch slider library
- **React Icons** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 20.18.3 or higher
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

The optimized production build will be in the `.next` directory.

## 🎨 Customization

### Replacing Placeholder Images

All images are currently using placeholder URLs. Replace them with your actual images:

- **Logo**: Update in `Header.tsx` and `Footer.tsx`
- **Hero Images**: Update in `Hero.tsx`
- **Team Photos**: Update in `Team.tsx`
- **Project Images**: Update in `Projects.tsx`
- **Client Logos**: Update in `Clients.tsx`

### Colors

Main colors are defined in `globals.css`:
- Primary (Red): `#DC2626`
- Dark: `#0A0A0A`
- Light: `#F5F5F5`

## ⚡ Performance Optimizations

- ✅ Next.js Image optimization with automatic format conversion (WebP, AVIF)
- ✅ Code splitting and lazy loading
- ✅ Optimized package imports
- ✅ Compressed assets
- ✅ Font optimization with `next/font`
- ✅ Smooth scroll behavior

## 📝 Notes

- The backend folder is reserved for future backend implementation
- All content is in English
- Images are placeholders - replace with actual company images
- Client logos are placeholders - replace with actual client logos
- All components use TypeScript for type safety

## 📄 License

© 2024 Energize Events. All rights reserved.
