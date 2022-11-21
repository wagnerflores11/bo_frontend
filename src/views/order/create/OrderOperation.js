// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components

import { styled, useTheme } from '@mui/material/styles'

// ** MUI Import
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Backdrop from '@mui/material/Backdrop'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import CircularProgress from '@mui/material/CircularProgress'
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';



const OrderOperation = (grow) => {

  const { grow: checked } = grow

  // ** State
  const [reload, setReload] = useState(false)

  useEffect(() => {
    if (!checked)
      return
    setReload(true)
    setTimeout(() => {
      setReload(false)
    }, 2000)

  }, [checked]);


  return (
    <Grow in={checked} unmountOnExit >
      <Card sx={{ height: '100%', position: 'relative' }}>
        <CardHeader
          title='Operação'
          subheader='Selecione uma opção'

        />

        <Grid sx={{
          maxHeight: 325,
          overflow: 'auto',
          mb: 2,
          mx: 1
        }}>

          <Paper elevation={1}
            sx={{
              borderRadius: '5px',
              m: 4,
              '&:hover': {
                backgroundColor: '#a4e2f769',
              },
            }}
          >
            <FormGroup row sx={{ p: 2 }}>
              <RadioGroup row name='simple-radio' aria-label='simple-radio'>
                <FormControlLabel value='checked' control={<Radio />} label={
                  <span ><b>Dignissimos ducimus qui blanditiis</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
                } />
              </RadioGroup>
            </FormGroup>

          </Paper>
          <Paper elevation={1}
            sx={{
              borderRadius: '5px',
              m: 4,
              '&:hover': {
                backgroundColor: '#a4e2f769',
              },
            }}
          >
            <FormGroup row sx={{ p: 2 }}>
              <RadioGroup row name='simple-radio' aria-label='simple-radio'>
                <FormControlLabel value='checked' control={<Radio />} label={
                  <span ><b>Dignissimos ducimus qui blanditiis</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
                } />
              </RadioGroup>

            </FormGroup>

          </Paper>


        </Grid>

        <Backdrop
          open={reload}
          sx={{
            position: 'absolute',
            color: theme => theme.palette.common.white,
            zIndex: theme => theme.zIndex.mobileStepper - 1
          }}
        >
          <CircularProgress color='inherit' />
        </Backdrop>

      </Card >
    </Grow >
  )
}

export default OrderOperation
