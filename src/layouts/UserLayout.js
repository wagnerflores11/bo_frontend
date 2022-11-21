import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'
//import HorizontalNavItems from 'src/navigation/horizontal'

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'

import VerticalAppBarContent from './components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'


const UserLayout = ({ children }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  const User = () => {
    const BadgeContentSpan = styled('span')(({ theme }) => ({
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: theme.palette.success.main,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }))

    return (
      <Box sx={{ mb: 2, pb: 3, px: 4, borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge
            overlap='circular'
            badgeContent={<BadgeContentSpan />}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            <Avatar alt='John Doe' sx={{ width: '2.5rem', height: '2.5rem' }} >J</Avatar>
          </Badge>
          <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column', whiteSpace: 'nowrap' }}>
            <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
            <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
              johndoe@blueotter.pt
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  }

  const LogoMenu = () => {

    const StyledLink = styled('div')({
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      marginLeft: '12px'
    })


    return (
      <StyledLink>
        <img width='190' src='/images/logo-large.svg' />
      </StyledLink>
    )
  }

  const Footer = () => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'right' }}>
        <Typography sx={{ mr: 2 }}>
          {`© ${new Date().getFullYear()}, All rights reserved,`}
          {` by `}
          <Link target='_blank' href='https://blueotter.pt/'>
            Blueotter
          </Link>
        </Typography>

      </Box>
    )
  }
  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      {...{
        // ** Navigation Items
        verticalNavItems: VerticalNavItems(),

        // Uncomment the below line when using server-side menu in vertical layout and comment the above line
        // verticalNavItems: ServerSideVerticalNavItems(),
        // ** AppBar Content
        verticalAppBarContent: props => (
          <VerticalAppBarContent
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            toggleNavVisibility={props.toggleNavVisibility}
          />
        )
      }}

      verticalNavMenuBranding={() => <LogoMenu />}

      beforeVerticalNavMenuContent={() => <User />}

      footerContent={() => <Footer />}

    >
      {children}

    </Layout >
  )
}

export default UserLayout
