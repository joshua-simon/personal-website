import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../components/form'

test('that title is rendered', () => {
    render(<Form/>)
    const header = screen.getByText(/contact form/i);
    expect(header).toBeInTheDocument()
})

test('that input element rendered', () => {
    render(<Form/>)
    const input = screen.getByPlaceholderText(/enter email address/i)
    fireEvent.change(input, {target: {value: "generic_email@gmail.com" }})
    expect(input.value).toBe("generic_email@gmail.com")
})