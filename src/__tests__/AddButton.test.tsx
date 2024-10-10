import * as React from "react"
import { render, screen } from '@testing-library/react'
import { AddButton } from "../components/AddButton"

describe('AddButton', () => {

  it('renders', () => {
    render(<AddButton />)
    expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument()
  })

})