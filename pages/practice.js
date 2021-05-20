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
      setMessage(`incorrecto la palabra correcta es  ${word[showWord].data.spanish}`)
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

          <h1 className='display-1 text-center mb-3'>
            {word[showWord] ? word[showWord].data.english : ''}
          </h1>

          <Form>
            <Form.Control className='form-floating' size='lg' placeholder='Escriba en Español' onChange={(e) => handleOnchage(e)} type='text' value={wordSpanish} />

            <section className='fixed-bottom h-25 bg-light d-flex justify-content-center align-items-center'>

              {message === ''
                ? <ButtonOnclick disabled handleClick={handleCheck}>comprobar</ButtonOnclick>

                : (
                  <div className='d-flex flex-column justify-items-center align-items-center'>
                    <p className='fs-5 lead'>{message}</p>
                    <Button onClick={haldleNext}>siguiente</Button>
                  </div>
                  )}

            </section>
          </Form>
        </Row>
      </Container>
      <Container className='d-flex justify-content-center align-items-center' />
    </main>
  )
}

export default Practice
