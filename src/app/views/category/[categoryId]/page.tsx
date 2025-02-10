"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        const foundCategory = data.categories.find((cat: any) => cat.id === categoryId);
        setCategory(foundCategory);
      });
  }, [categoryId]);

  if (!category) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">{category.name}</h1>

      {/* Subcategorías */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Subcategories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.subcategories.map(sub => (
              <div key={sub.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">{sub.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Productos */}
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products.map(product => (
          <Link key={product.id} href={`/category/${category.id}/product/${product.id}`} className="block">
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Button className="mt-3 w-full">View Product</Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
