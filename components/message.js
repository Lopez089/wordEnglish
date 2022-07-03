import { CheckCircleIcon } from '@primer/octicons-react'
import { Alert } from 'react-bootstrap'

export const Message = ({ message, type, word }) => {
  return (
    <Alert variant={type} className='d-flex flex-column mt-5 text-center '>
      <div className='d-inline d-flex justify-content-center align-items-center '>
        {
          type === 'primary'
            ? (
              <div className='rounded-circle bg-primary p-4 d-inline'>
                <CheckCircleIcon size={24} className='text-white' />
              </div>)
            : null
        }
      </div>
      {
        type === 'primary'
          ? <h1 className='display-3 mt-3'>Enhorabuena!!!</h1>
          : null
      }
      <p className='text-muted m-0'>{message} <strong>{word}</strong> </p>
    </Alert>
  )
}
