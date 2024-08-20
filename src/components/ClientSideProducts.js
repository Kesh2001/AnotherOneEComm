// components/ClientSideProducts.js
'use client';

import { useState } from 'react';
import Product from './Product';

export default function ClientSideProducts({ products }) {
  const [phrase, setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  const filteredProducts = phrase
    ? products.filter((p) => p.name.toLowerCase().includes(phrase))
    : products;

  return (
    <>
      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value.toLowerCase())}
        placeholder="Search for products..."
        className="bg-gray-100 w-full rounded-xl py-2 px-4"
      />
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {filteredProducts.find((p) => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize font-bold">
                  {categoryName}
                </h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {filteredProducts
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product
                          name={productInfo.name}
                          price={productInfo.price}
                          description={productInfo.description}
                          picture={productInfo.picture}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
