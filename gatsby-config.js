module.exports = {
  siteMetadata: {
    title: "Think Lab 1189:  Observability of a hybrid application using Instana",
    description: "Think Lab to learn about Instana's observability capabilities in the context of a hybrid application",
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
            'https://github.com/b1stern/InstanaMiddlewareLab',
          subDirectory: '/',
          branch: 'master'
        },
      },      
    }
  ],
  pathPrefix: "/InstanaMiddlewareLab"
};
