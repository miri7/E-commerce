import { createContext, useEffect,useState } from "react";

export   const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cartItem, setCartItems] = useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage):[];
        } catch (error) {
            return []
        }
    })

    useEffect(()=>{
        localStorage.setItem('cartProducts',JSON.stringify(cartItem))
    }, [cartItem])

    const addItemToCart = (producto)=>{
        const inCart = cartItem.find(
            (productInCart) => productInCart.id === producto.id
        )
    
        if(inCart){
            setCartItems(
                cartItem.map((productInCart)=>{
                        if(productInCart.id === producto.id){
                            return {...inCart, amount:inCart.amount + 1}
                        }else return productInCart;
                })
            )
        }else {
            setCartItems([...cartItem,{...producto, amount:1}])
        }
    }

    return(
        <CartContext.Provider value={{cartItem, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}