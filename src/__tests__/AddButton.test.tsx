import * as React from "react"
import { render, screen } from '@testing-library/react'
import { AddButton } from "../components/AddButton"
import userEvent from '@testing-library/user-event'


describe('AddButton', () => {
  it('renders', () => {
    render(<AddButton callback={() => {}}/>)
    expect(screen.queryByTestId('add-btn')).toBeTruthy()
  })

})