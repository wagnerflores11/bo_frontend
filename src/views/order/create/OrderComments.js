// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Grow from '@mui/material/Grow';


const OrderComments = (grow) => {

  const { grow: checked } = grow

  return (
    <Grow in={checked} unmountOnExit >
      <Card>
        <CardHeader
          title='Comentários'
        />

        <Grid sx={{ display: 'flex', flexWrap: 'wrap', mx: 4, mb: 4 }} >

          <TextField rows={9} fullWidth multiline label='Comentário' id='textarea-outlined-static' />

        </Grid>

      </Card >
    </Grow >
  )
}

export default OrderComments
