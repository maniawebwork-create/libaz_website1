import Link from 'next/link';
import styles from './CategoriesGrid.module.css';

const categories = [
  { id: 1, name: 'Indowestern', image: '/images/cat_indowestern.png', link: '/indowestern' },
  { id: 2, name: 'Coord Sets', image: '/images/cat_coord_sets.png', link: '/coord-sets' },
  { id: 3, name: 'Sarees', image: '/images/cat_sarees.png', link: '/sarees' },
  { id: 4, name: 'Lehengas', image: '/images/cat_lehengas.png', link: '/lehengas' },
];

export default function CategoriesGrid() {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.gridContainer}>
        {categories.map((category) => (
          <Link href={category.link} key={category.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={category.image} alt={category.name} className={styles.image} />
            </div>
            <div className={styles.overlay}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <button className={styles.shopBtn}>Shop Now</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
