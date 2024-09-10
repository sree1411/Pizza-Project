import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {

   const  cart  = useSelector((state)=>state.pizza.cartList)
   console.log(cart, "hello")


  return (
    <>
      <div className="vh-100" style={{border:"2px solid black"}} >
        <h1> cart section :{cart.length}</h1>
        <p> 
           {
            cart.map((cart)=>{
              return <li> 
                  {cart.name} , {cart.price}
                </li>
            })
           }  
        </p>
        <h1> Total Price :  {cart.reduce((a,b)=>a+ +b.price,0)}</h1>
      </div>
    </>
  );
};

export default Cart;
