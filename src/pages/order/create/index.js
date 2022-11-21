// ** React Imports
import { useState, useEffect } from 'react'

// ** Axios
import axios from 'axios'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Grow from '@mui/material/Grow';

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import OrderResidues from 'src/views/order/create/OrderResidues'
import OrderOperation from 'src/views/order/create/OrderOperation'
import OrderAction from 'src/views/order/create/OrderAction'
import OrderDestinations from 'src/views/order/create/OrderDestinations'
import OrderServices from 'src/views/order/create/OrderServices'
import OrderSchedules from 'src/views/order/create/OrderSchedules'
import OrderComments from 'src/views/order/create/OrderComments'
import OrderInfoClient from 'src/views/order/create/OrderInfoClient'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option) => option.name + option.nif + option.city,
});


const OrderCreate = () => {

    const [checked, setChecked] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const handleClick = () => {
        setChecked((prev) => !prev);
    };

    const onChangeSearhHandler = async (text) => {
        if (text) {
            setAccounts([])
            const { data: result } = await axios.get(`http://grus.aws.blueotter.pt:8082/account/locals?query=${text}`);
            setAccounts(result)
        }
    }

    return (
        <>
            <Grid >
                <Grid sx={{ mb: 5 }} >
                    <PageHeader
                        title={
                            <Typography variant='h5'>
                                Criação Order
                            </Typography>
                        }
                    />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={9} >
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Card sx={{ p: 5 }}>
                                    <CardHeader sx={{ p: 0, pb: 5 }}
                                        title='Conta e Local'
                                        subheader='Selecione as opções abaixo'
                                    />
                                    <Grid container spacing={4} >
                                        <Grid item xs={12} md={10}>
                                            <Autocomplete
                                                size='big'
                                                fullWidth
                                                options={accounts}
                                                id='autocomplete-outlined'
                                                noOptionsText='Sem resultados...'
                                                getOptionLabel={option => option.name}
                                                filterOptions={filterOptions}
                                                renderOption={(props, option, { inputValue }) => {
                                                    const matches = match(option.name, inputValue);
                                                    const parts = parse(option.name, matches);

                                                    return (
                                                        <Box component="li" {...props} key={option.id} sx={{ '& > img': { mr: 2 } }} >
                                                            <div>
                                                                <div>
                                                                    {parts.map((part, index) => (
                                                                        < span
                                                                            key={part.text + index}
                                                                            style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '14px',
                                                                                background: part.highlight ? '#1ab7ea' : '',
                                                                                color: part.highlight ? '#FFF' : '',
                                                                            }}
                                                                        >
                                                                            {part.text}
                                                                        </span>
                                                                    ))}

                                                                </div>
                                                                <div>
                                                                    {option.city}{option.address ? ' - ' + option.address : ''}
                                                                </div>
                                                                <div >
                                                                    {option.nif}
                                                                </div>
                                                            </div>
                                                        </Box>
                                                    );
                                                }}
                                                onInputChange={(e, value) => onChangeSearhHandler(value)}

                                                renderInput={params => <TextField {...params} label='Pesquisar...' />}
                                            />
                                        </Grid>

                                        <Grid item xs={12} md={2}>
                                            <Button fullWidth sx={{ height: '50px' }} variant='contained' endIcon={<Magnify />} onClick={handleClick}>
                                                Pesquisar
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Card >
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderResidues grow={checked} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderOperation grow={checked} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderDestinations grow={checked} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderServices grow={checked} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderSchedules grow={checked} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OrderComments grow={checked} />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grow in={checked} unmountOnExit >
                            <Box sx={{ position: 'sticky', top: '80px' }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={12}>
                                        <OrderInfoClient />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <OrderAction />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grow>
                    </Grid>
                </Grid>
            </Grid >
        </>

    )
}

export default OrderCreate



