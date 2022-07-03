import { Box, useTheme } from '@chakra-ui/react'


export const WrapMovil = ({ children }) => {
    const theme = useTheme()
    const { primary, secondary } = theme.colors

    return (
        <Box
            as='main'
            w='100vw'
            h='100vh'
            bgGradient={`linear(to-l, ${primary}, ${secondary})`}
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                as='section'
                w={{ base: '100vw', sm: '100vw', md: '100vw', lg: '375px' }}
                h={{ base: '100vh', sm: '100vh', md: '100vh', lg: '90vh', xl: '667px' }}
                bg='white'
                borderRadius={{ sm: '0', md: '0', lg: '1rem' }}
                borderWidth='4px'
                borderColor='gray.100'
                overflow='overlay'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '0'
                    }
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
//TODO:
// usar los colores del theme
//PONER TYPOS A LOS DATOS
// refactor