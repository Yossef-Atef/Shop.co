import React, { useMemo } from "react";
import HeroSection from "../section/HeroSection";
import BrandsBar from "../components/BrandsBar";
import ProductCard from "../components/ProductCard";
import ModelGallery from "../components/ModelGallery";
import ProductDescription from "../components/ProductDescription";
import { products } from "../data/products";

/**
 * HomePage Component
 * 
 * The main landing page of the application, displaying hero section, 
 * featured brands, and product collections.
 */
function HomePage() {
  // Use useMemo to filter products only when dependencies change
  const newArrivals = useMemo(() =>
    products.filter(p => p.category === "new-arrivals"),
    []);

  const topSelling = useMemo(() =>
    products.filter(p => p.category === "top-selling"),
    []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main>
        <HeroSection />
        <BrandsBar />

        {/* New Arrivals Section */}
        <section className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl md:text-[48px] font-black text-center mb-8 md:mb-14 uppercase tracking-tighter">
            NEW ARRIVALS
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                description={product.description}
              />
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex justify-center">
            <button className="px-14 py-4 border border-black/10 rounded-full font-medium text-base hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto">
              View All
            </button>
          </div>

          <div className="mt-16 md:mt-24 border-b border-black/10"></div>
        </section>

        {/* Top Selling Section */}
        <section className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl md:text-[48px] font-black text-center mb-8 md:mb-14 uppercase tracking-tighter">
            TOP SELLING
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {topSelling.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                description={product.description}
              />
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex justify-center">
            <button className="px-14 py-4 border border-black/10 rounded-full font-medium text-base hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto">
              View All
            </button>
          </div>
        </section>

        <ModelGallery />
        <ProductDescription />
      </main>
    </div>
  );
}

export default HomePage;
