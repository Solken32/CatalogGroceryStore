import Layout from "@/components/layout"; 
import SingleProduct from "@/components/ShopDetails";
import products from "@/data/products.json";
import { Product } from "@/types/product";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  let product: Product | null = null;
  for (const category of products.categories) {
    for (const subcategory of category.subcategories) {
      product = subcategory.products.find((p) => p.id.toString() === params.id) || null;
      if (product) break;
    }
    if (product) break;
  }

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <>
    <Layout>
      
      <SingleProduct product={product} />;
    
    </Layout>
    </>

  );
};

