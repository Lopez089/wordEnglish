import { ListGroupItem } from 'react-bootstrap'
import { ProgressWord } from '../components/practiceWord'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'

export const ItemListWord = ({ word, count, handleRemove, handleEdit }) => {
  return (
    <ListGroupItem as='li' className='d-flex justify-content-between align-items-center'>
      <p className=' m-0 fs-3'>
        {word}
      </p>
      <ProgressWord completeWord={count} className='m-0' />
      <div>
        <div className='btn-group btn-group-xs'>
          <button
            type='button'
            className='btn btn-outline-danger'
            onClick={handleRemove}
            aria-label='remove'
          >
            <BsTrash />
          </button>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={handleEdit}
            aria-label='edit'
          >
            <BsPencilSquare />
          </button>
        </div>
      </div>
    </ListGroupItem>
  )
}
