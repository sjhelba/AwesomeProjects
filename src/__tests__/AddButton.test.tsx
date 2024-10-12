import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { AddButton } from '../components/AddButton'

describe('AddButton', () => {
  it('renders', () => {
    render(<AddButton callback={() => {}} />)
    expect(screen.queryByTestId('add-btn')).toBeTruthy()
  })
})
