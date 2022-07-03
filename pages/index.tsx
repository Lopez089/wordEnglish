import Head from 'next/head'
import { useTheme, useDisclosure, Box, Grid, Text, Flex, Avatar, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import { PlusSquareIcon, SettingsIcon, HamburgerIcon, ArrowUpIcon, EditIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { FormAddWord } from '../components/formAddWord'

type colors = {
  primary: string
  secondary: string
}

import { NextPage } from 'next'

const Home: NextPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const theme = useTheme()

  const { primary, secondary }: colors = theme.colors

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home app word english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Modal isOpen={isOpen} onClose={onClose} size='xs' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar nuevas palabras</ModalHeader>
          <ModalCloseButton />
          <FormAddWord />
        </ModalContent>
      </Modal>
      <Box
        as='main'
        bg='blackAlpha.50'
        h='100%'
        display='grid'
      >
        <Grid gridTemplateRows='20% 80%'>
          <Box>
            <Flex justify='space-around' align='center' h='100%' >
              <Box>
                <Text fontSize='1.5rem' fontWeight='semibold'>
                  Hola Juan 👋
                </Text>
                <Text color='gray.500'>
                  Bienvenido a WordEnglish
                </Text>
              </Box>
              <Avatar shadow='lg' name='juan Lopez' src='https://xsgames.co/randomusers/avatar.php?g=male' />
            </Flex>
          </Box>
          <Grid bg='white' borderRadius='1rem 1rem 0 0' gridTemplateRows='15% 65%'>
            <Flex justify='space-around' align='center' >
              <Text fontSize='1.2rem'>Dasboard</Text>
              <Button
                size='xs'
                bg={secondary}
                rightIcon={<PlusSquareIcon />}
                color='white'
                shadow='lg'
                _hover={{
                  bg: primary
                }}
                onClick={onOpen}
              >
                Agregar
              </Button>
            </Flex>
            <Grid p='1.5rem' gridTemplateRows='1fr 1fr' gridTemplateColumns='1fr 1fr' gap='20px'>
              <Link href='/practice' >
                <Flex cursor='pointer' gap='.5rem' justify="center" align="center" flexDirection='column' bg='red.100' borderRadius='1rem' color='gray.600' _hover={{ bg: 'red.500', color: 'white' }} boxShadow='lg'>
                  <Flex justify="center" align="center" bg='white' borderRadius='50%' w='50px' h='50px'>
                    <EditIcon color='red.300' />
                  </Flex>
                  <Text fontWeight='medium'>Practica</Text>
                </Flex>
              </Link>
              <Link href='/allWord' >
                <Flex cursor='pointer' gap='.5rem' justify="center" align="center" flexDirection='column' bg='blue.100' borderRadius='1rem' color='gray.600' _hover={{ bg: 'blue.500', color: 'white' }} boxShadow='lg'>
                  <Flex justify="center" align="center" bg='white' borderRadius='50%' w='50px' h='50px'>
                    <HamburgerIcon color='blue.300' />
                  </Flex>
                  <Text fontWeight='medium'>Todas Las Palabras</Text>
                </Flex>
              </Link>
              <Link href='/statistics' >
                <Flex cursor='pointer' gap='.5rem' justify="center" align="center" flexDirection='column' bg='yellow.100' borderRadius='1rem' color='gray.600' _hover={{ bg: 'yellow.300', color: 'white' }} boxShadow='lg'>
                  <Flex justify="center" align="center" bg='white' borderRadius='50%' w='50px' h='50px'>
                    <ArrowUpIcon color='yellow.300' />
                  </Flex>
                  <Text fontWeight='medium'>Estadistica</Text>
                </Flex>
              </Link>
              <Link href='/config' >
                <Flex cursor='pointer' gap='.5rem' justify="center" align="center" flexDirection='column' bg='orange.100' borderRadius='1rem' color='gray.600' _hover={{ bg: 'orange.400', color: 'white' }} boxShadow='lg'>
                  <Flex justify="center" align="center" bg='white' borderRadius='50%' w='50px' h='50px'>
                    <SettingsIcon color='orange.300' />
                  </Flex>
                  <Text fontWeight='medium'>Configuracion</Text>
                </Flex>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home

/* TODO:
-cretae las constantes
- refactor
_ create un state globales
*/
