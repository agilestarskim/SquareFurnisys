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
        image: "products-workstation.png",
        title: "Workstation",
        description: "최고의 사무용 워크스테이션을 만나보세요"
      },
      {
        image: "products-executive.png",
        title: "Executive Desk",
        description: "고급스러운 임원용 책상으로 품격을 더하세요"
      },
      {
        image: "products-partition.png",
        title: "Partition",
        description: "프라이버시를 지켜주는 견고한 파티션"
      },
      {
        image: "products-storage.png",
        title: "Storage",
        description: "넉넉한 수납 공간으로 사무실을 깔끔하게 정리하세요"
      },
      {
        image: "products-table.png",
        title: "Table",
        description: "다양한 용도로 활용 가능한 다목적 테이블"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homeProducts`,
        path: `${__dirname}/src/images/HOME_PRODUCTS/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workstation`,
        path: `${__dirname}/src/images/WORKSTATION/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};