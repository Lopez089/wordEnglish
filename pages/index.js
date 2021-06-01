import Head from 'next/head'
import FormAddWord from '../components/formAddWord'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home app word english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='vh-100'>
        <section className='h-50 d-flex flex-column justify-content-center align-items-center'>
          <FormAddWord />
        </section>
        <section className='fixed-bottom h-25 bg-light d-flex justify-content-center align-items-center'>
          <Button variant='outline-primary' href='/practice'>Practice</Button>
        </section>
      </main>
    </div>
  )
}

export default Home
