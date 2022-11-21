// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow';



const OrderResidues = (grow) => {

  const { grow: checked } = grow


  return (
    <Grow in={checked} unmountOnExit >
      <Card sx={{ height: '100%' }}>
        <CardHeader
          title='Resíduos'
          subheader='Selecione as opções abaixo'

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
              <FormControlLabel sx={{ width: '100%', m: 0 }} label={
                <span ><b>Madeira</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
              } control={<Checkbox defaultChecked name='basic-checked' />} />
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
              <FormControlLabel sx={{ width: '100%', m: 0 }} label={
                <span ><b>Madeira</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
              } control={<Checkbox defaultChecked name='basic-checked' />} />
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
              <FormControlLabel sx={{ width: '100%', m: 0 }} label={
                <span ><b>Madeira</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
              } control={<Checkbox defaultChecked name='basic-checked' />} />
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
              <FormControlLabel sx={{ width: '100%', m: 0 }} label={
                <span ><b>Madeira</b><div>Lorem ipsum dolor sit amet</div> <div>Lorem ipsum dolo</div></span>
              } control={<Checkbox defaultChecked name='basic-checked' />} />
            </FormGroup>

          </Paper>


        </Grid>

      </Card >
    </Grow >
  )
}

export default OrderResidues
