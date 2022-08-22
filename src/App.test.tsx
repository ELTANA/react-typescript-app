import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Test the App root componenet', () => {
  it('Renders without crashing', () => {
    render(<App />)
  })

  it(`Renders the text: "TS React By EL'TANA"`, () => {
    render(<App />)
    expect(screen.findByText(/TS React By EL'TANA/i)).toBeInTheDocument
  })

  it(`Renders an image`, () => {
    render(<App />)
    expect(screen.findByAltText(/background pic/i)).toBeInTheDocument
  })
})
