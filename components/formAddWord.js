import Button from '../components/button'
import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

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
      <h2>Add Word</h2>
      <form>
        <input type='text' placeholder='word English' value={english} onChange={(e) => handleOnchageEnglish(e)} />
        <input type='text' placeholder='word Spanish' value={spanish} onChange={(e) => handleOnchageSpanish(e)} />
        <Button handleClick={handleSubmit}>Add </Button>
      </form>
    </>
  )
}

export default FormAddWord
