'use client';

import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { ProductsContext } from "../../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    console.log('Selected Products:', selectedProducts);

    // Ensure selectedProducts is an array before mapping
    if (Array.isArray(selectedProducts)) {
      const uniqIds = selectedProducts.map(product => 
        typeof product === 'string' ? product : product._id
      );

      if (uniqIds.length > 0) {
        fetch('/api/products?ids=' + uniqIds.join(','))
          .then(response => response.json())
          .then(json => setProductsInfo(json))
          .catch(err => console.error('Failed to fetch products', err));
      }
    } else {
      console.error('selectedProducts is not an array:', selectedProducts);
    }
  }, [selectedProducts]);

  return (
    <Layout>
      {productsInfo.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </Layout>
  );
}
