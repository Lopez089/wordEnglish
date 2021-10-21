import { render, screen } from '@testing-library/react'
import { ModalConfimation } from '../components/modalConfimation'
import { modalConfimation } from '../constants/index'
import userEvent from '@testing-library/user-event'

const mockCallYes = jest.fn()
const mockCallNo = jest.fn()

describe('component ModalConfimation', () => {
  test('show a question to user if you want remove item ', () => {
    render(<ModalConfimation type='delete' actionYes={mockCallYes} actionNo={mockCallNo} />)

    screen.getByText(modalConfimation.delete.header)
  })

  test('show a question to user if you want edit item ', () => {
    render(<ModalConfimation type='edit' actionYes={mockCallYes} actionNo={mockCallNo} />)

    screen.getByText(modalConfimation.edit.header)
  })

  test('show two botton to YES and NO if to click eject func', () => {
    render(<ModalConfimation type='edit' actionYes={mockCallYes} actionNo={mockCallNo} />)

    const buttonYes = screen.getByText(modalConfimation.button.yes)
    const buttonNo = screen.getByText(modalConfimation.button.no)

    userEvent.click(buttonYes)
    userEvent.click(buttonNo)

    expect(mockCallYes).toHaveBeenCalledTimes(1)
    expect(mockCallNo).toHaveBeenCalledTimes(1)
  })
})
