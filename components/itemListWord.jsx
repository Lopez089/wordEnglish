import { ProgressWord } from '../components/practiceWord'

export const ItemListWord = ({ word, count, handleRemove, handleEdit }) => {
  return (
    <li>
      {word}
      <ProgressWord completeWord={count} />
      <button onClick={handleRemove} aria-label='remove'>Remove</button>
      <button onClick={handleEdit} aria-label='edit'>Edit</button>
    </li>
  )
}
