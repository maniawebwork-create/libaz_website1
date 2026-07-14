'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './CheckoutPage.module.css';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className={styles.successScreen}>
        <div className={styles.successIcon}>✓</div>
        <h1>Order Confirmed!</h1>
        <p>Thank you for shopping with LIBAZ By MANN.</p>
        <p>Your order number is #LIB-{Math.floor(Math.random() * 90000) + 10000}</p>
        <Link href="/">
          <button className={styles.btn}>Return to Store</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.checkoutLayout}>
      
      {/* Left Column: Form */}
      <div className={styles.formSection}>
        <div className={styles.header}>
          <Link href="/"><h1 className={styles.logo}>LIBAZ By MANN</h1></Link>
          <div className={styles.breadcrumbs}>
            <span>Cart</span> &gt; <span className={styles.activeBreadcrumb}>Information</span> &gt; <span>Shipping</span> &gt; <span>Payment</span>
          </div>
        </div>

        <form onSubmit={handleCheckout} className={styles.form}>
          <section className={styles.fieldset}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <input type="email" placeholder="Email" className={styles.input} required />
          </section>

          <section className={styles.fieldset}>
            <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <div className={styles.row}>
              <input type="text" placeholder="First name" className={styles.input} required />
              <input type="text" placeholder="Last name" className={styles.input} required />
            </div>
            <input type="text" placeholder="Address" className={styles.input} required />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.input} />
            <div className={styles.row}>
              <input type="text" placeholder="City" className={styles.input} required />
              <select className={styles.input} required>
                <option value="">State / Province</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
              <input type="text" placeholder="PIN code" className={styles.input} required />
            </div>
            <input type="tel" placeholder="Phone" className={styles.input} required />
          </section>

          <section className={styles.fieldset}>
            <h2 className={styles.sectionTitle}>Payment</h2>
            <p className={styles.subtext}>All transactions are secure and encrypted.</p>
            
            <div className={styles.paymentMethods}>
              <label className={`${styles.radioLabel} ${paymentMethod === 'card' ? styles.activeRadio : ''}`}>
                <div className={styles.radioHeader}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card" 
                    checked={paymentMethod === 'card'} 
                    onChange={() => setPaymentMethod('card')}
                  />
                  <span>Credit card</span>
                  <div className={styles.cardIcons}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/MasterCard_Logo.svg" alt="MC" />
                  </div>
                </div>
                {paymentMethod === 'card' && (
                  <div className={styles.cardForm}>
                    <input type="text" placeholder="Card number" className={styles.input} />
                    <input type="text" placeholder="Name on card" className={styles.input} />
                    <div className={styles.row}>
                      <input type="text" placeholder="Expiration date (MM / YY)" className={styles.input} />
                      <input type="text" placeholder="Security code" className={styles.input} />
                    </div>
                  </div>
                )}
              </label>
              
              <label className={`${styles.radioLabel} ${paymentMethod === 'cod' ? styles.activeRadio : ''}`}>
                <div className={styles.radioHeader}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <span>Cash on Delivery (COD)</span>
                </div>
                {paymentMethod === 'cod' && (
                  <div className={styles.codMessage}>
                    Pay with cash upon delivery.
                  </div>
                )}
              </label>
            </div>
          </section>

          <div className={styles.actions}>
            <Link href="/product/dummy-lehenga" className={styles.returnLink}>
              &lt; Return to product
            </Link>
            <button type="submit" className={styles.btn}>Complete order</button>
          </div>
        </form>
        <div className={styles.footerLinks}>
          <a href="#">Refund policy</a>
          <a href="#">Shipping policy</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className={styles.summarySection}>
        <div className={styles.summarySticky}>
          
          <div className={styles.cartItem}>
            <div className={styles.itemImageWrapper}>
              <img src="/images/cat_lehengas.png" alt="Lehenga" />
              <span className={styles.itemQty}>1</span>
            </div>
            <div className={styles.itemDetails}>
              <p className={styles.itemName}>Royal Maroon Velvet Bridal Lehenga</p>
              <p className={styles.itemVariant}>Custom Stitching</p>
            </div>
            <p className={styles.itemPrice}>₹1,25,000</p>
          </div>

          <div className={styles.discountCode}>
            <input type="text" placeholder="Gift card or discount code" className={styles.input} />
            <button className={styles.applyBtn} disabled>Apply</button>
          </div>

          <div className={styles.totals}>
            <div className={styles.totalsRow}>
              <span>Subtotal</span>
              <span>₹1,25,000</span>
            </div>
            <div className={styles.totalsRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.totalsRow}>
              <span>Estimated taxes</span>
              <span>₹6,250</span>
            </div>
          </div>

          <div className={styles.finalTotal}>
            <span>Total</span>
            <span className={styles.totalPrice}>
              <span className={styles.currency}>INR</span> ₹1,31,250
            </span>
          </div>

        </div>
      </div>
      
    </div>
  );
}
