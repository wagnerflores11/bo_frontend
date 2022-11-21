// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'


// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import TableServerSide from 'src/views/table/data-grid/TableServerSide'

import { top100Films } from 'src/@fake-db/autocomplete'



const OrderList = () => {

    return (
        <Grid container spacing={6}>
            <PageHeader
                title={
                    <Typography variant='h5'>
                        Consulta de Orders
                    </Typography>
                }

            />
            <Grid item xs={12} md={6}>
                <Card sx={{ p: 5 }}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={5}>
                            <Autocomplete
                                fullWidth
                                options={top100Films}
                                id='autocomplete-outlined'
                                getOptionLabel={option => option.title}
                                renderInput={params => <TextField {...params} label='Conta' />}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Autocomplete
                                fullWidth
                                options={top100Films}
                                id='autocomplete-outlined'
                                getOptionLabel={option => option.title}
                                renderInput={params => <TextField {...params} label='Local' />}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Button fullWidth variant='contained' endIcon={<Magnify />}>
                                Filtrar
                            </Button>
                        </Grid>

                    </Grid>
                </Card >
            </Grid>

            <Grid item xs={12}>
                <TableServerSide />
            </Grid>
        </Grid>
    )

}
export default OrderList
