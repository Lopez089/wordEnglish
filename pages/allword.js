import { useEffect } from 'react'
import Head from 'next/head'
import { AllWordContainer } from '../container/allWordContainer/allWordContainer'
import { useSelector, useDispatch } from 'react-redux'
import { getAllWord } from '../features/word/allWordSlice'

const Home = () => {
  const words = useSelector((state) => state.word.AllWord)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllWord())
  }, [dispatch])
  return (
    <div>
      <Head>
        <title>all word</title>
        <meta name='description' content='All word english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-2'>
        <AllWordContainer words={words} />
      </main>
    </div>
  )
}

export default Home
