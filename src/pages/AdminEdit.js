import React from 'react'
import Nav from '../componants/navbar/Nav'
import Uploading from '../admin/uploading/Uploading'
import Footer from '../componants/footer/Footer'
import Crud from '../admin/crud/Crud'

function AdminEdit() {
  return (
    <div>
        <Nav></Nav>
        <Crud></Crud>
        <Footer></Footer>
    </div>
  )
}

export default AdminEdit