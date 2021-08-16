import { useEffect, useRef, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import ButtonOnclick from '../components/button'
import { Button, Container, Form, Row, Tooltip, Overlay } from 'react-bootstrap'
import Link from 'next/link'

const Practice = () => {
  const [word, setWord] = useState([])
  const [newStateWord, setNewStateWord] = useState([])
  const [showWord, setShowWord] = useState(0)
  const [wordSpanish, setWordSpanish] = useState('')
  const [message, setMessage] = useState('')
  const [showTooltip, setshowTooltip] = useState(false)
  const target = useRef(null)
  console.log(word)
  useEffect(() => {
    firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).get()
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
      await firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).get()
        .then(querySnapshot => {
          countNow = querySnapshot.data().count
        }

        )
      if (countNow >= 10) {
        firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).delete()
          .then((data) => console.log('eliminado bien'))
      } else {
        firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).set(
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

      firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordFail[0].id).set(
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

  const handleshowTooltip = () => {
    setshowTooltip(!showTooltip)

    setTimeout(() => {
      setshowTooltip(showTooltip)
    }, 3000)
  }

  return (
    <main className='vh-100'>
      <Button variant='outline-secondary' className='m-4'>
        <Link href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-arrow-left' viewBox='0 0 16 16'>
            <path fill-rule='evenodd' d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z' />
          </svg>
        </Link>
      </Button>
      <Container className='h-50 d-flex justify-content-center align-items-center'>
        <Row>

          <h1 className='display-1 text-center mb-3' ref={target} onClick={() => handleshowTooltip()}>
            {word[showWord] ? word[showWord].data.english : ''}
          </h1>
          <Overlay target={target.current} show={showTooltip} placement='top'>
            <Tooltip id='tooltip-top'>
              <strong>{word[showWord] ? word[showWord].data.spanish : ''}</strong>
            </Tooltip>

          </Overlay>
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
