import  React, {useState} from "react"
import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import ShoppingList from "./ShoppingList";
import { Routes, Route } from "react-router-dom";


function App() {
  const [products, setProducts] =  useState(
                                                      [
                                                        {"id":1, "name": "leirvik", "price": 2085, "img": "/images/leirvik-säng-2085.png"},
                                                        {"id":2, "name": "åskmuller", "price": 179, "img": "/images/åskmuller-brodslampa-179.png"}
                                                      ]
                                                   );

  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/shoppinglist" element={<ShoppingList products={products}/>}  />
        </Routes>    
      </main>     
    </div>
    </>
  );
}

export default App;
