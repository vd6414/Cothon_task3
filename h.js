import React, { useState } from 'react';
import './History.css'; // Externalize styles or use inline styles as needed

const History = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const updateCartUI = () => {
    return {
      total: cart.reduce((sum, item) => sum + item.price, 0),
      itemCount: cart.length,
    };
  };

  const addToCart = (title, price) => {
    setCart([...cart, { title, price }]);
    if (!cartOpen) toggleCart();
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { total, itemCount } = updateCartUI();

  return (
    <div>
      <nav className="side-nav">
        {['📚', '🏠', '📑', '❤️'].map((icon, index) => (
          <div className="nav-icon" key={index}>{icon}</div>
        ))}
      </nav>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for books, authors, or genres..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="main-content">
        <div className="categories">
          {categories.map((category, index) => (
            <a key={index} href={category.link} className="category-tag">
              {category.name}
            </a>
          ))}
        </div>

        <div className="book-showcase">
          {filteredBooks.map((book, index) => (
            <div className="book-item" key={index}>
              <img src={book.image} alt="Book Cover" className="book-cover" />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="book-price">
                  <span>₹{book.price}</span>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(book.title, book.price)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <button className="cart-back" onClick={toggleCart}>←</button>
          <h2>Shopping Cart</h2>
        </div>
        <div>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">₹{item.price}</div>
              </div>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-total">Total: ₹{total}</div>
      </div>

      <div className="floating-cart" onClick={toggleCart}>
        🛒
        <div className="cart-counter">{itemCount}</div>
      </div>
    </div>
  );
};

const categories = [
  { name: 'All Books', link: 'main.html' },
  { name: 'Fiction', link: 'fiction.html' },
  { name: 'Non-Fiction', link: 'non-fiction.html' },
  { name: 'Fantasy', link: 'fantasy.html' },
  { name: 'Science', link: 'science.html' },
  { name: 'History', link: 'history.html' },
  { name: 'Biography', link: 'biography.html' },
];

const books = [
  {
    title: 'India: A History',
    author: 'John Keay',
    price: 650,
    image: 'h1.jpg',
  },
  {
    title: 'Our Moon Has Blood Clots: The Exodus of the Kashmiri Pandits',
    author: 'Rahul Pandita',
    price: 798,
    image: 'h2.jpg',
  },
  {
    title: 'India\'s Ancient Past',
    author: 'R.S. Sharma',
    price: 240,
    image: 'h4.jpg',
  },
  {
    title: 'City of Djinns: A Year in Delhi',
    author: 'William Dalrymple, Olivia Fraser',
    price: 529,
    image: 'h3.jpg',
  },
];

export default History;
