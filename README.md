# MaaCart 🛒

A simple React product listing app built with the [Fake Store API](https://fakestoreapi.com/).

## ☯️ Live Demo 
[Live Demo Here](https://durgaprasad4289.github.io/Fake-Ecommerce/)

---

## 📁 Project Structure

```
src/
├── App.jsx        # Main component — fetches and renders products
├── App.css        # Styles for layout, grid, and product cards
└── index.js       # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/maacart.git
cd maacart

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`.

---

## ⚙️ How It Works

1. On mount, `App.jsx` calls the Fake Store API endpoint:
   ```
   GET https://fakestoreapi.com/products
   ```
2. The response (an array of 20 products) is stored in React state via `useState`.
3. Products are rendered in a responsive CSS grid using the `.product-grid` class.
4. While data is loading, a "Loading products…" message is shown.

---

## 🧩 Component Overview

### `App.jsx`

| Element | Description |
|---|---|
| `useState(null)` | Holds the fetched products array |
| `useEffect` | Triggers the API fetch once on mount |
| `.product-grid` | Wrapper div that activates the CSS grid layout |
| `.product-card` | Individual card for each product |
| `.card-body` | Wraps title and description inside each card |

---

## 🎨 Styling (`App.css`)

| Class | Purpose |
|---|---|
| `.App` | Max-width container, centered on page |
| `.App h1` | Page heading |
| `.product-grid` | CSS grid — auto-fills columns (min 260px) |
| `.product-card` | White card with hover lift effect |
| `.product-card img` | Product image, fixed height, `object-fit: contain` |
| `.card-body` | Flex column for title + description |
| `.product-card h2` | 2-line clamped product title |
| `.product-card p` | 3-line clamped product description |
| `.loading` | Centered loading message |

Breakpoints:
- `≤ 768px` — smaller grid columns (min 160px), reduced image height and font sizes

---

## 🌐 API Reference

**Base URL:** `https://fakestoreapi.com`

| Endpoint | Method | Description |
|---|---|---|
| `/products` | GET | Returns all 20 products |
| `/products/:id` | GET | Returns a single product |
| `/products/categories` | GET | Returns all categories |
| `/products/category/:name` | GET | Returns products in a category |

**Sample product object:**
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fAn..."
}
```

---

## 🛠️ Possible Improvements

- [ ] Add product price display on each card
- [ ] Add category filter buttons
- [ ] Add a cart feature with `useContext` or `Redux`
- [ ] Add a product detail modal/page on card click
- [ ] Add search/filter by title
- [ ] Handle API error state with a user-friendly message
- [ ] Add skeleton loading cards instead of plain text

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.x | UI library |
| `react-dom` | ^18.x | DOM rendering |

No external UI libraries — pure React + CSS.

---

## 📄 License

MIT — free to use and modify.
