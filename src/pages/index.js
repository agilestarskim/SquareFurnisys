import * as React from "react"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Products from "../components/home/Products"
import DesignConsulting from "../components/home/DesignConsulting"
import SquareServices from "../components/home/SquareServices"

export default function Home() {
  const sectionStyle = {
    marginBottom: '15vh' // 수직 간격을 넉넉하게 설정
  };

  return (
      <Layout>        
          <div style={sectionStyle}><Banner/></div>
          <div style={sectionStyle}><Products/></div>
          <div style={sectionStyle}><DesignConsulting/></div>
          <div style={sectionStyle}><SquareServices/></div>        
      </Layout>
  )
}