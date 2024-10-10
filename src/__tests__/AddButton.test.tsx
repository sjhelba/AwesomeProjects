import * as React from "react"
import { render, screen } from '@testing-library/react'
import { AddButton } from "../components/AddButton"

describe('AddButton', () => {

  it('renders', () => {
    render(<AddButton />)
    expect(screen.getByTestId('add-btn')).toBeTruthy()
  })

})