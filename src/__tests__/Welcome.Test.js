import { render, screen } from '@testing-library/react'
import Welcome from '../components/Welcome'
describe('Tutti i test della welcome', () => {
  test('Welcome è montato correttamente?', () => {
    render(<Welcome />)
    const welcome = screen.getByText(/Benvenuti in EpiBooks!/i)
    expect(welcome).toBeInTheDocument()
  })
})
