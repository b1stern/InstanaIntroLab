module.exports = {
  siteMetadata: {
    title: "Introduction to Instana",
    description: "This lab provides an introduction to Instana's observability capabilities",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/b1stern/InstanaIntroLab',
          subDirectory: '/',
          branch: 'master'
        },
      },      
    }
  ],
  pathPrefix: "/InstanaIntroLab"
};
