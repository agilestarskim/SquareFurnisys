const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          products {
            title
            series {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error("GraphQL 쿼리에서 오류가 발생했습니다.");
  }

  result.data.site.siteMetadata.products.forEach(product => {
    product.series.forEach(series => {
      createPage({
        path: `/product/${series.title}`,
        component: path.resolve(`./src/pages/product/Detail.js`),
        context: {
            relativeDirectory: `${product.title}/${series.title}`,
            productTitle: product.title,
            seriesTitle: series.title,            
        },
      });
    });
  });
};