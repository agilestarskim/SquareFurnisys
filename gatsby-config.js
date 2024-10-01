/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Square Furnisys",
    description: "오피스 가구의 새로운 표준, 스퀘어 퍼니시스",
    author: "Your Name",
    products: [
      {
        title: "Workstation",
        description: "최고의 사무용 워크스테이션을 만나보세요",
        series: [
          {
            title: "EXPAND",
            description: "효율적이고 확장 가능한 워크스테이션"
          },
          {
            title: "SPACE",
            description: "자유로운 배치와 다양한 확장규격이 가능한 워크스테이션"
          },
          {
            title: "NUEVO",
            description: "이동과 확장 배치가 자유로운 워크스테이션"
          },
          {
            title: "CUBE",
            description: "가장 효율적인 공간활용과 효과적인 작업공간"
          }
        ]
      },
      {        
        title: "Executive",
        description: "고급스러운 임원용 책상으로 품격을 더하세요",
        series: [
          {
            title: "BISTRO",
            description: "다양한 공간에 잘 어울리는 중역 가구"
          },
          {
            title: "GRADE 1",
            description: "품격있고 실용적인 새로운 모듈식 임원 세트"
          },
          {
            title: "GRAVITY",
            description: "일하는 중역을 위한 가장 실용적인 중역 시리즈"
          },
          {
            title: "DUKE",
            description: "기본에 충실한 베이직한 중역 듀크 시리즈"
          },
          {
            title: "TOPLINE",
            description: "심플함을 추구하는 전문가의 워크스테이션"
          }
        ]
      },
      {        
        title: "Partition",
        description: "프라이버시를 지켜주는 견고한 파티션",
        series: [
          {
            title: "SCREEN",
            description: "아크릴, 우드 파티션"
          },
          {
            title: "30T 32T PARTITION",
            description: "30mm 파티션"
          },
          {
            title: "45T PARTITION",
            description: "45mm 파티션"
          },
          {
            title: "65T PARTITION",
            description: "65mm 파티션"
          },
          {
            title: "66T PARTITION",
            description: "66mm 파티션"
          }
        ]
      },
      {        
        title: "Storage",
        description: "넉넉한 수납 공간으로 사무실을 깔끔하게 정리하세요",
        series: [
          {
            title: "WOOD CABINET",
            description: "나무로 만든 수납장"
          },
          {
            title: "STEEL CABINET",
            description: "철제로 만든 수납장"
          },
          {
            title: "LOCKER",
            description: "사물함"
          }
        ]
      },
      {        
        title: "Table",
        description: "다양한 용도로 활용 가능한 다목적 테이블",
        series: [
          {
            title: "CTR TABLE",
            description: "단단한 고정력, 안정적인 테이블"
          },
          {
            title: "SR6 TABLE",
            description: "견고한 하부 철재구조의 테이블"
          },
          {
            title: "ER2 TABLE",
            description: "쇼규모 회의실에 적합한 테이블"
          },
          {
            title: "COMBINATION",
            description: "자유로운 조합이 가능한 테이블"
          },
          {
            title: "KITCHEN",
            description: "사각형 테이블"
          },
          {
            title: "FOLDING TABLE",
            description: "교육장과 회의실을 위한 접이식 테이블"
          }
        ]
      }
    ],
    services: [
      {
        image: "catalog.webp",
        title: "CATALOG",
        description: "스퀘어 퍼니시스의 제품 카탈로그를 확인하세요"
      },
      {
        image: "showroom.webp",
        title: "SHOW ROOM",
        description: "스퀘어 퍼니시스의 가구를 3D로 만나보세요"
      },
      {
        image: "portfolio.webp",
        title: "PORTFOLIO",
        description: "스퀘어 퍼니시스의 프로젝트 사례를 살펴보세요"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/images/Products/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service`,
        path: `${__dirname}/src/images/Services/`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `designImages`,
        path: `${__dirname}/src/images/Design`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/images/Portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};