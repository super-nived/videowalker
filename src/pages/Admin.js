import React from 'react'
import Nav from '../componants/navbar/Nav'
import Uploading from '../admin/uploading/Uploading'
import Footer from '../componants/footer/Footer'

function Admin() {
  return (
    <div>
        <Nav></Nav>
        <Uploading></Uploading>
        <Footer></Footer>
    </div>
  )
}

export default Admin