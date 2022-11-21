// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import Routes from 'mdi-material-ui/Routes'
import DumpTruck from 'mdi-material-ui/DumpTruck'


const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Inbox',
      icon: EmailOutline,
      path: '/apps/email',
      badgeContent: '18',
      badgeColor: 'primary'
    },
    {
      sectionTitle: 'Atividades'
    },
    {
      title: 'Order',
      icon: FileDocumentOutline,
      children: [
        {
          title: 'Criar Order',
          path: '/order/create'
        },
        {
          title: 'Consultas',
          path: '/order'
        }

      ]
    },
    {
      title: 'Clientes',
      icon: AccountOutline,
      children: [
        {
          title: 'Consultas Contas',
          path: '/apps/invoice/list'
        },
        {
          title: 'Consultas Locais',
          path: '/apps/invoice/preview'
        }

      ]
    },
    {
      title: 'Rotas',
      icon: Routes,
      badgeContent: '2',
      badgeColor: 'secondary',
      children: [
        {
          title: 'Criar Rotas',
          path: '/apps/invoice/list'
        },
        {
          title: 'Consultas',
          path: '/apps/invoice/preview'
        }

      ]
    },
    {
      title: 'Gestão Activos',
      icon: DumpTruck,
      children: [
        {
          title: 'Gestão de Contentores',
          path: '/apps/invoice/list'
        },
        {
          title: 'Gestão de Veiculos',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Gestão Motorista',
          path: '/apps/invoice/preview'
        }

      ]
    },





  ]
}

export default navigation
