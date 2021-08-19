
import ButtonOnclick from '../components/button'
import { Button, Form, Tooltip, Overlay, ProgressBar } from 'react-bootstrap'
import { useWordPractice } from '../hooks/useWordPractice'
import { CheckCircleIcon } from '@primer/octicons-react'

const MessageSuccees = () => {
  return (
    <div className='d-flex  flex-column mt-5 text-center'>
      <div className='d-inline d-flex justify-content-center align-items-center m-3'>
        <div className='rounded-circle bg-primary p-4 d-inline'>
          <CheckCircleIcon size={24} className='text-white' />
        </div>
      </div>
      <h1 className='display-3'>Enhorabuena!!!</h1><p />
      <p className='text-muted'>Finalizado con exito vuelve mañana para mas y major 💪</p>
    </div>
  )
}

export const PracticeWord = () => {
  const { totalNumberWord, progressBar, word, showWord, wordSpanish, message, target, showTooltip, newStateWord, setWord, handleOnchage, handleCheck, haldleNext, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setshowTooltip } = useWordPractice()
  return (
    <>
      {word.length === 0 && totalNumberWord !== 0 ? <MessageSuccees />
        : <>
          <div className='p5 mb-3 mt-5'>
            <ProgressBar variant='warning' now={progressBar} />
          </div>
          <div>
            <Overlay target={target.current} show={showTooltip}>
              <Tooltip>
                <strong>{word[showWord] ? word[showWord].data.spanish : ''}</strong>
              </Tooltip>
            </Overlay>
            <h1 className='mt-5 display-1 text-center mb-3' ref={target} onClick={() => handleshowTooltip(setshowTooltip)}>
              {word[showWord] ? word[showWord].data.english : ''}
            </h1>
          </div>
          <Form>
            <Form.Control ref={target} className='form-floating' size='lg' placeholder='Escriba en Español' onChange={(e) => handleOnchage(e, setWordSpanish)} type='text' value={wordSpanish} />
            <section className='fixed-bottom h-25 bg-light d-flex align-items-center'>

              {message === ''
                ? (<div className='w-100 d-flex flex-row justify-content-around '>
                  <ButtonOnclick disabled handleClick={() => handleCheck(wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord, setWord, newStateWord)}>comprobar</ButtonOnclick>
                  <Button onClick={() => haldleNext(word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
                </div>)

                : (
                  <div className='w-100 d-flex flex-column justify-items-center align-items-center'>
                    <p className='fs-5 lead text-center'>{message}</p>
                    <Button onClick={() => haldleNext(word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
                  </div>)}

            </section>
          </Form>
        </>}
    </>
  )
}
