// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

//** Service
import api from '../services/api';

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)


  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      setLoading(false)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await api
          .get('/me', {
            headers: {
              Authorization: 'Bearer ' + storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            setUser({ ...response.data.userData })
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            router.replace('/login')

          })
      } else {
        setLoading(false)
        //handleRefreshToken()

      }
    }
    initAuth()
  }, [])

  const handleLogin = async (params, errorCallback) => {
    axios
      .post('/api/login', params)
      .then(async res => {
        const { access_token: token, refresh_token: refresh_token, expires_in: expires_in } = res.data.data
        window.localStorage.setItem(authConfig.storageTokenKeyName, token)
        //window.localStorage.setItem(authConfig.storageRefreshTokenKeyName, refresh_token)
        return token
      })
      .then(async token => {
        api.defaults.headers.Authorization = `Bearer ${token}`
        const { data: userData } = await api.get('/me')

        const returnUrl = router.query.returnUrl
        setUser({ ...userData })
        await window.localStorage.setItem('userData', JSON.stringify(userData))
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)

      })



  }

  const handleRefreshToken = () => {
    const storedRefreshToken = window.localStorage.getItem(authConfig.storageRefreshTokenKeyName)


    const params = {
      refresh_token: storedRefreshToken
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/token/refresh`, params)
      .then(async response => {

        const { access_token: token, refresh_token: refresh_token } = response.data

        await window.localStorage.setItem(authConfig.storageTokenKeyName, token)
        window.localStorage.setItem(authConfig.storageRefreshTokenKeyName, refresh_token)
        router.reload(window.location.pathname)

      })
      .then(() => {


      })
      .catch(() => {
        console.log('error')
        handleLogout()
      })

  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    setLoading(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
