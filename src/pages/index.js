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
    <meta name="description" content="스퀘어 퍼니시스는 사무용 가구를 제작하고 설계합니다. 책상, 선반, 의자, 파티션 등 다양한 제품이 준비되어있습니다. 가구 배치 컨설팅 서비스를 제공합니다. 다양한 포트폴리오와 3D 쇼룸을 확인해보세요." />
  </>
)