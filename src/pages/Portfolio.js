import * as React from "react"
import Layout from "../components/Layout"
import { Container } from 'react-bootstrap'; // Container를 named import로 변경

export default function Portfolio() {
  return (
      <Layout>
          <Container>
            <p>Portfolio</p>
          </Container>
      </Layout>
  )
}