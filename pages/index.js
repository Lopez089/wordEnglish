import Head from 'next/head'
import FormAddWord from '../components/formAddWord'
import Button from '../components/button'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home app word english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>
          <FormAddWord />
        </section>
        <section>
          <Button>Practice</Button>
        </section>
      </main>
    </div>
  )
}

export default Home
