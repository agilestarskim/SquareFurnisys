import * as React from "react"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Products from "../components/home/Products"
import DesignConsulting from "../components/home/DesignConsulting"
import SquareServices from "../components/home/SquareServices"

export default function Home() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <Layout>        
          <Banner/>
          <Products/>
          <DesignConsulting/>
          <SquareServices/>
          <button className="scroll-to-top" onClick={handleScrollToTop}>▲</button>        
      </Layout>
  )
}

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스</title>
    <meta name="description" content="스퀘어 퍼니시스" />
  </>
)