// components/SearchInput.js
'use client';

import { useState } from 'react';

export default function SearchInput({ products, onSearch }) {
  const [phrase, setPhrase] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setPhrase(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={phrase}
      onChange={handleSearch}
      placeholder="Search for products..."
      className="bg-gray-100 w-full rounded-xl py-2 px-4"
    />
  );
}
