import  React, {useState, useEffect} from "react"
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AddItem from "./components/AddItem"
import ShoppingList from "./components/ShoppingList";
import ShoppingCompletedList from "./components/ShoppingCompletedList";
import { Routes, Route, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function App() {
  // use useState to manage Local state
  const [list, setList] =  useState([
    {  
      id: uuidv4(), 
      name: "leirvik", 
      price: 2085, 
      img: "/assets/images/leirvik-säng-2085.png", 
      completed: false
    },
    {  
      id: uuidv4(), 
      name: "åskmuller", 
      price: 179, 
      img: "/assets/images/askmuller-brodslampa-179.png", 
      completed: true
    }
 ]);

 const [uncompletedList, setUncompletedList] = useState("")
 const [completedList, setCompletedList] = useState("")

 const navigate = useNavigate();

  // ADD item to list
  const  addItem = ({name,price})=>{
    setList((list)=>{
      if ({name,price}){
        return [
            { 
              id: uuidv4(), 
              name: name, 
              price: price, 
              completed: false 
            },
            ...list
        ]
      }
    })
    let newUncompletedList = list.filter(item => item.completed === false);
    setUncompletedList(newUncompletedList);
    let newCompletedList = list.filter(item => item.completed === true);
    setCompletedList(newCompletedList);

    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem('uncompletedList', JSON.stringify(uncompletedList))
    localStorage.setItem('completedList', JSON.stringify(completedList))
  }
  const toggleItemCompleted = (id) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    setList(newList);

    let newUncompletedList = list.filter(item => item.completed === false);
    setUncompletedList(newUncompletedList);
    let newCompletedList = list.filter(item => item.completed === true);
    setCompletedList(newCompletedList);

    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem('uncompletedList', JSON.stringify(uncompletedList))
    localStorage.setItem('completedList', JSON.stringify(completedList))
  };
 
  // componentDidMount
  useEffect(() => {
    // read localStorage and declare a storedList 
    const storedList= JSON.parse(localStorage.getItem('list'))
    if (storedList){
      setList(storedList) 
      const storedUncompletedList = list.filter(item => item.completed === false)
      setUncompletedList(storedUncompletedList)
      const storedCompletedList = list.filter(item => item.completed === true)
      setCompletedList(storedCompletedList)
      navigate('/shoppinglist')
      console.log(completedList)
    }else{
      // if there is not localStorage, go to Welcome page
      navigate('/')
    } 
  }, [])
  
  //wacher list
  useEffect(() => { 
    localStorage.setItem('list', JSON.stringify(list))
    localStorage.setItem('uncompletedList', JSON.stringify(uncompletedList))
    localStorage.setItem('completedList', JSON.stringify(completedList))
  }, [list,uncompletedList,completedList])

  
                                      
  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path = "/" 
                 element = {
                 <Welcome                   
                  addItem = {addItem}
          />}/>
          <Route path="/add" 
                 element = {
                 <AddItem 
                  addItem = {addItem}
          />}/>
          <Route path="/shoppinglist" 
                 element = {
                 <ShoppingList 
                  uncompletedList = {uncompletedList}
                 addItem = {addItem}
                 toggleItemCompleted = {toggleItemCompleted}
          />}/>
          <Route path = "/shoppinglist-completed" 
                 element = {
                 <ShoppingCompletedList 
                 completedList = {completedList}
                 toggleItemCompleted = {toggleItemCompleted}
          />}/>
        </Routes>    
      </main>     
    </div>
    </>
  );
}

export default App;
