import React from 'react';
import styled from 'styled-components';



const ContNav = styled.div`
width: 100%;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
height: 100%;
width: 25%;
img{
  height: 90%;
}
h2{
  font-size: 30px;
  font-weight: 700;
  width: 60%;
}
`


const NavEldorado = () => {
  return (
    <ContNav>
      <Logo>
      <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/272980695_317470353756784_9144460849393110715_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nh45Pi4TlaYAX9ZT-D5&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfB293bQhl8AAYJppIMHitAw34qJkyKhK1CoLGR-1sal7Q&oe=63D4E93F" alt="" />
      <h2>Agenda Municipal</h2>
      </Logo>
      
    </ContNav>
  )
}

export default NavEldorado