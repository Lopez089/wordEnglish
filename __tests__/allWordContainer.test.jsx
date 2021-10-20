import { render, screen, within } from '@testing-library/react'
import { AllWordContainer } from '../container/allWordContainer/allWordContainer'

export const words = [
  {
    wordSpanish: 'hola',
    wordEnglish: 'hi',
    id: '9737392',
    count: 2
  },
  {
    wordSpanish: 'adios',
    wordEnglish: 'bye',
    id: '97378768',
    count: 5
  },
  {
    wordSpanish: 'perro',
    wordEnglish: 'dog',
    id: '923423492',
    count: 10
  }
]

describe('Container AllWord', () => {
  test('the component render to items to word', () => {
    render(<AllWordContainer words={words} />)
    const listWord = screen.getByRole('list', {
      name: 'words-heading'
    })
    const { getAllByRole } = within(listWord)

    const listAllWord = getAllByRole('listitem')
    expect(listAllWord.length).toBe(words.length)
  })
})
