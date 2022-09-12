import React, { useEffect } from "react";
import { useState } from "react";

const Form = () =>{

  const  [nombre,setNombre] = useState ('')
  const  [apellido,setApellido] = useState ('')

    const handledSubmit = (event) => { 
        event.preventDefault();
        //console.log(event.target.elements.nombre.value)
        //console.log(event.target.elements.apellido.value)
        

            
    }

        const handleChangeNombre = (event) =>{
            setNombre(event.target.value)

        }
        const handleChangeApellido = (event) =>{
            setApellido(event.target.value)

        }

        useEffect(() =>{
            const edad = document.getElementById('edad')
                console.log(edad)
        })

        

    return (


        <div className="form">
        <form action="" onSubmit={handledSubmit}>
            <input 
            type= "text" 
            placeholder="nombre..." 
            name="nombre" 
            value={nombre} 
            onChange={handleChangeNombre}/>

            <input type= "text"
             placeholder="apellido..." 
            name="apellido"
             value={apellido} 
            onChange={handleChangeApellido}/>

            <input type='number' id= 'edad' placeholder="Edad" />
            <button>Enviar</button>

        </form>


    </div>
    )

   
}


export default Form