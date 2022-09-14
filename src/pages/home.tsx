import React from 'react'
import Box from '@mui/material/Box'
import Seo from '../components/seo'

const HomePage = () => {

  return (
      <>
      <Seo title="WDT Gatsby Home" description="Gatsby4 starter signed-in home" />
        <Box display="flex" alignItems="flex-start">
          <Box my={6} ml={1}>
          <h1 id="site-name">Starter Home</h1>

          </Box>
        </Box>
      </>
  )
}

export default HomePage
