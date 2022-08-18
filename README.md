# Gatsby4 Starter
## Description
### Updates
 - add pwa offline
 - remove layout.scss
 - add dark mode
 - jest, testing-library
 - mui-link overlay on gatsby-link
 -
## Use
### Quick Setup
gatsby new xxxx
modify base files
add amplify

### proj customization
#### package.json
name, version, description
<pre><code>
 "name": "wdtsite3",
 "version": "4.0.0",
 "private": true,
 "description": "wdtsite",
</pre></code>

#### gatsby-config.js
fix site data and manifest
<pre>
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    description: `Werner Digital Technology, Inc`,
    title: "WDT",
    author: "wdt",
  },

  plugins: [
    ...
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Werner Digital Technology, Inc`,
        short_name: `WDT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/wernerdigital-hosted.png",
    },
  ]
}
</pre>

- src\themes\light.ts and dark.ts
- pagetopper
- header.js (search gatsby4 starter for title), menus
- layout.js - footer
- gatsby-browser.js - change when adding api or storage config

### Amplify notes
- change default build to
- add node v14 requirement
- amplify domain
- identity pool fix


