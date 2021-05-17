import Button from '../components/button'
import Head from 'next/head'
import FormAddWord from '../components/formAddWord'
import Link from 'next/link'

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
          <Link href='/practice'>Practice</Link>
        </section>
      </main>
    </div>
  )
}

export default Home
