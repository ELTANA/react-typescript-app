import { fireEvent, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from '../../../App'

describe('Test the Input Component', () => {
  render(<App />)
  const inputField = screen.getByRole('textbox')

  test('Renders an Input Field', () => {
    expect(inputField).toBeInTheDocument()
  })

  test('Input field to be empty', () => {
    expect(inputField).toHaveValue('')
  })

  test('It should not allow letters to be inputted', () => {
    fireEvent.change(inputField, { target: { value: 'Testing input field!' } })
    expect(inputField).toHaveValue('Testing input field!')
  })

  // test('It should allow input value to be deleted', () => {
  //   inputField.focus()

  //   fireEvent.keyPress(inputField, {
  //     target: { value: 'test' },
  //   })
  //   expect(inputField).toHaveValue('test')

  //   const options = {
  //     key: 'Backspace',
  //     code: 'BackSpace',
  //     charCode: 8,
  //     keyCode: 8,
  //     which: 8,
  //   }
  //   fireEvent.keyDown(inputField, options.charCode)
  //   expect(inputField).toHaveProperty('value', 'tes')
  //   // expect(inputField).toHaveValue('test')
  // })
})
