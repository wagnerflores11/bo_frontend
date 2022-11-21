// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow';


const OrderDestinations = (grow) => {
  const { grow: checked } = grow

  return (
    <Grow in={checked} unmountOnExit >
      <Card sx={{ height: '100%' }}>
        <CardHeader
          title='Destinos'
        />

        <Grid sx={{
          maxHeight: 325,
          overflow: 'auto',
          mb: 2,
          mx: 1
        }}>

          <Alert sx={{ mx: 4, mb: 4 }} severity='info'>Preencha os campos acima!</Alert>

        </Grid>

      </Card >
    </Grow >
  )
}

export default OrderDestinations
