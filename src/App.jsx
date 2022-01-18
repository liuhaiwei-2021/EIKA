import  React, {useState, useEffect} from "react"
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AddItem from "./components/AddItem"
import ShoppingList from "./components/ShoppingList";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function App() {
  // use useState to manage Local state
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

  // ADD item to list
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
 

  // componentDidMount
  useEffect(() => {
    const storedList= JSON.parse(localStorage.getItem('list'))
    if (storedList){}
      setList(storedList)
  }, [])
  
  //wacher list
  useEffect(() => { 
    localStorage.setItem('list', JSON.stringify(list))

  }, [list])

  // {
  //   list.length >0  
  //     ? window.location.replace("http://localhost:3000/shoppinglist") 
  //     : window.location.replace("http://localhost:3000")
  // }

                                        
  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" 
                 element={
                 <Welcome
                   
                  addItem={addItem}
          />}/>
          <Route path="/add" 
                 element={
                 <AddItem 
                  addItem={addItem}
          />}/>
          <Route path="/shoppinglist" 
                 element={
                 <ShoppingList 
                 list={list}
                 addItem={addItem}
          />}/>
        </Routes>    
      </main>     
    </div>
    </>
  );
}

export default App;
