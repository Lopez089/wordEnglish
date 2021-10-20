import { render, screen, within } from '@testing-library/react'
import { AllWordContainer } from '../container/allWordContainer/allWordContainer'

export const words = [
	{
		wordSpanish: 'hola',
		wordEnglish: 'hi',
		id: '9737392'
	},
	{
		wordSpanish: 'adios',
		wordEnglish: 'bye',
		id: '97378768'
	},
	{
		wordSpanish: 'perro',
		wordEnglish: 'dog',
		id: '923423492'
	}
]

describe('Container AllWord', () => {

	test('the component render to items to word', () => {

		render(<AllWordContainer words={words} />)
		screen.debug()
		const listWord = screen.getByRole('list', {
			name: 'words-heading',
		})
		const { getAllByRole } = within(listWord)

		const listAllWord = getAllByRole('listitem')
		expect(listAllWord.length).toBe(words.length)

	});


});
