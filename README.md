# Gatsby4 Starter
## Description
### Updates
 - remove layout.scss
 - add dark mode
 - jest, testing-library
 - mui-link overlay on gatsby-link
## Use
### Quick Setup
gatsby new xxxx
modify base files
add amplify

### proj customization
#### package.json

<pre><code>
name, version, description
 "name": "wdtsite3",
 "version": "4.0.0",
 "private": true,
 "description": "wdtsite",
</pre></code>

#### gatsby-config.js manifest

<pre>
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
</pre>

 - src\components\header, pagetopper
 - src\themes\light.ts and dark.ts

### Base files
- package.json
- gatsby-config.js - fix siteMetadata and manifest
- header.js (search gatsby4 starter for title), menus
- layout.js - footer
- gatsby-browser.js - change when adding api or storage config

### Amplify notes
- change default build to
- add node v14 requirement
- amplify domain
- identity pool fix


