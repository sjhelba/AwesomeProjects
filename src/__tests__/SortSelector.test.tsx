import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { SortSelector } from '../components/SortSelector'
import { SortOption } from '../utils'

describe('SortSelector', () => {
  it('renders', () => {
    render(<SortSelector setSort={() => {}} currentSort={SortOption.NONE} />)
    expect(screen.queryByTestId('sort-selector')).toBeTruthy()
  })
})
