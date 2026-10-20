import { useState } from 'react'
import ProductCard from './components/ProductCard.tsx'
import headphones from './assets/headphones.jpg'
import smartwatch from './assets/smartwatch.jpg'
import sneakers from './assets/sneakers.jpg'
import backpack from './assets/backpack.jpg'
import './App.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 350000, image: headphones },
  { id: 2, name: 'Smart Watch', price: 550000, image: smartwatch },
  { id: 3, name: 'Sneakers', price: 450000, image: sneakers },
  { id: 4, name: 'Backpack', price: 250000, image: backpack },
]

function App() {
  // Menyimpan id produk yang ada di keranjang
  const [cart, setCart] = useState<number[]>([])

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const clearCart = () => setCart([])

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="title">Product List</h1>
          <p className="subtitle">Find your favorite products.</p>
        </div>

        <div className="cart-area">
          <div className="cart-badge">
            Cart: {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </div>
          <button type="button" className="btn-clear" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </header>

      <main className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            isAdded={cart.includes(product.id)}
            onToggle={() => toggleCart(product.id)}
          />
        ))}
      </main>
    </div>
  )
}

export default App
