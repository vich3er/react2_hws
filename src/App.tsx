import './App.css'
import {useFetch} from "./hooks/useFetch.ts";
import {  IResponse} from "./models/IProduct.ts";

function App() {
const response= useFetch<IResponse>('https://dummyjson.com/products');
const products = response?.products
    // чому не можна так?
    // const  {products}= useFetch<IResponse>('https://dummyjson.com/products');



    return (
      <>
          {
              products&& products.map((product) => <p key={product.id}>{product.category}</p>)
          }


      </>
  )
}

export default App
