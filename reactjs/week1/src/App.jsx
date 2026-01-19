import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="app">
      <ProductCard
        image = "./assets/images/1.png"
        name = "Daruma"
        price="VND100,000"
      />
    </div>
  )
}

export default App