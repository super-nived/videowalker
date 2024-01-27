import React from 'react'
import Nav from '../componants/navbar/Nav';
import Footer from '../componants/footer/Footer';
import TresureDeatils from '../componants/TresureDetail/TresureDeatils';

function TresureDetails() {
  return (
    <div>
        <Nav></Nav>
        <TresureDeatils></TresureDeatils>
        <Footer></Footer>
    </div>
  )
}

export default TresureDetails