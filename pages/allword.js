import Head from 'next/head'
import { AllWordContainer } from '../container/allWordContainer/allWordContainer'

export const words = [
  {
    wordSpanish: 'hola',
    wordEnglish: 'hi',
    id: '9737392',
    count: 2
  },
  {
    wordSpanish: 'adios',
    wordEnglish: 'bye',
    id: '97378768',
    count: 5
  },
  {
    wordSpanish: 'perro',
    wordEnglish: 'dog',
    id: '923423492',
    count: 10
  }
]

const Home = () => {
  return (
    <div>
      <Head>
        <title>all word</title>
        <meta name='description' content='All word english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='vh-100'>
        pageAllWord

        <AllWordContainer words={words} />
      </main>
    </div>
  )
}

export default Home
