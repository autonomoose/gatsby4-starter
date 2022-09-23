# Gatsby4 Starter
## Description
This Gatsby v4 starter is intended to work with AWS Amplify
to quickly build and host web applications.  The default
branch is the minimal build, feature branches are based
on the minimal build with specific features added.

- main - default branch with minimal configuration
- auth-cognito - provides signon and protected routes for
any non-excluded page along with basic signout, and pwd
reset.
- auth-tenant (coming soon) - extends auth-cognito branch
with graphql, API gateway, and dynamodb support
to allow user lookup, as well as setting a tenant
attribute in Cognito to securely support restricting
data access by tenant in API (REST and GraphQL) calls.

### Updates
 - add AWS amplify auth Cognito branch
 - add pwa offline
 - dark mode
 - jest, testing-library
 - mui-link overlay on gatsby-link

## Use
The starter can be used directly for the most basic setup.
To use extended features directly from the starter, clone
it locally and switch to the feature branch you would like
to start with.

### Quick Setup
Setup using this starter using three main steps:
- gatsby new xxxx
- customize base files
- add amplify

### proj customization
#### package.json
name, version, description
<pre><code>
 "name": "sitename",
 "version": "4.0.0",
 "private": true,
 "description": "sitename general description",
</pre></code>

#### gatsby-config.js
fix site data and manifest
<pre>
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    description: `your basic description`,
    title: "titlename",
    author: "me",
  },

  plugins: [
    ...
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `long name for the app`,
        short_name: `nickname`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
    },
  ]
}
</pre>

- src\themes\light.ts and dark.ts
- header.js (search gatsby4 starter for title), menus
- layout.js - footer
- gatsby-browser.js - change when adding api or storage config

### Amplify notes
- add node v14 requirement
- amplify domain
- identity pool fix


