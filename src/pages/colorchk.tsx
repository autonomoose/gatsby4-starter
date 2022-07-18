import React from 'react'
import Layout from '../components/layout'
import Box from '@mui/material/Box'

const ColorPage = () => {

  return (
      <Layout>
        <Box py={1} display="flex" alignItems="flex-start" justifyContent="space-evenly"
          sx={{bgcolor: 'background.paper', width: '100%'}}
        >
          <Box px={2} sx={{bgcolor: 'site.main'}}>
            <h1>Site color check</h1>
          </Box>

          <Box sx={{bgcolor: '#ffffff', width: '40%'}}>
            <Box pl={1} sx={{bgcolor: 'site.main'}}>
              site
            </Box>

            <Box pl={1} sx={{bgcolor: 'site2.main'}}>
              site2
            </Box>

            <Box pl={1} sx={{bgcolor: 'hlight.main'}}>
              highlight
            </Box>
            <Box pl={1} sx={{bgcolor: 'hlight2.main'}}>
              highlight2
            </Box>
          </Box>

        </Box>
        <Box mt={4} py={1} display="flex" alignItems="flex-start" justifyContent="space-evenly"
          sx={{bgcolor: '#ffffff', width: '100%'}}
        >
          <Box px={2} sx={{bgcolor: 'background.default'}}>
            background
          </Box>
          <Box px={2} sx={{bgcolor: 'background.paper'}}>
            paper background
          </Box>
        </Box>

        <Box display='flex' justifyContent='center'>
          <Box my={3}
            sx={{width:'50%', bgcolor: 'background.default'}}
          >
            <Box sx={{bgcolor: 'site.main'}} display='flex' justifyContent='space-between'>
              <span>site</span>
              <span>options</span>
            </Box>
            <h2>Title</h2>
            <span>Text</span>
            <Box pl={1} sx={{bgcolor: 'hlight.main'}}>
              highlight
            </Box>
            <span>Text</span>
            <Box mb={3} pl={1} sx={{bgcolor: 'hlight2.main'}}>
              highlight2
            </Box>
            <span>Text</span>

            <Box sx={{bgcolor: 'background.paper', minHeight:'150px'}}>
              <span>Text</span>
              <Box pl={1} sx={{bgcolor: 'hlight.main'}}>
                highlight
              </Box>
              <span>Text</span>
              <Box pl={1} sx={{bgcolor: 'hlight2.main'}}>
                highlight2
              </Box>


            </Box>
          </Box>
        </Box>
      </Layout>
  )
}

export default ColorPage
