import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTheme, Input, Button, Text, Grid, Box } from '@chakra-ui/react'


export const FormAddWord = () => {
  const [spanish, setSpanish] = useState('')
  const [english, setEnglish] = useState('')
  const theme = useTheme()
  const { primary, secondary }: {
    primary: string;
    secondary: string
  } = theme.colors

  const handleOnchageSpanish = (e) => {
    setSpanish(e.target.value)
  }

  const handleOnchageEnglish = (e) => {
    setEnglish(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.table({ spanish, english })

    firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).add({
      spanish, english, count: 0
    })

    setSpanish('')
    setEnglish('')
  }

  return (
    <>
      <form>
        <Grid p='2rem' gap={3}  >
          <Box>
            <Text mb='8px'>English</Text>
            <Input focusBorderColor={secondary} type='text' placeholder='ej: Hello' value={english} onChange={(e) => handleOnchageEnglish(e)} />
          </Box>
          <Box>
            <Text mb='8px'>Español</Text>
            <Input focusBorderColor={secondary} type='text' placeholder='Hola' value={spanish} onChange={(e) => handleOnchageSpanish(e)} />
          </Box>
          <Button
            bg={secondary}
            color='white'
            shadow='lg'
            _hover={{
              bg: primary
            }}>
            Agragar nuevo palabra
          </Button>
        </Grid>
      </form>
    </>
  )
}
