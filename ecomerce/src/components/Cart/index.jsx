import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {CartContext} from '../../context/CartContext'

import './styles.module.css'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [productlenght, setProductLenght] = useState(0)

  const {cartItem} = useContext(CartContext)

  useEffect(()=>{
    setProductLenght(
      cartItem.reduce((previous, current)=>previous + current.mount, 0)
    )
  },[])

 
  return (
    <div>
      <div>
        {!cartOpen ?(
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        )
        : ''}
      </div>
    </div>
  )
}

export default Cart