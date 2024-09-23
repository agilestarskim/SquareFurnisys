import * as React from "react"
import { Container } from 'react-bootstrap'
import Header from './Header'
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Container fluid className="p-0">
      <Header/>
        <div>{children}</div>
      <Footer/>
    </Container>
  )
}

export default Layout