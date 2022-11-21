// ** Next Import
import Link from 'next/link'

// ** MUI Import
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Icons Imports
import SendOutline from 'mdi-material-ui/SendOutline'

// ** Third Party Components
import toast from 'react-hot-toast'


const OrderAction = () => {

    const handleClick = () => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    resolve('foo')
                } else {
                    reject('fox')
                }
            }, 1000)
        })

        return toast.promise(myPromise, {
            loading: 'Loading',
            success: 'Publicado com Sucesso!',
            error: 'Erro na Validação',

        })
    }

    return (

        <Card sx={{ mb: 4 }} >
            <CardContent>
                <Link href='/apps/invoice/preview/4987' passHref>
                    <Button fullWidth component='a' sx={{ mb: 3.5 }} variant='outlined'>
                        Cancelar
                    </Button>
                </Link>
                <Button fullWidth variant='contained' color='secondary' sx={{ mb: 3.5 }} onClick={() => toast.success('Guardado com Sucesso!')}>
                    Guardar
                </Button>
                <Button fullWidth variant='contained' sx={{ mb: 3.5 }} startIcon={<SendOutline />} onClick={handleClick}>
                    Publicar
                </Button>
            </CardContent>
        </Card >
    )
}

export default OrderAction
