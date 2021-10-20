import { render, screen } from '@testing-library/react'
import { words } from '../__tests__/allWordContainer.test'
import { ItemListWord } from '../components/itemListWord'
import userEvent from '@testing-library/user-event'

const wordOne = words[1]
const mockCallRemove = jest.fn()
const mockCallEdite = jest.fn()

describe('component itemListWord', () => {
  beforeEach(() => {
    render(
      <ItemListWord
        word={wordOne.wordEnglish}
        count={wordOne.count}
        handleRemove={mockCallRemove}
        handleEdit={mockCallEdite}
      />
    )
  })

  test('Show word englesh', () => {
    screen.findByText(wordOne.wordEnglish)
  })

  test('show progres word', () => {
    screen.getByText(`${wordOne.count}/10`)
  })

  test('click on Remove', () => {
    const ButtonRemove = screen.getByRole('button', {
      name: 'remove'
    })

    userEvent.click(ButtonRemove)
    expect(mockCallRemove).toHaveBeenCalledTimes(1)
  })

  test('click on Remove', () => {
    const ButtonEdit = screen.getByRole('button', {
      name: 'edit'
    })

    userEvent.click(ButtonEdit)
    expect(mockCallEdite).toHaveBeenCalledTimes(1)
  })
})
