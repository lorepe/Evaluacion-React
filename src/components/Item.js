import {useState} from 'react'
import { Product, ButtonPur, Stock,Texto, CarritoAdicion, CarritoLleno} from "./Styles/Item";
// import { BsFillCartFill,BsFillCartXFill } from "react-icons/bs";

 // El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({nombre, descripcion,stockRecibido,metodo}) {
  const [stock,setStock] = useState(stockRecibido)
  const [comprar, setComprar] = useState(true)
  const [carrito,setCarrito] = useState(<CarritoAdicion/>)
  const [boton, setBoton] = useState("COMPRAR")
  
  const stockHandler = ()=>{
    if(stock > 0 ){
      setStock(prevState=>prevState - 1)
      metodo()
    } 
    
    if (stock === 1){
      setStock("agotado")
      setComprar(false)
      setBoton("SIN STOCK")
      setCarrito(<CarritoLleno/>)
    }
  }
  return (
    <Product className='producto' >
      <h3 id="light">{nombre}</h3>
      <p>{descripcion}</p>
      <Texto able={stock}>En stock: <Stock able={stock}>{stock}</Stock></Texto>
      <ButtonPur id="light" disabled={comprar ? false : true} onClick={()=>stockHandler()}> {boton} {carrito}</ButtonPur>
    </Product>
  )
}
