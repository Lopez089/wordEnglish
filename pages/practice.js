import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import ButtonOnclick from '../components/button'
import { Button, Container, Form, Row } from 'react-bootstrap'

const Practice = () => {
  const [word, setWord] = useState([])
  const [newStateWord, setNewStateWord] = useState([])
  const [showWord, setShowWord] = useState(0)
  const [wordSpanish, setWordSpanish] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    firebase.firestore().collection('word').get()
      .then(querySnapshot =>

        querySnapshot.forEach((doc) => {
          const newState = {
            id: doc.id,
            data: doc.data()
          }

          setWord((preState) => preState.concat(newState))
        })
      )
  }, [])

  const handleOnchage = (e) => {
    setWordSpanish(e.target.value)
  }

  const handleCheck = async (e) => {
    e.preventDefault()

    if (wordSpanish === word[showWord].data.spanish) {
      setMessage('correcto')
      const Word = [...word]
      const wordSuccess = Word.splice(0, 1)

      setNewStateWord(Word)
      let countNow
      await firebase.firestore().collection('word').doc(wordSuccess[0].id).get()
        .then(querySnapshot => {
          countNow = querySnapshot.data().count
        }

        )
      if (countNow >= 10) {
        firebase.firestore().collection('word').doc(wordSuccess[0].id).delete()
          .then((data) => console.log('eliminado bien'))
      } else {
        firebase.firestore().collection('word').doc(wordSuccess[0].id).set(
          { count: countNow + 1 }, { merge: true }
        )
      }

      setShowWord(0)

      console.log(countNow)
    } else {
      setMessage(`incorrecto la palabra correcta es ${word[showWord].data.spanish}`)
      const Word = [...word]
      const wordFail = Word.splice(0, 1)
      // console.log({ wordFail })
      // console.log({ Word })

      firebase.firestore().collection('word').doc(wordFail[0].id).set(
        { count: 0 }, { merge: true }
      )

      setNewStateWord(Word.concat(wordFail))
    }
  }

  const haldleNext = () => {
    if (newStateWord !== []) {
      setWord(newStateWord)
    }

    setNewStateWord([])
    setMessage('')
    setWordSpanish('')
  }
  return (
    <main className='vh-100'>
      <Container className='h-50 d-flex justify-content-center align-items-center'>
        <Row>

          <h1 ClassName='fs-1 text-center'>
            {word[showWord] ? word[showWord].data.english : 'Todo finalizado'}
          </h1>
          <p className='fs-6 text-muted'>{message}</p>
          <Form>
            <Form.Control onChange={(e) => handleOnchage(e)} type='text' value={wordSpanish} />
            <ButtonOnclick handleClick={handleCheck}>comprobar</ButtonOnclick>
          </Form>
        </Row>
      </Container>
      <Container className='d-flex justify-content-center align-items-center'>

        <Button onClick={haldleNext}>siguiente</Button>

      </Container>
    </main>
  )
}

export default Practice
