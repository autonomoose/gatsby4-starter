import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import Seo from '../components/seo'

const IndexPage = () => {

  return (
      <>
      <Seo title="WDT Gatsby Starter" description="Gatsby4 starter" />
        <Box display="flex" alignItems="flex-start">
          <Box ml={2}>
          <StaticImage alt="" width={160} loading="eager" aria-labelledby="site-name" src="../images/wernerdigital-hosted.png" />
          </Box>
          <Box my={6} ml={1}>
          <h1 id="site-name">Gatsby Starter</h1>

          </Box>
        </Box>
      </>
  )
}

export default IndexPage
