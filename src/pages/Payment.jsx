import React, { useState } from 'react'
import PageHero from '../components/PageHero'

export default function Payment() {
  const [selectedAmount, setSelectedAmount] = useState('2500')
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('default-checked')

  const presetAmounts = ['2500', '1116', '5116']

  return (
    <div className="payment-page">
      <PageHero 
        title="Make a Donation"
      />

      <section className="container payment-main">
        <div className="payment-form-container">
          <div className="payment-tabs">
            <button className="payment-tab">Payment</button>
            {/* <button className="payment-tab active">Donation Detail</button> */}
          </div>

          <div className="payment-form-card">
            <div className="amount-section">
              <div className="amount-icon">₹</div>
              <div className="amount-selection">
                {presetAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                  >
                    ₹{amount}
                  </button>
                ))}
                <input
                  type="number"
                  className={`amount-input ${selectedAmount === 'custom' ? 'active' : ''}`}
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount('custom')
                  }}
                  onFocus={() => setSelectedAmount('custom')}
                />
              </div>
            </div>

            <div className="payment-method-section">
              <h3>Select Payment Method</h3>
              <div className="payment-methods">
                <label className="payment-method-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="default-checked"
                    checked={paymentMethod === 'default-checked'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>UPI</span>
                </label>
                <label className="payment-method-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="default"
                    checked={paymentMethod === 'default'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Cards</span>
                </label>
              </div>
            </div>

            <div className="personal-info-section">
              <h3>Personal Info</h3>
              <form className="payment-form" onSubmit={(ev) => ev.preventDefault()}>
                <div className="payment-grid">
                  <label className="field">
                    <input placeholder="First Name" />
                  </label>
                  <label className="field">
                    <input placeholder="Last/Second Name" />
                  </label>
                  <label className="field">
                    <input placeholder="Email Address" type="email" />
                  </label>
                  <label className="field">
                    <input placeholder="Phone" type="tel" />
                  </label>
                   <label className="field">
                    <input placeholder="Gotram" type="text" />
                  </label>
                  <label className="field">
                    <input placeholder="Pooja Name" />
                  </label>
                </div>
                {/* <label className="field full">
                  <textarea rows="6" placeholder="Write a Messsage" />
                </label> */}
                <button className="btn primary submit-btn" type="submit">
                  <span>Submit</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <aside className="payment-sidebar">
          <div className="donation-example-card">
            <div className="donation-example-image qr-code">
              <img src="/assets/QR.jpeg" alt="Payment QR Code" />
            </div>
            <div className="donation-example-content">
              <div className="organizer-section">
                <h5>Organizer</h5>
                <div className="organizer-info">
                  <div className="organizer-avatar">
                    <img src="/assets/pandits/pandit_shekar.jpeg" alt="Chandra Shekar Joshe" />
                  </div>
                  <div className="organizer-details">
                    <span className="organizer-name">Chandra Shekar Joshe</span>
                    <span className="organizer-meta">📞 +91 9849918520</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
