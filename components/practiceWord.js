
import ButtonOnclick from '../components/button'
import { Button, Form, Tooltip, Overlay } from 'react-bootstrap'
import { useWordPractice } from '../hooks/useWordPractice'

export const PracticeWord = () => {
  const { word, showWord, wordSpanish, message, target, showTooltip, newStateWord, setWord, handleOnchage, handleCheck, haldleNext, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord } = useWordPractice()
  return (
    <>
      <h1 className='display-1 text-center mb-3' ref={target} onClick={() => handleshowTooltip()}>
        {word[showWord] ? word[showWord].data.english : ''}
      </h1>
      <Overlay target={target.current} show={showTooltip} placement='top'>
        <Tooltip id='tooltip-top'>
          <strong>{word[showWord] ? word[showWord].data.spanish : ''}</strong>
        </Tooltip>

      </Overlay>
      <Form>
        <Form.Control ref={target} className='form-floating' size='lg' placeholder='Escriba en Español' onChange={(e) => handleOnchage(e, setWordSpanish)} type='text' value={wordSpanish} />

        <section className='fixed-bottom h-25 bg-light d-flex justify-content-center align-items-center'>

          {message === ''
            ? <ButtonOnclick disabled handleClick={() => handleCheck(wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord)}>comprobar</ButtonOnclick>
            : (<div className='d-flex flex-column justify-items-center align-items-center'>
              <p className='fs-5 lead'>{message}</p>
              <Button onClick={() => haldleNext(newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
            </div>)}

        </section>
      </Form>
    </>
  )
}
