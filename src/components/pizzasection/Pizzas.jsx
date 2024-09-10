import React from 'react'
import pizzas from '../../allpizzas.json'
import PizzaCard from './PizzaCard'

const Pizzas = () => {

 
    

  return (
       <>
         <h1>  Pizzas section </h1>
         <div className='d-flex flex-wrap'>  
          {
           pizzas.map((pizza)=>{
            return  <PizzaCard pizza={pizza} />
           })
         }

         </div>
       
       
       </>
  )
}

export default Pizzas