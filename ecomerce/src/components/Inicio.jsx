import React, { useEffect, useState } from "react";
import { listProductos } from "../funciones/funciones";
import Navegacion from "./Navegacion";

import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import {
  Col,
  Form,
  InputGroup,
  Row,
  FloatingLabel,
  Modal,
  Table,
  FormControl,
} from "react-bootstrap";
import index from "../index.css";
import Card from './Carta.js'
import Cards from "./Cards";

const Inicio = () => {
  const [productos, setProductos] = useState(null);

  

  useEffect(() => {
    listProductos(setProductos);
  }, []);

  return (
    <>
      <Navegacion />
      &nbsp;&nbsp;&nbsp;
      <Cards/>
            {/* {productos != null
              ? productos.map((productos) => (
                  <Card>
                    <Card.Img variant="top" src={productos.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{productos.strGlass}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                ))
              : "no hay productos"} */}
        
    </>
  );
};

export default Inicio;
