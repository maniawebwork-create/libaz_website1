import HeroSection from '../components/HeroSection';
import CategoriesGrid from '../components/CategoriesGrid';
import BrandIntro from '../components/BrandIntro';
import ProductCarousel from '../components/ProductCarousel';
import InstagramFeed from '../components/InstagramFeed';
import Testimonials from '../components/Testimonials';
import BlogPosts from '../components/BlogPosts';
import OurStores from '../components/OurStores';

const newArrivals = [
  { id: 101, name: "Exclusive Bridal Collection", price: "₹35,000", img: "/images/hero_bridal_2.png" },
  { id: 102, name: "Luxury Reception Gown", price: "₹28,500", img: "/images/product_gown.png" },
  { id: 103, name: "Regal Heritage Lehenga", price: "₹45,200", img: "/images/hero_bridal_3.png" },
  { id: 104, name: "Classic Zari Work Lehenga", price: "₹38,000", img: "/images/category_lehenga.png" },
];

const lehengas = [
  { id: 201, name: "Red Traditional Bridal Lehenga", price: "₹24,150", oldPrice: "₹29,820", img: "/images/prod_lehenga_red.png" },
  { id: 202, name: "Crimson Velvet Lehenga", price: "₹21,000", oldPrice: "₹25,000", img: "/images/product_red_lehenga.png" },
  { id: 203, name: "Pink Floral Designer Lehenga", price: "₹18,500", img: "/images/cat_lehengas.png" },
  { id: 204, name: "Royal Heavy Embroidered Lehenga", price: "₹32,000", oldPrice: "₹38,000", img: "/images/hero_bridal.png" },
];

const sarees = [
  { id: 301, name: "Pastel Floral Designer Saree", price: "₹16,150", oldPrice: "₹19,820", img: "/images/prod_saree_pastel.png" },
  { id: 302, name: "Classic Chiffon Saree", price: "₹12,000", img: "/images/product_pastel_saree.png" },
  { id: 303, name: "Elegant Silk Drape Saree", price: "₹14,500", oldPrice: "₹18,000", img: "/images/cat_sarees.png" },
  { id: 304, name: "Designer Pre-Draped Saree", price: "₹19,200", img: "/images/category_saree.png" },
];

const indowestern = [
  { id: 401, name: "Modern Indowestern Set", price: "₹12,450", oldPrice: "₹15,190", img: "/images/prod_indowestern_mod.png" },
  { id: 402, name: "Contemporary Fusion Gown", price: "₹15,000", img: "/images/product_indowestern.png" },
  { id: 403, name: "Chic Cape Top Set", price: "₹11,500", img: "/images/cat_indowestern.png" },
  { id: 404, name: "Designer Draped Gown", price: "₹18,500", img: "/images/product_gown.png" },
];

const coordSets = [
  { id: 501, name: "Designer Coord Sets", price: "₹11,800", oldPrice: "₹14,500", img: "/images/cat_coord_sets.png" },
  { id: 502, name: "Designer Kurti Suit Set", price: "₹8,400", oldPrice: "₹10,500", img: "/images/product_kurti.png" },
  { id: 503, name: "Luxury Silk Coord Set", price: "₹14,200", img: "/images/hero_bridal_2.png" },
  { id: 504, name: "Floral Print Summer Coord", price: "₹9,500", img: "/images/category_lehenga.png" },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesGrid />
      <BrandIntro />
      <InstagramFeed />
      <ProductCarousel title="New Arrivals" products={newArrivals} />
      <ProductCarousel title="Lehengas" products={lehengas} />
      <ProductCarousel title="Sarees" products={sarees} />
      <ProductCarousel title="Indowestern" products={indowestern} />
      <ProductCarousel title="Coord Sets" products={coordSets} />
      <Testimonials />
      <BlogPosts />
      <OurStores />
    </>
  );
}
