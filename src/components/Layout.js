import * as React from "react"
import Header from './Header'
import { Container } from 'react-bootstrap'
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <Container fluid className="p-0">
      <Header/>
      {children}
      <Footer/>
    </Container>
  )
}