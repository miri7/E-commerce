import React, { useEffect, useState } from "react";
import { listProductos } from "../funciones/funciones";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import  '../index.css'

const Carta = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    listProductos(setProductos);
  }, []);

  return (
    <>
    {productos != null
      ? productos.map((productos) => (
        <div className='d-flex  '>
          <Card >
            <Card.Img variant="top" src={productos.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{productos.strGlass}</Card.Title>
              <h4>Precio : 10 </h4>
              <Button variant="primary"> Agregar al carrito</Button>
            </Card.Body>
          </Card>
          <div></div>
        </div>
        ))
      : "no hay productos"}
    </>
   
  );
};

export default Carta;
