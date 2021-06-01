import Button from '../components/button'
import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Form } from 'react-bootstrap'

// TODO:
// test and refactor

const FormAddWord = () => {
  const [spanish, setSpanish] = useState('')
  const [english, setEnglish] = useState('')

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
      <h2 className=' display-1 text-center mb-3'>Add Word</h2>
      <Form>
        <Form.Group className='mt-3'>
          <Form.Control type='text' placeholder='word English' value={english} onChange={(e) => handleOnchageEnglish(e)} />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Control type='text' placeholder='word Spanish' value={spanish} onChange={(e) => handleOnchageSpanish(e)} />
        </Form.Group>
        <Form.Group className='mt-3 d-grid'>
          <Button handleClick={handleSubmit}>Add </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default FormAddWord
