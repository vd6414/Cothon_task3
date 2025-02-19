import React, { useState } from 'react';
import './ProductPage.css'; // Externalize the styles for maintainability

const ProductPage = () => {
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [formInputs, setFormInputs] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const toggleWishlist = () => {
    setWishlistAdded(!wishlistAdded);
  };

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleInputChange = (field, value) => {
    setFormInputs({ ...formInputs, [field]: value });
  };

  const validateInputs = () => {
    if (selectedPaymentMethod === 'card') {
      const { cardNumber, expiry, cvv, cardName } = formInputs;
      return (
        cardNumber?.replace(/\s/g, '').length === 16 &&
        /^\d{2}\/\d{2}$/.test(expiry) &&
        cvv?.length === 3 &&
        cardName?.trim().length > 0
      );
    } else if (selectedPaymentMethod === 'upi') {
      return /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(formInputs.upiId || '');
    } else if (selectedPaymentMethod === 'bank') {
      return formInputs.bank !== undefined;
    } else if (selectedPaymentMethod === 'wallet') {
      return formInputs.wallet !== undefined;
    }
    return false;
  };

  const handlePayment = () => {
    if (!validateInputs()) return;

    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setSelectedPaymentMethod(null);
      setFormInputs({});
    }, 2000);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">SACK.</a>
          <button className="menu-toggle">
            <i className="fas fa-bars"></i>
          </button>
          <div className="menu">
            <a href="#">Bags</a>
            <a href="#">Collections</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      <main className="product-container">
        <div className="product-details">
          <h1 className="product-title">African Art Structured Shoulder Bag</h1>
          <div className="price-tag">₹1,399.00</div>
          <div className="stock-status">In Stock</div>

          <div className="buttons">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary" onClick={toggleWishlist}>
              <i className={wishlistAdded ? "fas fa-heart" : "far fa-heart"}></i>
              {wishlistAdded ? " Added to Wishlist" : " Add to Wishlist"}
            </button>
          </div>

          <div className="section">
            <h3 className="section-title">Payment Methods</h3>
            <div className="payment-methods">
              {['card', 'upi', 'bank', 'wallet'].map((method) => (
                <div
                  key={method}
                  className={`payment-method ${selectedPaymentMethod === method ? 'selected' : ''}`}
                  onClick={() => handlePaymentMethodSelection(method)}
                >
                  <i
                    className={
                      method === 'card'
                        ? 'fas fa-credit-card'
                        : method === 'upi'
                        ? 'fas fa-mobile-alt'
                        : method === 'bank'
                        ? 'fas fa-university'
                        : 'fas fa-wallet'
                    }
                  ></i>
                  <span>
                    {method === 'card'
                      ? 'Credit/Debit Card'
                      : method === 'upi'
                      ? 'UPI'
                      : method === 'bank'
                      ? 'Bank Transfer'
                      : 'Wallet'}
                  </span>
                </div>
              ))}
            </div>

            {selectedPaymentMethod === 'card' && (
              <div className="payment-form">
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="19"
                  value={formInputs.cardNumber || ''}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                  value={formInputs.expiry || ''}
                  onChange={(e) => handleInputChange('expiry', e.target.value)}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  value={formInputs.cvv || ''}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={formInputs.cardName || ''}
                  onChange={(e) => handleInputChange('cardName', e.target.value)}
                />
                <button className="btn btn-primary pay-button" onClick={handlePayment}>
                  Pay ₹1,399.00
                </button>
              </div>
            )}

            {selectedPaymentMethod === 'upi' && (
              <div className="payment-form">
                <input
                  type="text"
                  placeholder="Enter UPI ID (example@upi)"
                  value={formInputs.upiId || ''}
                  onChange={(e) => handleInputChange('upiId', e.target.value)}
                />
                <button className="btn btn-primary pay-button" onClick={handlePayment}>
                  Pay ₹1,399.00
                </button>
              </div>
            )}

            {selectedPaymentMethod === 'bank' && (
              <div className="payment-form">
                <select
                  value={formInputs.bank || ''}
                  onChange={(e) => handleInputChange('bank', e.target.value)}
                >
                  <option value="">Select Your Bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
                <button className="btn btn-primary pay-button" onClick={handlePayment}>
                  Continue to Net Banking
                </button>
              </div>
            )}

            {selectedPaymentMethod === 'wallet' && (
              <div className="payment-form">
                <select
                  value={formInputs.wallet || ''}
                  onChange={(e) => handleInputChange('wallet', e.target.value)}
                >
                  <option value="">Select Wallet</option>
                  <option value="paytm">Paytm</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="gpay">Google Pay</option>
                  <option value="amazonpay">Amazon Pay</option>
                </select>
                <button className="btn btn-primary pay-button" onClick={handlePayment}>
                  Pay ₹1,399.00
                </button>
              </div>
            )}

            {paymentSuccess && <div className="success-message">Payment successful! Thank you for your purchase.</div>}
          </div>
        </div>

        <div className="product-image">
          <img src="b.jpg" alt="African Art Structured Shoulder Bag" />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
