import { Button, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { PracticeWord } from '../components/practiceWord'

const Practice = () => {
  return (
    <main className='vh-100'>
      <Button variant='outline-secondary' className='m-4'>
        <Link href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-arrow-left' viewBox='0 0 16 16'>
            <path fill-rule='evenodd' d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z' />
          </svg>
        </Link>
      </Button>
      <Container className=' d-flex justify-content-center align-items-center'>
        <Row>
          <PracticeWord />
        </Row>
      </Container>
    </main>
  )
}

export default Practice
