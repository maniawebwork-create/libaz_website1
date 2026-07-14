import Link from 'next/link';
import styles from './ProductPage.module.css';

// Dummy Product Data
const product = {
  id: 'dummy-lehenga',
  title: 'Royal Maroon Velvet Bridal Lehenga',
  price: '₹1,25,000',
  description: 'Experience regal elegance with our handcrafted maroon velvet lehenga. Intricately embroidered with dabka, zardosi, and sequins by master karigars over 400 hours. This luxurious masterpiece features a heavy flared skirt, a sweetheart neck blouse, and a matching net dupatta with scalloped borders.',
  reviews: 124,
  rating: 4.9,
  images: [
    '/images/cat_lehengas.png',
    '/images/product_gown.png',
    '/images/cat_sarees.png'
  ],
  details: [
    'Fabric: Premium Pure Velvet',
    'Work: Handcrafted Zardosi, Dabka, and Sequins',
    'Care: Dry Clean Only',
    'Delivery: Custom made to order (3-4 weeks)'
  ]
};

export default function ProductPage({ params }) {
  // In a real app, you would fetch product based on params.id
  
  return (
    <main className={styles.main}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; <Link href="#">Women</Link> &gt; <span>{product.title}</span>
      </div>

      <section className={styles.productContainer}>
        
        {/* Left: Image Gallery */}
        <div className={styles.imageGallery}>
          <div className={styles.mainImageContainer}>
            <img src={product.images[0]} alt={product.title} className={styles.mainImage} />
          </div>
          <div className={styles.thumbnailContainer}>
            {product.images.map((img, idx) => (
              <div key={idx} className={styles.thumbnail}>
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.title}</h1>
          
          <div className={styles.ratingBox}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>({product.reviews} reviews)</span>
          </div>
          
          <p className={styles.price}>{product.price}</p>
          <p className={styles.taxInfo}>Inclusive of all taxes.</p>
          
          <p className={styles.description}>{product.description}</p>

          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <label>Stitching Option:</label>
              <select className={styles.selectBox}>
                <option>Unstitched (Fabric Only)</option>
                <option>Standard Size (S, M, L, XL)</option>
                <option>Custom Stitching (+ ₹5,000)</option>
              </select>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCartBtn}>Add to Cart</button>
            <Link href="/checkout">
              <button className={styles.buyNowBtn}>Buy it Now</button>
            </Link>
          </div>

          {/* Product Details Tabs (simplified as list for now) */}
          <div className={styles.detailsList}>
            <h3 className={styles.detailsTitle}>Product Details</h3>
            <ul>
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.shippingInfo}>
            <p>✈️ Free worldwide shipping on prepaid orders.</p>
            <p>🛡️ 100% secure checkout.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
