import Layout from '@/components/layout';
import SingleProduct from '@/components/ShopDetails';
import React from 'react';

export default async function ProductDetail({ params, }: { params: Promise<{ id: string }> }) {
  const  {id}  = await params
  return (
    <Layout>
      <h1>Producto : {id}</h1>
      <SingleProduct id={id} />
    </Layout  >

  )
}