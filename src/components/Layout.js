import * as React from "react"
import Header from './Header'
import { Container } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Header/>
      {children}
    </Container>
  )
}