/* eslint-disable-next-line import/no-extraneous-dependencies */
require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    author: '',
    description: '',
    title: '',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'static/gatsby-icon.png',
      },
    },
  ],
};
