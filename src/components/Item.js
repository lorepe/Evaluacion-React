import {useState} from 'react'
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({nombre,descripcion,stockRecibido,metodo}) {
  const [stock,setStock] = useState(stockRecibido)
  const [comprar, setComprar] = useState(true)
  const [boton, setBoton] = useState("COMPRAR")
  
  const stockHandler = ()=>{
    if(stock > 0 ){
      setStock(prevState=>prevState - 1)
      metodo()
      // console.log(stock)
      // console.log(stockRecibido)
    } 
    
    if (stock === 1){
      setStock("agotado")
      setComprar(false)
      setBoton("SIN STOCK")
    }
    // console.log(stock)
    // stock === "agotado" ? "SIN STOCK" : "COMPRAR"
    // disabled={isNaN(stock) ? true : false}
  }

  return (
    <div className='producto' >
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5><span>{stock}</span></h5>
      <button  disabled={comprar ? false : true} onClick={()=>stockHandler()}> {boton} </button>
    </div>
  )
}
