import Head from 'next/head'

const Button = ({ children, handleClick }) => {
  return (
    <button>{children}</button>
  )
}

const FormAddWord = () => {
  return (
    <>
      <h2>Add</h2>
      <form>
        <input type='text' placeholder='word English' />
        <input type='text' placeholder='word Spanish' />
        <Button>Add Word</Button>
      </form>
    </>
  )
}

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
