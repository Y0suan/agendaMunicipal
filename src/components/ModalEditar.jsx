import React from 'react'
import {Modal,Stack,Form,Button,Card} from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';


//icon
import { BiUserPin } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';


const Evento = styled.div`
.per{
  background-color: black;
}
`



const Img = styled.img`
width: 100%;
`


function ModalEditar({
    isModalEditar , 
    setIsModalEditar,
    actualizarEstadoEventos,
    eventoEditar,
    setEventoEditar,
}){



    function editarEventoModal(){

        //cerrar modal 
        setEventoEditar(null);
        actualizarEstadoEventos();
        setIsModalEditar(false);
    }


    
       
       
    
    const[eventoEstado,setEventoEstado]=React.useState({...eventoEditar});


 


    return( 
    <Evento>
        <Modal show={isModalEditar} onHide={()=>{
          setIsModalEditar(false);
          setEventoEditar(null);
        }} >
            <Modal.Header>
                <Img src={eventoEstado?.urlDescarga} ></Img>
            </Modal.Header>
            <Modal.Body className='info' >
              <h4>{eventoEstado?.title}</h4>
              <p>{eventoEstado?.start}</p>
              <p>{eventoEditar?.descripcion}</p>
              <ListGroup variant="flush">
                <ListGroup.Item> <BiUserPin/> Encargado: {eventoEstado?.encargado}</ListGroup.Item>
                <ListGroup.Item>Categoria: {eventoEstado?.categoria}</ListGroup.Item>
                <ListGroup.Item>Contacto: {eventoEstado?.contacto}</ListGroup.Item>
                <ListGroup.Item>Ubicación: {eventoEstado?.ubicación}</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button>
                Añadir evento a tu calendario
              </Button>
              <Button>
                <BsCalendarWeek></BsCalendarWeek>
              </Button>
              
            </Modal.Footer>
        </Modal> 
      </Evento>
    )
}

export default ModalEditar