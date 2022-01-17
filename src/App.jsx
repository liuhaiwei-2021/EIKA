import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import ShoppingList from "./ShoppingList";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/shoppinglist" element={<ShoppingList/>} />
        </Routes>      
      </main>     
    </div>
    </>
  );
}

export default App;
