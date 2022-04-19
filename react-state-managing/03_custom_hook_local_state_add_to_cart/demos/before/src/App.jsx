import React, {useEffect, useState} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import {Routes, Route} from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";


export default function App() {

    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) ??[];
        }catch (e) {
            console.error(`The cart could not be parsed to JSON`)
            return [];
        }
    });

    useEffect(()=>localStorage.setItem("cart", JSON.stringify(cart)),[cart])

    const addToCart = (id, sku)=>{
        setCart(items => {
            const itemInCart = items.find(item=>item.sku===sku);
            if (itemInCart){
               return items.map(i=>i.sku===sku ? {...i, quantity: i.quantity+1 }: i)
            }else {
                return [...items, {id, sku, quantity: 1}];
            }
        })
    }

    const updateQuantity = (sku, quantity) =>{
        setCart(items=>{
            return (quantity === 0)
                ? items.filter(i=>i.sku !== sku)
                :items.map(i=>i.sku===sku ? {...i, quantity}: i)
        })
    }

    const emptyCart = ()=>{
        setCart([]);
    }
    return (
    <>
      <div className="content">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>}/>
                <Route path="/:category" element={<Products/>}/>
                <Route path="/:category/:id" element={<Detail addToCart={addToCart}/>}/>
                <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity}/>}/>
                <Route path="/checkout" element={<Checkout cart={cart} emptyCart={emptyCart} />}/>
            </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
