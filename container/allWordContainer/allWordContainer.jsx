import { ListGroup } from 'react-bootstrap'
import { ItemListWord } from '../../components/itemListWord'

export const AllWordContainer = ({ words }) => {
  return (
    <ListGroup as='ul' aria-label='words-heading'>
      {
        words.map(word => {
          return (
            <ItemListWord
              key={word.id}
              word={word.data.english}
              count={word.data.count}
              handleRemove={() => console.log('remove')}
              handleEdit={() => console.log('edit')}
            />
          )
        })
      }
    </ListGroup>
  )
}
