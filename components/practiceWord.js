
import ButtonOnclick from '../components/button'
import { Button, Form, Tooltip, Overlay } from 'react-bootstrap'
import { useWordPractice } from '../hooks/useWordPractice'

export const PracticeWord = () => {
  const { word, showWord, wordSpanish, message, target, showTooltip, newStateWord, setWord, handleOnchage, handleCheck, haldleNext, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setshowTooltip } = useWordPractice()
  return (
    <>
      <Overlay target={target.current} show={showTooltip} placement='top'>
        <Tooltip id='tooltip-top'>
          <strong>{word[showWord] ? word[showWord].data.spanish : ''}</strong>
        </Tooltip>
      </Overlay>
      <h1 className='display-1 text-center mb-3' ref={target} onClick={() => handleshowTooltip(showTooltip, setshowTooltip)}>
        {word[showWord] ? word[showWord].data.english : ''}
      </h1>
      <Form>
        <Form.Control ref={target} className='form-floating' size='lg' placeholder='Escriba en Español' onChange={(e) => handleOnchage(e, setWordSpanish)} type='text' value={wordSpanish} />
        <section className='fixed-bottom h-25 bg-light d-flex align-items-center'>

          {message === ''
            ? (<div className='w-100 d-flex flex-row justify-content-around '>
              <ButtonOnclick disabled handleClick={() => handleCheck(wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord)}>comprobar</ButtonOnclick>
              <Button onClick={() => haldleNext(word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
            </div>)

            : (
              <div className='w-100 d-flex flex-column justify-items-center align-items-center'>
                <p className='fs-5 lead text-center'>{message}</p>
                <Button onClick={() => haldleNext(word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
              </div>)}

        </section>
      </Form>
    </>
  )
}
