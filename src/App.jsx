import  React, {useState} from "react"
import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import ShoppingList from "./ShoppingList";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [list, setList] =  useState([
    {  
      id: uuidv4(), 
      name: "leirvik", 
      price: 2085, 
      img: "/assets/images/leirvik-säng-2085.png", 
      completed: true
    },
    {  
      id: uuidv4(), 
      name: "åskmuller", 
      price: 179, 
      img: "/assets/images/åskmuller-brodslampa-179.png", 
      completed: false
    }
 ]);

   
  const  addItem = ({name,price})=>{
    setList((list)=>{
      if (list){
        return [
            { 
              id: uuidv4(), 
              name: name, 
              price: price, 
              completed: false 
            },
            ...list,
        ]
      }
    })
  }
                                        
  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/shoppinglist" element={<ShoppingList list={list}/>}/>
        </Routes>    
      </main>     
    </div>
    </>
  );
}

export default App;
