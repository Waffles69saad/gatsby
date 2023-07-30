require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.mphc10x06s2d,
        accessToken: process.env.1YOeC02FSrYcHvm85ApvFICOSEEFFpXcD3IAXWIFIYI,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
};
