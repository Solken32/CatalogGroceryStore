import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Home from "@/components/Home";
import { products } from "@/data/products";
import Link from "next/link";
import { Metadata } from "next";



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
      
      {/* Sección de Categorías */}
      <section className="w-full px-12 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark">Comprar por Categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.categories.map(category => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link key={category.id} href={`/views/category/${category.id}`} className="block">
                
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-5 text-dark">{category.name}</h3>
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
