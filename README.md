# Aurora Cart

Modern, responsive shopping cart built with React and Redux Toolkit, redesigned and authored by **Alvin Sony**.

## ✨ Features

### Core Shopping Features

- ✅ Add products to cart with visual feedback
- ✅ Remove items from cart
- ✅ Increment/Decrement quantity with +/- buttons
- ✅ Live cart total and item count
- ✅ Functional checkout with order summary

### Enhanced UX Features

- 🔍 **Product Search** - Real-time filtering by product name
- 📊 **Smart Sorting** - Sort by price (low-high, high-low) or name (A-Z)
- 🌙 **Dark/Light Theme** - Toggle with persistent preference (localStorage)
- 💾 **Cart Persistence** - Cart items saved and restored automatically
- ⌨️ **Keyboard Navigation** - ESC key to close cart, full accessibility
- 🎯 **Click Outside to Close** - Intuitive cart dismissal
- ⬆️ **Scroll to Top** - Smooth scroll button for better navigation
- ✨ **Micro-animations** - Badge bump, card hover, smooth transitions
- 📱 **Fully Responsive** - Mobile-first design

### Visual Design

- 🎨 Modern glassmorphism with backdrop blur
- 🌈 Vibrant gradient color scheme (Violet/Cyan)
- 💫 Smooth animations and hover effects
- 🎯 Clean, minimalist UI with professional spacing
- 🔤 Poppins font family for modern typography

## 🛠️ Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **SASS (SCSS)** - Advanced styling with variables
- **CSS Variables** - Theme switching support
- **LocalStorage API** - Data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with theme toggle
│   ├── Footer.js          # Footer with author credit
│   ├── Cart.js            # Slide-in shopping cart
│   ├── ProductsCard.js    # Individual product card
│   └── ScrollToTop.js     # Scroll to top button
├── pages/
│   └── Home.js            # Main products page with filters
├── store/
│   ├── store.js           # Redux store with persistence
│   └── slices/
│       └── cartSlice.js   # Cart state management
├── data/
│   └── productsData.js    # Product catalog
├── App.js                 # Root component
├── index.js               # Entry point
└── index.scss             # Global styles with themes
```

## 🎨 Design Features

### Theme System

- CSS variables for dynamic theming
- Persistent theme preference
- Smooth theme transitions
- Dark and light mode support

### Animations

- Badge bump on cart update
- Cart slide-in/out animation
- Product card hover lift
- Button press feedback
- Smooth scroll behavior
- Fade-in effects

### Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader friendly

## 🧪 Testing

Tests are included for core functionality:

- ✅ Brand rendering
- ✅ Cart badge display
- ✅ Component integration

Run tests with: `npm test`

## 📦 Features Breakdown

| Feature          | Status | Description                           |
| ---------------- | ------ | ------------------------------------- |
| Add to Cart      | ✅     | Add products with quantity management |
| Remove Items     | ✅     | Delete individual items from cart     |
| Quantity Control | ✅     | Increment/decrement with validation   |
| Cart Total       | ✅     | Real-time price calculation           |
| Search           | ✅     | Filter products by name               |
| Sort             | ✅     | Multiple sorting options              |
| Theme Toggle     | ✅     | Dark/light mode with persistence      |
| Cart Persistence | ✅     | LocalStorage integration              |
| Checkout         | ✅     | Order summary and cart clear          |
| Responsive       | ✅     | Mobile, tablet, desktop support       |
| Animations       | ✅     | Smooth transitions throughout         |
| Accessibility    | ✅     | Keyboard nav and ARIA support         |

## 👤 Author

**Built by | Alvin Sony**

This project is a complete redesign and enhancement of a basic Redux shopping cart, featuring:

- Fresh modern visual design
- Enhanced user experience
- Production-ready features
- Clean, maintainable code
- Full accessibility support

## 📝 License

This project is available for portfolio and educational purposes.

---

**Aurora Cart** - A showcase of modern React + Redux development practices with attention to design, UX, and code quality.
