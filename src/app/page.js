'use client';
import { useEffect, useState } from "react";
import Product from "../components/Product";


export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);
  const [phrase, setPhrase] =useState('');

  useEffect(()=>{
    fetch('/api/products').then(response=>response.json()).then(json=> setProductsInfo(json));
  }, []);
  console.log({productsInfo});
  
  const categoriesNames =  [...new Set(productsInfo.map(p=>p.category))]
  console.log({categoriesNames});
let products
  if(phrase){
    products=productsInfo.filter(p=>p.name.toLowerCase().includes(phrase))
  }else{
    products=productsInfo
  }
  
  return (
  <div className="p-5"> {/**p is for padding */}
   {/* {JSON.stringify(productsInfo)} */}
   <input value={phrase} onChange={e=>setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-full rounded-xl py-2 px-4"></input>
    <div>

      {categoriesNames.map(categoryName=>(
        <div key={categoryName}>
          {products.find(p=>p.category===categoryName) && (
            <div><h2 className="text-2xl py-5 capitalize font-bold">{categoryName}</h2>
            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {products.filter(p=>p.category === categoryName).map(productInfo=>(
                <div key={productInfo._id} className="px-5 snap-start">
              <Product name={productInfo.name} price={productInfo.price} description={productInfo.description} picture={productInfo.picture}/>
              </div>
            ))}</div>
            </div>
          )}
          
          
        </div>
      ))}
        
    </div>  
  </div>
  );
}
