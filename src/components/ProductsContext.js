'use client';

import { createContext, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';

// Create the context
export const ProductsContext = createContext();

// Create the provider component
export function ProductsProvider({ children }) {
    // Automatically handles local storage, storing `selectedProducts` under the key 'cart'
    const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', {
        defaultValue: 2 // Initializes with an empty array if nothing is in local storage
    });

    // For debugging purposes, we log the cart contents whenever they change
    useEffect(() => {
        console.log('Cart:', selectedProducts);
    }, [selectedProducts]);

    return (
        <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}
