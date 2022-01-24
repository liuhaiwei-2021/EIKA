import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";
import ShoppingCompletedList from "./components/ShoppingCompletedList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  // use useState to manage Local state
  const [list, setList] = useState("");
  // Remove dummy/test data in production -1

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

  const [uncompletedList, setUncompletedList] = useState("");
  const [completedList, setCompletedList] = useState("");

  // declare navigate
  const navigate = useNavigate();

  // useEffect is similar but not the same as componentDidMount.
  // key difference: componentDidMount (at least in Vue) runs BEFORE the component is rendered,
  // useEffect runs this code after the JSX below is loaded into the browser. I will explain this in class.
  // componentDidMount
  useEffect(() => {
    const loadLocaldata = () => {
      // read localStorage
      // use Const by default for extra securirty, will explain more in class.
      let storedList = JSON.parse(localStorage.getItem("list"));
      let storedUncompletedList = JSON.parse(
        localStorage.getItem("uncompletedList")
      );
      let storedCompletedList = JSON.parse(
        localStorage.getItem("completedList")
      );

      storedList && setList(storedList);
      storedUncompletedList && setUncompletedList(storedUncompletedList);
      storedCompletedList && setCompletedList(storedCompletedList);

      // according to localdata go to different page
      storedUncompletedList.length > 0
        ? navigate("/shoppinglist")
        : navigate("/");
    };

    loadLocaldata();
  }, []);

  //wacher list
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("uncompletedList", JSON.stringify(uncompletedList));
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }, [list, uncompletedList, completedList]);

  // ADD new item to list
  const addItem = ({ name, price }) => {
    setList((prevList) => {
      return [
        {
          id: uuidv4(),
          name: name,
          price: price,
          completed: false,
        },
        ...prevList,
      ];
    });
    //  ADD new uncompleted item to uncompletedList
    setUncompletedList((prevUncompletedList) => {
      return [
        {
          id: uuidv4(),
          name: name,
          price: price,
          completed: false,
        },
        ...prevUncompletedList,
      ];
    });
  };

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
    let newUncompletedList = list.filter((item) => item.completed === false);
    setUncompletedList(newUncompletedList);
    let newCompletedList = list.filter((item) => item.completed === true);
    setCompletedList(newCompletedList);
  };

  // Nesting, long content -1
  return (
    <>
      <div className="content">
        <Header />
        <main className="main">
          <Routes>
            {/* Compare this 1 line Route to... */}
            <Route path="/" element={<Welcome />} />
            <Route path="/add" element={<AddItem addItem={addItem} />} />
            {/* This one, that have 5 lines, we can implement techniques to refactor this -1 */}
            <Route
              path="/shoppinglist"
              element={
                <ShoppingList
                  uncompletedList={uncompletedList}
                  addItem={addItem}
                  toggleItemCompleted={toggleItemCompleted}
                />
              }
            />
            {/* Same here */}
            <Route
              path="/shoppinglist-completed"
              element={
                <ShoppingCompletedList
                  completedList={completedList}
                  toggleItemCompleted={toggleItemCompleted}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
