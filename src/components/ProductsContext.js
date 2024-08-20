'use client';

import { createContext, useState } from 'react';

// Create the context
export const ProductsContext = createContext();

// Create the provider component
export function ProductsProvider({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([]);

    return (
        <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}
