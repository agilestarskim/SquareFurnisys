import * as React from "react"
import { Container } from 'react-bootstrap'
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Products from "../components/home/Products"
import DesignConsulting from "../components/home/DesignConsulting"
import SquareServices from "../components/home/SquareServices"

export default function Home() {
  return (
      <Layout>
          <Container>
            <div className="mb-5"><Banner/></div>
            <div className="mb-5"><Products/></div>
            <div className="mb-5 "><DesignConsulting/></div>
            <div className="mb-5"><SquareServices/></div>
          </Container>
      </Layout>
  )
}
