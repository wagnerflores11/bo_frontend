// ** React Imports
import { useState } from 'react'


// ** MUI Import
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DatePicker from '@mui/lab/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import fr from 'date-fns/locale/fr'
import { useTranslation } from 'react-i18next'
import Grow from '@mui/material/Grow';


const langObj = { fr }

const OrderSchedules = (grow) => {
  const { grow: checked } = grow


  // ** State
  const [basicPicker, setBasicPicker] = useState(new Date())

  // ** Hooks
  const { i18n } = useTranslation()

  return (
    <Grow in={checked} unmountOnExit >
      <Card>
        <CardHeader sx={{ pb: 0 }}
          title='Horário'
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: 4, mb: 4 }} className='demo-space-x'>
          <Grid container >
            <Grid item xs={4}>
              <Typography variant='body2'>Restrição Horária</Typography>
            </Grid>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>

            <TimePicker
              label="Restrição de:"
              value={basicPicker}
              onChange={newValue => setBasicPicker(newValue)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>

            <TimePicker
              label="até"
              value={basicPicker}
              onChange={newValue => setBasicPicker(newValue)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: 4, mb: 4 }} className='demo-space-x'>
          <Grid container >
            <Grid item xs={4}>
              <Typography variant='body2'>Dia Pedido
                e Horário Pedido </Typography>
            </Grid>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Dia'
              value={basicPicker}
              onChange={newValue => setBasicPicker(newValue)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>

            <TimePicker
              label="Hora"
              value={basicPicker}
              onChange={newValue => setBasicPicker(newValue)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>



      </Card >
    </Grow>
  )
}

export default OrderSchedules
