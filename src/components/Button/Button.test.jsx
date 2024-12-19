import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  it('renders the button with provided text', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    expect(buttonElement).toBeDisabled()
  })
})
