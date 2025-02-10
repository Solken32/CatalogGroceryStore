import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Home from "@/components/Home";
import { products } from "@/data/products";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "HoodbaEcommerce",
  description: "Encuentra todo  en un solo lugar",
  // other metadata
};

export default function HomePage() {
  return (
    <>
    <Layout>

      <Home />
      
      <section className="w-full max-w-4xl px-6 py-20 text-center mx-auto bg-white">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight">
          Fresh Groceries, Delivered to Your Door
        </h1>
        <p className="text-gray-600 mt-4 md:mt-6 text-lg mb-6">
          Shop for quality groceries and household essentials from the comfort of your home.
        </p>
        <Button size="icon" variant="ghost">Start Shopping</Button>
      </section>

      {/* Sección de Categorías */}
      <section className="w-full px-12 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.categories.map(category => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link key={category.id} href={`/views/category/${category.id}`} className="block">
                <a href={`views/category/${category.id}`} className="w-full h-80 object-cover">
                <Image src={category.image} alt={category.name} />
                </a>
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-5">{category.name}</h3>
                <Button  size="icon" variant="ghost">Shop Now</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      
    </Layout>
    </>
  );
}
