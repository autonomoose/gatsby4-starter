import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface ColorCardProps {
  descr: string,
}
const ColorCard = (props: ColorCardProps) => {
  return (
    <>
      <Typography component='h2' variant='h5'>
        {props.descr} h5
      </Typography>

      <Card><Box sx={{bgcolor: 'hlight.main'}}>
        <Typography variant='h6'>
          highlight h6
        </Typography>
      </Box></Card><span>Card Text</span>

      <Card className="grad">
        <Typography variant='h6'>
          grad h6
        </Typography>
      </Card><span>Card Text</span>

      <Card><Box sx={{bgcolor: 'hlight2.main'}}>
        <Typography variant='subtitle2'>
          highlight2 subtitle2
        </Typography>
      </Box></Card><span>Card Text</span>

      <Card className="grad2">
        <Typography variant='subtitle2'>
          grad subtitle2
        </Typography>
      </Card><span>Card Text</span>

      <Card><Box sx={{bgcolor: 'site.main'}}>
        <Typography variant='caption'>
          site caption
        </Typography>
      </Box></Card><span>Card Text</span>

      <Card>
        <Typography variant='caption'>
          grad caption
        </Typography>
      </Card><span>Card Text</span>

      <Card><Box sx={{bgcolor: 'site2.main'}}>
        Card site2
      </Box></Card><span>Card Text</span>

      <Card className="gradsite2">
        Card site2 grad
      </Card><span>Card Text</span>

      <Card><Box sx={{bgcolor: 'background.default'}}>
        Card bg
      </Box></Card><span>Card Text</span>

    </>
)}

interface ButtonVarProps {
  color: string,
}
const ButtonVar = (props: ButtonVarProps) => {
  return (
    <Button color={props.color} size='small' variant='outlined'>{props.color}</Button>
)}
const ColorPage = () => {
  return (
    <>
        <Paper>
        <Box py={3} display="flex" alignItems="flex-start" justifyContent="space-evenly">
          <Box px={2}>
            <Typography variant='h4' component='h1'>
              Site color check h4
            </Typography>
            (paper)
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

        </Box></Paper>

        <Box py={1} display="flex" alignItems="flex-start" justifyContent="space-evenly">
          <Box px={5} sx={{bgcolor: 'background.default'}}>
            background
          </Box>
          <Box px={5} sx={{bgcolor: 'background.paper'}}>
            paper background
          </Box>
        </Box>

        <Box>
          <Box px={3} display='flex' flexWrap='wrap'>

            <Card sx={{margin: '0.5em', padding: '1px'}}><Box display='flex'
              flexDirection='column' rowGap={7}>
              <ButtonVar color='primary' />
              <ButtonVar color='secondary' />
              <ButtonVar color='success' />
              <ButtonVar color='info' />
              <ButtonVar color='warning' />
              <ButtonVar color='error' />
            </Box></Card>

            <Card sx={{margin: '0.5em', padding: '1px'}}>
              <ColorCard descr='Plain Card'/>
            </Card>

            <Card className="grad" sx={{margin: '0.5em', padding: '1px'}}>
              <ColorCard descr='Grad'/>
            </Card>

            <Card className="grad2" sx={{margin: '0.5em', padding: '1px'}}>
              <ColorCard descr='Grad2'/>
            </Card>

            <Card className="gradsite2" sx={{margin: '0.5em', padding: '1px'}}>
              <ColorCard descr='Gradsite2'/>
            </Card>

          </Box>

        </Box>
      </>
  )
}

export default ColorPage
