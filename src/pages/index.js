import * as React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Products from "../components/Products"
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
      <Layout>
          <Container>
            <div className="mb-5"><Banner/></div>
            <div className="mb-5"><Products/></div>
          </Container>
      </Layout>
  )
}
