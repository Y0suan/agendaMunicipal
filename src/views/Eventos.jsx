import React from 'react';
import styled from 'styled-components';
import getAll from '../function/getAll';

//booststrap
import Button from 'react-bootstrap/Button';
import { Card , Form , Stack} from 'react-bootstrap';
//calendar button
import filtrarDatos from '../function/filtrarDatos';


//Modal
import ModalEditar from '../components/ModalEditar';



const Event = styled.div`
width: 100%;
height: auto;
margin-top: 10vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.buscador{
  width: 90%;
  height: 10vh;
  .input{
    height:30px;
}
}

h2{
  font-size: 43px;
  line-height: 52px;
  font-weight: 700;
  color: #444444;
}
.actividades{
  width: 100%;
  min-height: 60vh;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .cart{
    width: 23%;
    height: 550px;
    transition: 2s;

    box-shadow: 0px 5px 12px 0px #00000050;
    padding: 5px;
    min-width: 300px;
    margin-bottom: 15px;
    .categoria{
      position: absolute;
      top: 0;
      right: 0;
      background-color: white;
      font-size: 15px;
      text-transform: uppercase;
      padding: 5px;
      border-bottom-left-radius: 8px;
    }
   .descripcion{
    max-height: 100px;
    overflow: hidden;
  } 
  }  
}
`

const Horizontal = styled.div`
display: flex;
justify-content: space-evenly;
`



export const Eventos = () => {
const [eventos,setEventos]=React.useState([]);

const [categoria, setCategoria] = React.useState("");

//Modal
const [isModalEditar,setIsModalEditar]=React.useState(false);
const [eventoEditar,setEventoEditar]=React.useState({});


function actualizarEstadoEventos(){
  getAll().then((eventos)=>{
    setEventos(eventos);
  });
 }

 React.useEffect(()=>{
  actualizarEstadoEventos();
 },[]);
 

 async function busquedaFormHandler(e) {
  e.preventDefault();
  const busqueda = e.target.busqueda.value;
  const fecha = e.target.fecha.value;
  const nvosDocus = await filtrarDatos(busqueda,fecha,cat);
  setEventos(nvosDocus);
}





  return (
    <Event>
      {eventoEditar && (
      <ModalEditar
          isModalEditar ={isModalEditar} 
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoEventos={actualizarEstadoEventos}
          eventoEditar={eventoEditar}
          setEventoEditar={setEventoEditar} 
      />
      )}
      

      <h2>Agenda de Eventos</h2>
      <Form className='buscador' onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3 ">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Form.Group controlId="fecha" className="w-75 m-3 ">
            <Form.Control type="date" />
          </Form.Group>
          <Form.Select  id='cat' value={ categoria } onChange={ (event) => setCategoria( event.target.value)}>
            <option >Categorias</option>
            <option value="ambiente">Ambiente</option>
            <option value="carnaval">Carnaval</option>
            <option value="artes">Artes</option>
            <option value="convocatorias">Convocatorias</option>
            <option value="deportesYAireLibre">Deportes y Aire Libre</option>
            <option value="economiaSocial">Economia Social</option>
            <option value="jovenes">Jovenes</option>
            <option value="literatura">Literatura</option>
            <option value="online">Online</option>
            <option value="talleres">Talleres</option>
            <option value="salud">Salud</option>
            <option value="movilidad">Movilidad</option>
            <option value="musica">Musica</option>
            <option value="muestras">Muestras</option>
            <option value="visitas">Visitas Guiadas</option>
            <option value="teatro">Teatro</option>
            <option value="festivales">Festivales</option>
            <option value="ferias">Ferias y Mercados</option>
            <option value="infancias">Infancias</option>
          </Form.Select>
          <Button variant="dark" type="submit">
            Buscar
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const input = document.getElementById("busqueda");
              const fecha = document.getElementById("fecha");
              const cat = document.getElementById("cat");
              input.value = "";
              fecha.value = '';
              cat.value= '';
              actualizarEstadoEventos();
            }}
          >
            Resetear
          </Button>
        </Stack>
      </Form>

<div className="actividades">
  




      {eventos && eventos.map((evento,index)=>(

       <Card className='cart'>
        
       <Card.Img className='img' variant="top" src={evento.urlDescarga} />
       <Card.Body>
         <Card.Title>{evento.title}</Card.Title>
         <Card.Title className='categoria'>
        {evento.categoria}
         </Card.Title>
         <Horizontal>
         <Card.Subtitle className="mb-2 text-muted">{evento.start}</Card.Subtitle>
         <Card.Subtitle className="mb-2 text-muted">{evento.end}</Card.Subtitle>
         </Horizontal>
         <Card.Text 
          className='descripcion'
          >
           {evento.descripcion}
         </Card.Text>
         <div className="d-grid gap-2">
         <Button  size="sm" variant="outline-primary"
              onClick={()=>{
                setEventoEditar({...evento});
                setIsModalEditar(true);
              }}
              >Leer Mas</Button></div>
         </Card.Body>
        </Card>

        ))}


      </div>  
    </Event>
  )
}
