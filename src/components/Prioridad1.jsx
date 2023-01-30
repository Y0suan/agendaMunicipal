import React from 'react'
import styled from 'styled-components';



//finciones
import getAll from '../function/getAll';



const Prioridad = styled.div`
width: 50%;
height: 100%;

background-color: aqua;
.eventoUno{
  width: 100%;
  height: 100%;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    }
  .info{
  width: 100%;
  height: 100%;  
  padding: 20px;
  background-color: #00000092;
  color: white;
  position: absolute;
   right: 100%;
   top: 0;
  transition: 3s;
  .flex{
    display: flex;
    font-size: 20px;
    font-weight: 500;
    p{
      margin-right: 20px;
    }
  }
  h2{
    font-size: 45px;
    font-weight: 800;
  }
  }
  }  



.eventoUno:hover{
.info{
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: 2s;
} 
}
`


const Prioridad1 = () => {

  const [eventos,setEventos]=React.useState([]);

  function actualizarEstadoEventos(){
    getAll().then((eventos)=>{
      setEventos(eventos);
    });
   }

   React.useEffect(()=>{
    actualizarEstadoEventos();
   },[]);

 let mostar = eventos.filter(evento => evento.prioridad == "1");



  return (
    
    <Prioridad>
      {mostar && mostar.map((evento,index)=>(
        <div className="eventoUno">
        <img  src={evento.urlDescarga} alt="" /> 

        <div className="info"> 
        <h2>{evento.title}</h2> 

        <div className="flex">
        <p>{evento.start}</p>
        <p>{evento.end}</p>
        </div>    

        <h4>{evento.descripcion}</h4>
        <div className="contact">
        </div>
        </div>
        </div>
      ))}
    </Prioridad>
   
  )
}

export default Prioridad1