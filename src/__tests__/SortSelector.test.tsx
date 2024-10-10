import * as React from "react"
import { render, screen } from '@testing-library/react'
import { SortSelector } from "../components/SortSelector"

describe('SortSelector', () => {
  
  it('renders', () => {
    render(<SortSelector />)
    expect(screen.getByTestId('sort-selector')).toBeInTheDocument()
  })

})