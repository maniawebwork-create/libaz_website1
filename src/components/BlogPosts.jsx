import styles from './BlogPosts.module.css';

const blogs = [
  { id: 1, title: "Top 5 Bridal Lehengas for Winter Weddings", img: "/images/category_lehenga.png" },
  { id: 2, title: "How to Style Your Saree Like a Pro", img: "/images/category_saree.png" },
  { id: 3, title: "Indowestern Trends of 2026", img: "/images/category_lehenga.png" },
];

export default function BlogPosts() {
  return (
    <section className={styles.blogSection}>
      <h2 className={styles.title}>Read Our Blog</h2>
      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <img src={blog.img} alt={blog.title} className={styles.blogImg} />
            <h3 className={styles.blogTitle}>{blog.title}</h3>
            <button className={styles.readBtn}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
