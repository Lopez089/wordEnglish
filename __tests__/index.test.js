import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Page Home', () => {
  test('render page Home', () => {
    render(<Home />)
    screen.getAllByText('Add Word')
    screen.getAllByPlaceholderText('word English')
    screen.getAllByPlaceholderText('word Spanish')
    screen.getByText('Add')
    screen.getByText('Practice')
  })
})
