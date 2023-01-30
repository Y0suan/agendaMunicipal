import React from 'react'
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';


//finciones
import getAll from '../function/getAll';




const Panel = styled.div`
width: 100%;
height: 100vh;
margin-bottom: 5vh;
display: flex;
transition: 3s;
padding: 20px;
overflow: hidden;

.logo{
    z-index: -1;
    position: absolute;
    right: 10px;
    width: 25%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
    }
    img{
        width: 100px;
    }
}
.cart1{
    max-width: 25%;
    height: 70%;
    background-color: grey;
    border-radius: 5px;
    overflow: hidden;
    img{
        object-fit: cover;
        width:100%;
        height:100%;
    }
    .info{
    position: absolute;
    right: 100%;
    height: 100%;
        div{
            width: 50%;
            height: 100%;
        }
    .datos{
        display: flex;
        h3{
            font-size: 2.5rem;
            font-weight: 900;

        }
        p{
            font-size: 1.5rem;
        }
    }
    .descripcion{
       font-size: 120%;
       text-align: justify;
    }
    }
}
.cart1:hover{
    max-width: 48%;
    transition: 3s; 
    .info{
        
        transition: 4s;
        width: 50%;
        height: 27%;
        position: absolute;
        top: 90%;
        right: 30%;

        display: flex;
        padding: 5px;
        div{
            width: 50%;
            height: 100%;
        }
    } 
}
.cart2{
    max-width: 24%;
    height: 70%;
    background-color: grey;
    border-radius: 5px;
    margin-left: 20px;
    img{
        object-fit: cover;
        width:100%;
        height:100%;
        border-radius: 5px;

    }
    .info{
    position: absolute;
    right: 100%;
        div{
            width: 50%;
            height: 100%;
        }
    .datos{
        display: flex;
        h3{
            font-size: 2.5rem;
            font-weight: 900;
        }
        p{
            font-size: 1.5rem;
        }
    }
    .descripcion{
       font-size: 120%;
       text-align: justify;
    }
    }
}
.cart2:hover{
    transition: 3s;
    max-width: 48%;
    background-color: grey;
    border-radius: 15px;
    margin-left: 20px;
    .info{
        transition: 4s;
        width: 50%;
        height: 27%;
        position: absolute;
        top: 90%;
        right: 30%;

        display: flex;
        padding: 5px;
        div{
            width: 50%;
            height: 100%;
        }
    } 
}
`

const Panel2 = () => {
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
   let mostar2 = eventos.filter(evento => evento.prioridad == "2");
   let mostar3 = eventos.filter(evento => evento.prioridad == "3");

   




  return (
    <Panel>
         {mostar && mostar.map((evento,index)=>(
        <div className="cart1">
            <img src={evento.urlDescarga} alt="" />
            <div className="info">
                <div className='datos'>
                    <div>
                        <h3>{evento.title}</h3>
                        <p>{evento.start}</p>
                    </div>
                    <div>
                        <p>{evento.encargado}</p>
                        <p>{evento.categoria}</p> 
                        <p>{evento.contacto}</p>
                        <p>{evento.ubicación}</p> 
                    </div>
                </div>
                <div className='descripcion'>
                 <p>{evento.descripcion}</p>  
                </div>
            </div>
            <div className="color"></div>
        </div>
              ))}
{mostar2 && mostar2.map((evento,index)=>(
        <div className="cart2">
            <img src={evento.urlDescarga} alt="" />
        <div className="info">
                <div className='datos'>
                    <div>
                        <h3>{evento.title}</h3>
                        <p>{evento.start}</p>
                    </div>
                    <div>
                        <p>{evento.encargado}</p>
                        <p>{evento.categoria}</p> 
                        <p>{evento.contacto}</p>
                        <p>{evento.ubicación}</p>
                    </div>
                </div>
                <div>
                   {evento.descripcion}
                </div>
            </div>
        </div>
 ))}

 {mostar3 && mostar3.map((evento,index)=>(
        <div className="cart2">
            <img src={evento.urlDescarga} alt="" />
        <div className="info">
                <div className='datos'>
                    <div>
                        <h3>{evento.title}</h3>
                        <p>{evento.start}</p>
                    </div>
                    <div>
                        <p>{evento.encargado}</p>
                        <p>{evento.categoria}</p> 
                        <p>{evento.contacto}</p>
                        <p>{evento.ubicación}</p>
                    </div>
                </div>
                <div>
                   {evento.descripcion}
                </div>
            </div>
        </div>
 ))}

    </Panel>
  )
}

export default Panel2