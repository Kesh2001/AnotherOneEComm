import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

export default function Product({name, price, description, picture}){
  const {setSelectedProducts} = useContext(ProductsContext)

  function addProduct(_id){
    setSelectedProducts(prev=>[...prev,_id])
  }
    return (
      <div className="w-64">{/**width */}
        <div className="bg-blue-100 p-5 rounded-xl"> {/**xl is for increasing the curve */}
              <img src={picture} alt=""></img>
        </div>      
             
        <div className="mt-2"> {/**mt is margin top */}
          <h3 className="font-bold text-lg">
            {name}
          </h3>
        </div>
        <p className="text-sm mt-1 leading-4"> {description}</p>
        {/**leading is the space btw lines */}
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow">
            {"$"+price}
          </div>
          <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
        </div>
      </div>
    )
}