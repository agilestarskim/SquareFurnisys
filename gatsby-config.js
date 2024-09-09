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
            description: "확장 가능한 워크스테이션"
          },
          {
            title: "SPACE",
            description: "공간 절약형 워크스테이션"
          },
          {
            title: "NUEVO",
            description: "새로운 디자인의 워크스테이션"
          },
          {
            title: "CUBE",
            description: "큐브 형태의 워크스테이션"
          }
        ]
      },
      {        
        title: "Executive",
        description: "고급스러운 임원용 책상으로 품격을 더하세요",
        series: [
          {
            title: "BISTRO",
            description: "프리미엄한 디자인의 임원용 책상"
          },
          {
            title: "GRADE 1",
            description: "고급스러운 임원용 책상"
          },
          {
            title: "GRAVITY",
            description: "고전적인 임원용 책상"
          },
          {
            title: "DUKE",
            description: "품격 있는 임원용 책상"
          },
          {
            title: "TOPLINE",
            description: "최고급 임원용 책상"
          }
        ]
      },
      {        
        title: "Partition",
        description: "프라이버시를 지켜주는 견고한 파티션",
        series: [
          {
            title: "SCREEN",
            description: "견고한 파티션"
          },
          {
            title: "30T 32T PARTITION",
            description: "세련된 파티션"
          },
          {
            title: "45T PARTITION",
            description: "파도 모양 파티션"
          },
          {
            title: "65T PARTITION",
            description: "지그재그 모양 파티션"
          },
          {
            title: "66T PARTITION",
            description: "지그재그 모양 파티션"
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
            description: "회의용 테이블"
          },
          {
            title: "SR6 TABLE",
            description: "회의용 테이블"
          },
          {
            title: "ER2 TABLE",
            description: "식당용 테이블"
          },
          {
            title: "COMBINATION",
            description: "교육용 테이블"
          },
          {
            title: "KITCHEN",
            description: "교육용 테이블"
          },
          {
            title: "FOLDING TABLE",
            description: "접이식 테이블"
          }
        ]
      }
    ],
    services: [
      {
        image: "catalog.png",
        title: "Catalog",
        description: "스퀘어 퍼니시스의 제품 카탈로그를 확인하세요",
        buttonText: "다운로드"
      },
      {
        image: "showroom.png",
        title: "Showroom",
        description: "스퀘어 퍼니시스의 가구를 3D로 만나보세요",
        buttonText: "구경하기"
      },
      {
        image: "portfolio.png",
        title: "Portfolio",
        description: "스퀘어 퍼니시스의 프로젝트 사례를 살펴보세요",
        buttonText: "구경하기"
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};