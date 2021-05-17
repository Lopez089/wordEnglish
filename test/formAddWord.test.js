import React from 'react'
import { render, screen } from '@testing-library/react'
import FormAddWord from '../components/formAddWord'

describe('FormAddWord', () => {
  test('the user write HELLO and function handleOnchage run five times', () => {
    render(<FormAddWord />)
  })
})
