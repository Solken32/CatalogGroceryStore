import Layout from '@/components/layout';
import SingleProduct from '@/components/ShopDetails';
import React from 'react';

export default function ProductDetail({ params }: { params: { id: string } }) {

  return (
    <Layout>
      <h1>Producto : { params.id}</h1>
      <SingleProduct id={params.id} />
    </Layout  >

  )
}