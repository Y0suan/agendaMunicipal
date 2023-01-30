import './App.css'
import styled from 'styled-components';

import NavEldorado from './components/NavEldorado'
import Panel1 from './views/Panel1';
import { Eventos } from './views/Eventos';
import Panel2 from './views/Panel2';





const Home = styled.div`
width: 100%;
height: auto;
`

function App() {
  return (
    <Home className="App">
      
      <NavEldorado></NavEldorado>
      <Panel2></Panel2>
      {/* <Panel1></Panel1> */}
      <Eventos></Eventos>
    </Home>
  )
}

export default App
