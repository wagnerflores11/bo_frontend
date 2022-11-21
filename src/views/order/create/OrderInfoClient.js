// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icons Imports
import Check from 'mdi-material-ui/Check'
import Circle from 'mdi-material-ui/Circle'
import StarOutline from 'mdi-material-ui/StarOutline'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

const data =
{
    id: 1,
    fullName: 'Galen Slixby',
    company: 'Yotz PVT LTD',
    role: 'editor',
    username: 'gslixby0',
    country: 'El Salvador',
    contact: '(479) 232-9151',
    email: 'gslixby0@abc.net.au',
    currentPlan: 'enterprise',
    status: 'inactive',
    avatar: '',
    avatarColor: 'primary'
}


const roleColors = {
    admin: 'error',
    editor: 'info',
    author: 'warning',
    maintainer: 'success',
    subscriber: 'primary'
}

const statusColors = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary'
}

const OrderInfoClient = () => {

    return (
        <Card >
            <CardContent sx={{ paddingBottom: '10px' }}>

                <CustomChip
                    skin='light'
                    size='small'
                    color='primary'
                    label='Informação do Cliente'
                    sx={{
                        fontSize: '0.75rem', borderRadius: '4px',
                    }}
                />
            </CardContent>
            <CardContent>
                <Box sx={{ pt: 1, pb: 1 }}>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Username:
                        </Typography>
                        <Typography variant='body'>@{data.username}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Billing Email:
                        </Typography>
                        <Typography variant='body'>{data.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Status:
                        </Typography>
                        <CustomChip
                            skin='light'
                            size='small'
                            label={data.status}
                            color={statusColors[data.status]}
                            sx={{
                                height: 20,
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                borderRadius: '5px',
                                textTransform: 'capitalize'
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Role:</Typography>
                        <Typography variant='body' sx={{ textTransform: 'capitalize' }}>
                            {data.role}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Tax ID:</Typography>
                        <Typography variant='body'>Tax-8894</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Contact:</Typography>
                        <Typography variant='body'>+1 {data.contact}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Language:</Typography>
                        <Typography variant='body'>English</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Country:</Typography>
                        <Typography variant='body'>{data.country}</Typography>
                    </Box>
                </Box>
            </CardContent>


            <CardContent sx={{ paddingBottom: '10px' }}>

                <CustomChip
                    skin='light'
                    size='small'
                    color='secondary'
                    label='Informação do LTC'
                    sx={{
                        fontSize: '0.75rem', borderRadius: '4px'
                    }}
                />
            </CardContent>
            <CardContent>
                <Box sx={{ pt: 1, pb: 1 }}>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Username:
                        </Typography>
                        <Typography variant='body'>@{data.username}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Billing Email:
                        </Typography>
                        <Typography variant='body'>{data.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant='subtitle' sx={{ mr: 2, color: 'text.primary', fontWeight: 'bold' }}>
                            Status:
                        </Typography>
                        <CustomChip
                            skin='light'
                            size='small'
                            label={data.status}
                            color={statusColors[data.status]}
                            sx={{
                                height: 20,
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                borderRadius: '5px',
                                textTransform: 'capitalize'
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Role:</Typography>
                        <Typography variant='body' sx={{ textTransform: 'capitalize' }}>
                            {data.role}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Tax ID:</Typography>
                        <Typography variant='body'>Tax-8894</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Contact:</Typography>
                        <Typography variant='body'>+1 {data.contact}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Language:</Typography>
                        <Typography variant='body'>English</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem', fontWeight: 'bold' }}>Country:</Typography>
                        <Typography variant='body'>{data.country}</Typography>
                    </Box>
                </Box>
            </CardContent>

        </Card >

    )

}

export default OrderInfoClient