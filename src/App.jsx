import  React, {useState, useEffect} from "react"
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AddItem from "./components/AddItem"
import ShoppingList from "./components/ShoppingList";
import { Routes, Route, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function App() {


  // use useState to manage Local state
  const [list, setList] =  useState([]);
  // important test data 
    // [{  
    //   id: uuidv4(), 
    //   name: "leirvik", 
    //   price: 2085, 
    //   img: "/assets/images/leirvik-säng-2085.png", 
    //   completed: false
    // },
    // {  
    //   id: uuidv4(), 
    //   name: "åskmuller", 
    //   price: 179, 
    //   img: "/assets/images/askmuller-brodslampa-179.png", 
    //   completed: true
    // }]


  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  // declare navigate
  const navigate = useNavigate();
 
  // componentDidMount
  useEffect(() => {
    const loadLocaldata = () => {

        // read localStorage 
      let storedList= JSON.parse(localStorage.getItem('list'))
      let storedUncompletedList = JSON.parse(localStorage.getItem('uncompletedList'));
      let storedCompletedList = JSON.parse(localStorage.getItem('completedList'));

      storedList &&  setList(storedList) 
      storedUncompletedList &&  setUncompletedList(storedUncompletedList)
      storedCompletedList &&  setCompletedList(storedCompletedList)
      
      // according to localdata go to different page
      storedUncompletedList ?  navigate('/shoppinglist') : navigate('/');    
    };

    loadLocaldata();
  }, [])
  
  //wacher list
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('uncompletedList', JSON.stringify(uncompletedList));
    localStorage.setItem('completedList', JSON.stringify(completedList));
  }, [list,uncompletedList,completedList])

  // ADD new item to list
  const  addItem = ({name,price}) => {
    setList((prevList) => {
        return [        
            { 
              id: uuidv4(), 
              name: name, 
              price: price, 
              completed: false 
            },
            ...prevList
        ]
    })
  //  ADD new uncompleted item to uncompletedList
    setUncompletedList((prevUncompletedList) => {
      return [        
          { 
            id: uuidv4(), 
            name: name, 
            price: price, 
            completed: false 
          },
          ...prevUncompletedList
      ]
    })
  }
  // toggle item completed property
  const toggleItemCompleted = (id) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }      
    });
    setList(newList);

    // change uncompletedList and completedList as one of item's completed has changed
    let newUncompletedList = list.filter(item => item.completed === false);
    setUncompletedList(newUncompletedList);
    let newCompletedList = list.filter(item => item.completed === true);
    setCompletedList(newCompletedList)
  }                                    
  return (
    <>
    <div className="content">
      <Header />
      <main className="main">
        <Routes>
          <Route path = "/" 
                 element = {
                 <Welcome/>}/>
          <Route path="/add" 
                 element = {
                 <AddItem
                  addItem = {addItem}
          />}/>
          <Route path="/shoppinglist" 
                 element = {
                 <ShoppingList 
                 completedList = {completedList}
                 uncompletedList = {uncompletedList}
                  addItem = {addItem}
                  toggleItemCompleted = {toggleItemCompleted}
          />}/>
        </Routes>    
      </main>     
    </div>
    </>
  );
}

export default App;
