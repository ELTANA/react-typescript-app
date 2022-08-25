import { render, screen } from '@testing-library/react'
import App from './App'

describe('Test the App root component', () => {
  it('Should render without crashing', () => {
    render(<App />)
  })

  it(`Renders the text: "TS React By EL'TANA"`, () => {
    expect(screen.findByText(/TS React By EL'TANA/i)).toBeInTheDocument
  })

  it(`Renders an image`, () => {
    expect(screen.findByAltText(/background pic/i)).toBeInTheDocument
  })
})
