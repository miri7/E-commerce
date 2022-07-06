import React, {useEffect,useState,useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import { listProductos } from "../../funciones/funciones";
import {ProductData} from '../data/Products'

import styles from './styles.module.css'

const Products = () => {
    const [productos, setProductos] = useState(null);

  useEffect(() => {
    listProductos(setProductos);
  }, []);

  const {addItemToCart} = useContext(CartContext)


  return (
    <div className={styles.productoContainer}>
      
        {productos != null
      ? productos.map((productos) => (
        <div className={styles.producto}>
            <img src={productos.strDrinkThumb} alt={productos.strGlass}/>
            <div>
                <p>
                {productos.strGlass} - 10
                </p>
            </div>
              <button onClick={()=>addItemToCart(productos)}> Agregar al carrito</button>
           
          <div></div>
        </div>
        ))
      : "no hay productos"}
    </div>
  )
}

export default Products