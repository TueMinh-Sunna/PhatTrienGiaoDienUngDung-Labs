import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Alert from "./components/Alert";
import LoginForm from "./components/LoginForm";
import './App.css'

const App = () => {
  //b1b3============================================
  const [alertType, setAlertType] = useState(null)

  //b1b5================
  const products = [
    {id: 1, src: "/images/1.jpg", name: "a", price: "VND1"},
    {id: 2, src: "/images/2.jpg", name: "b", price: "VND2"},
    {id: 3, src: "/images/3.jpg", name: "c", price: "VND3"},
    {id: 4, src: "/images/4.jpg", name: "d", price: "VND4"}
  ]

  return (
    //b1b1====================
    // <div className="app">
    //   <ProductCard
    //     src = "/images/1.png"
    //     name = "Daruma"
    //     price="VND100,000"
    //   />
    // </div>

    //b1b2=============================
    // <div style={{ padding: 20 }}>
    //   <Button type={"primary"}>Save</Button>
    //   <Button type={"danger"}>Delete</Button>
    //   <Button type={"success"}>Done</Button>
    // </div>

    //b1b3===============================
    // <div style={{ padding: "20px" }}>
    //   <button onClick={() => setAlertType("success")}>
    //     show success
    //   </button>
    //   <button onClick={() => setAlertType("warning")}>
    //     show warning
    //   </button>
    //   <button onClick={() => setAlertType("error")}>
    //     show error
    //   </button>
    //   <Alert 
    //     type={alertType}
    //     message={`${alertType} message`}
    //     onClose={() => {setAlertType(null)}}
    //   />
    // </div>

    //b1b4=============
    // <LoginForm />

    //b1b5
    <div className="product-list">
      {
        products.map((item) =>
          <ProductCard
            key={item.id}
            src={item.src}
            name={item.name}
            price={item.price}
          />
        )
      }
    </div>
  )
}

export default App