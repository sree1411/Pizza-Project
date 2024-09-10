import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice';

const PizzaCard = ({pizza}) => {

    const dispatch  = useDispatch();
     
    const [selectedPrice, setSelectedPrice] = useState('')

    const addTocartToPizza = (pizza)=>{
      
       dispatch(addToCart({...pizza, price:selectedPrice}))
    }


  return (
       <>
        
         
        
         <div className='w-25 p-2 d-flex flex-column justify-content-between'>
          
            <img src={pizza.img} className="card-img-top" alt="..."/>
            
       
            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text"> {pizza.description}</p>
     
                 <select name="" id="" onChange={(e)=>setSelectedPrice(e.target.value)}  >
                    {Object.keys(pizza.sizeandcrust[0]).map((sc,i)=>
                        <option  value={pizza.sizeandcrust[0][sc][0].price}>{sc}-{pizza.sizeandcrust[0][sc][0].price}</option>
                    )}
                 </select>

                <a href="#" className="btn btn-primary">
                     <b onClick={()=>addTocartToPizza(pizza)}>
                          Add To Cart 
                        <span className='m-2'>{selectedPrice}</span> 
                       </b>
                </a>
            </div>
        </div>
          
    
 
       
       </>
  )
}

export default PizzaCard