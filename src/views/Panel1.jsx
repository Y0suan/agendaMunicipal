import React from 'react'
import styled from 'styled-components';
import Prioridad1 from '../components/Prioridad1';
import Prioridad2 from '../components/Prioridad2';
import Prioridad3 from '../components/Prioridad3';



const Panel = styled.div`
width: 100%;
height: 85vh;
display: flex;
flex-wrap: wrap;
.colum{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
`


const Panel1 = () => {
  return (
    <Panel>
        <Prioridad1></Prioridad1>
        <div className="colum">
        <Prioridad2></Prioridad2>
        <Prioridad3></Prioridad3>
        </div>
    </Panel>
  )
}

export default Panel1