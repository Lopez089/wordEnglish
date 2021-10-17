
import ButtonOnclick from '../components/button'
import { Button, Form, Tooltip, Overlay, ProgressBar } from 'react-bootstrap'
import { useWordPractice } from '../hooks/useWordPractice'
import { Message } from '../components/message'


const messageFinish = {
  type: 'primary',
  message: 'Finalizado con exito vuelve mañana para mas y major 💪',

}

export const PracticeWord = () => {
  const { hasPushTooltip, setHasPushTooltip, totalNumberWord, progressBar, word, showWord, wordSpanish, message, target, showTooltip, newStateWord, setWord, handleOnchage, handleCheck, haldleNext, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setshowTooltip } = useWordPractice()
  return (
    <>
      {word.length === 0 && totalNumberWord !== 0 ? <Message message={messageFinish.message} type={messageFinish.type} />
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
            <h1 className='mt-5 display-1 text-center mb-3' ref={target} onClick={() => handleshowTooltip(setshowTooltip, setHasPushTooltip)}>
              {word[showWord] ? word[showWord].data.english : ''}
            </h1>
          </div>
          <Form>
            <Form.Control ref={target} className='form-floating' size='lg' placeholder='Escriba en Español' onChange={(e) => handleOnchage(e, setWordSpanish)} type='text' value={wordSpanish} />


            {message !== ''
              ? <Message message={message.message} type={message.type} word={message.word} /> : null}


            <section className='fixed-bottom p-2 bg-light d-flex align-items-center'>

              {message === '' && !hasPushTooltip
                ? (<div className='w-100 d-flex flex-row justify-content-around '>
                  <ButtonOnclick disabled handleClick={() => handleCheck(wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord, setWord, newStateWord)}>comprobar</ButtonOnclick>
                  <Button onClick={() => haldleNext(setHasPushTooltip, word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
                </div>)

                : null}

              {hasPushTooltip || message !== ''
                ? <div className='w-100 d-flex flex-column justify-items-center align-items-center'>
                  <Button onClick={() => haldleNext(setHasPushTooltip, word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish)}>siguiente</Button>
                </div>
                : null}

            </section>
          </Form>
        </>}
    </>
  )
}
