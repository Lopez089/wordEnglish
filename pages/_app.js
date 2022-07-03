import firebase from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/theme'
import { WrapMovil } from '../wrappers/wrapMovil'

const firebaseConfig = {
  apiKey: 'AIzaSyDAh3ShBp_07zlrRhh7I_Z1gFDkwEmhi_E',
  authDomain: 'wordenglish-d3fca.firebaseapp.com',
  projectId: 'wordenglish-d3fca',
  storageBucket: 'wordenglish-d3fca.appspot.com',
  messagingSenderId: '789078335609',
  appId: '1:789078335609:web:599bce10d7a389dedef4a8'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <WrapMovil>
          <Component {...pageProps} />
        </WrapMovil>
      </ChakraProvider>
    </>
  )
}

export default MyApp
