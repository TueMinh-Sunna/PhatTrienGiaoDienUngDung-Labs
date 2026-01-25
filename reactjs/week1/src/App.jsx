import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Alert from "./components/Alert";
import LoginForm from "./components/LoginForm";
import './App.css';
import StudentInfo from "./components/StudentInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import StatusBadge from "./components/StatusBadge";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import UserForm2 from "./components/UserForm2";
import DigitalClock from "./components/DigitalClock";
import ProductFilter from "./components/ProductFilter";
import TodoApp from "./components/TodoApp";
import StopWatch from "./components/StopWatch";
import FetchUsers from "./components/FetchUsers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Users from "./components/Users";
import UserList from "./components/UserList";
import UserById from "./components/UserById";
import PostSearch from "./components/PostSearch";
import TodoCrud from "./components/TodoCrud";
import TodoReducerApp from "./components/TodoReducerApp";
import ThemeManager from "./components/ThemeManager";
import CartManager from "./components/CartManager";

const App = () => {
  // b1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //b1b3============================================
  // const [alertType, setAlertType] = useState(null)

  // //b1b5================
  // const products = [
  //   {id: 1, src: "/images/1.jpg", name: "a", price: "VND1"},
  //   {id: 2, src: "/images/2.jpg", name: "b", price: "VND2"},
  //   {id: 3, src: "/images/3.jpg", name: "c", price: "VND3"},
  //   {id: 4, src: "/images/4.jpg", name: "d", price: "VND4"}
  // ]

  // return (
  //   //b1b1====================
  //   // <div className="app">
  //   //   <ProductCard
  //   //     src = "/images/1.png"
  //   //     name = "Daruma"
  //   //     price="VND100,000"
  //   //   />
  //   // </div>

  //   //b1b2=============================
  //   // <div style={{ padding: 20 }}>
  //   //   <Button type={"primary"}>Save</Button>
  //   //   <Button type={"danger"}>Delete</Button>
  //   //   <Button type={"success"}>Done</Button>
  //   // </div>

  //   //b1b3===============================
  //   // <div style={{ padding: "20px" }}>
  //   //   <button onClick={() => setAlertType("success")}>
  //   //     show success
  //   //   </button>
  //   //   <button onClick={() => setAlertType("warning")}>
  //   //     show warning
  //   //   </button>
  //   //   <button onClick={() => setAlertType("error")}>
  //   //     show error
  //   //   </button>
  //   //   <Alert 
  //   //     type={alertType}
  //   //     message={`${alertType} message`}
  //   //     onClose={() => {setAlertType(null)}}
  //   //   />
  //   // </div>

  //   //b1b4=============
  //   // <LoginForm />

  //   //b1b5============================
  //   // <div className="product-list">
  //   //   {
  //   //     products.map((item) =>
  //   //       <ProductCard
  //   //         key={item.id}
  //   //         src={item.src}
  //   //         name={item.name}
  //   //         price={item.price}
  //   //       />
  //   //     )
  //   //   }
  //   // </div>

  // )

  /*b2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  // // b2b4
  // const [status, changeStatus] = useState('')

  // // b2b5
  // const [todos, setTodos] = useState([])

  // const addTodo = (text) => {
  //   setTodos([...todos, {id: Date.now(), text}])
  // }

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id != id))
  // }

  // return (
  //   //b2b1==================
  //   // <div>
  //   //   <Header />
  //   //   <StudentInfo 
  //   //   src='/images/1.jpg'
  //   //   name='meomeo'
  //   //   classn='A1'
  //   //   />
  //   //   <Footer />
  //   // </div>

  //   //b2b2=============
  //   // <div>
  //   //   <Counter />
  //   // </div>

  //   //b2b3==============
  //   // <div>
  //   //   <UserForm />
  //   // </div>

  //   //b2b4======================
  //   // <div>
  //   //   <StatusBadge
  //   //     status={status} />
  //   //   <button
  //   //     onClick={() => { changeStatus('online') }}
  //   //   >online</button>
  //   //   <button
  //   //     onClick={() => { changeStatus('offline') }}
  //   //   >offline</button>
  //   //   <button
  //   //     onClick={() => { changeStatus('busy') }}
  //   //   >busy</button>
  //   // </div>

  //   //b2b5========================
  //   // <div>
  //   //   <TodoInput addTodo={addTodo}/>
  //   //   <TodoList 
  //   //     todos={todos}
  //   //     deleteTodo={deleteTodo}
  //   //   />
  //   // </div>

  /*b3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  // return (
  // //b3b1============
  // // <div>
  // //   <UserForm2 />
  // // </div>

  // //b3b2
  //   // <div>
  //   //   <DigitalClock />
  //   // </div>

  //   //b3b3
  //   // <div>
  //   //   <ProductFilter />
  //   // </div>

  //   //b3b4
  //   // <div>
  //   //   <TodoApp />
  //   // </div>

  //   //b3b5
  //   // <div>
  //   //   <StopWatch />
  //   // </div>

  //   //b3b6
  //   // <div>
  //   //   <FetchUsers />
  //   // </div>

  //   //b3b7
  //   // <div>
  //   //   <ThemeSwitcher />
  //   // </div>
  // )

  /*b4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  // return (
  //   //b4b1
  //   // <div>
  //   //   <Users />
  //   // </div>

  //   //b4b2
  //   // <div>
  //   //   <UserList />
  //   // </div>

  //   //b4b3
  //   // <div>
  //   //   <UserById />
  //   // </div>

  //   //b4b4
  //   // <div>
  //   //   <PostSearch />
  //   // </div>

  //   //b4b5
  //   // <div>
  //   //   <TodoCrud />
  //   // </div>
  // )

  /*b5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  return (
    //b5b1
    // <div>
    //   <TodoReducerApp />
    // </div>

    //b5b2
    // <div>
    //   <ThemeManager />
    // </div>

    //b5b3
    <div>
      <CartManager />
    </div>
  )
}

export default App