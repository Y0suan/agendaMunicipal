import React from 'react'
import styled from 'styled-components';

//finciones
import getAll from '../function/getAll';

const Prioridad = styled.div`
width: 100%;
height: 50%;
.eventoUno{
width: 100%;
height: 100%;
display: flex;
.img{
  width: 50%;
  height: 100%;
  img{
  width: 100%;
  border-radius: 8px;
  }
}
.info{
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: #f8f9fa;
  h2{
    font-size: 1.5rem;
    font-weight: 600;
    text-transform:uppercase;
    text-align: center;
  }

}
}


`


const Prioridad2 = () => {

  const [eventos,setEventos]=React.useState([]);

  function actualizarEstadoEventos(){
    getAll().then((eventos)=>{
      setEventos(eventos);
    });
   }
   React.useEffect(()=>{
    actualizarEstadoEventos();
   },[]);
 let mostar = eventos.filter(evento => evento.prioridad == "2");



  return (
    <Prioridad>
      {mostar && mostar.map((evento,index)=>(
        <div className="eventoUno">
        <div className="img">
         <img  src={evento.urlDescarga} alt="" />  
        </div>
        <div className="info">
        <h2>{evento.title}</h2>   
        <p>{evento.descripcion}</p>
        </div>
        </div>
      ))}
    </Prioridad>
  )
}

export default Prioridad2