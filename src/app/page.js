'use client';
import { useEffect, useState } from "react";
import Product from "../components/Product";


export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(()=>{
    fetch('/api/products').then(response=>response.json()).then(json=> setProductsInfo(json));
  }, []);
  console.log({productsInfo});
  
  const categoriesNames =  [...new Set(productsInfo.map(p=>p.category))]
  console.log({categoriesNames});
  
  return (
  <div className="p-5"> {/**p is for padding */}
   {/* {JSON.stringify(productsInfo)} */}
    <div>

      {categoriesNames.map(categoryName=>(
        <div key={categoryName}>
          <h2 className="text-2xl capitalize font-bold">{categoryName}</h2>
          {productsInfo.filter(p=>p.category === categoryName).map(productInfo=>(
            <Product name={productInfo.name} price={productInfo.price} description={productInfo.description} picture={productInfo.picture}/>
          ))}
        </div>
      ))}
        <div className="py-4"> {/**py is for vertical padding (along y axis) */}
        
      </div>
    </div>  
  </div>
  );
}
