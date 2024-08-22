import * as React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Products from "../components/Products"
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
      <Layout>
        <Container>
          <Banner/>
          <Products/>
        </Container>
      </Layout>
  )
}
