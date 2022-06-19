import React, { useState } from 'react'
import {Product, Amount, Cart} from "./Styles/Cabecera";

// import { BsFillCartFill } from "react-icons/bs";
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({cant}) {
  // const [text, setText] = useState("Dark mode");
  // const darkMode = () => {
  //   var element = document.getElementById("light");
  //   element.classList.toggle("dark");
  //   setText("Light mode")
  // }
  return (
    <Product id="light">
    <div>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <Cart/> <Amount>{cant}</Amount></p>
    </div>
      {/* <button onClick={()=> darkMode()}>{text}</button> */}
    </Product>
  )
}
