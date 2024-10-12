import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { AddProjectModal } from '../components/AddProjectModal'
import userEvent from '@testing-library/user-event'

describe('AddProjectModal', () => {
  it('renders', () => {
    render(
      <AddProjectModal
        open={true}
        closeModal={() => {}}
        addProject={() => {}}
      />
    )
    expect(screen.queryByTestId('add-proj-modal')).toBeTruthy()
  })

  it('calls close callback when x button is clicked', async () => {
    const user = userEvent.setup()
    const mockFn = jest.fn()
    render(
      <AddProjectModal open={true} closeModal={mockFn} addProject={() => {}} />
    )
    await user.click(screen.getByTestId('close-modal-btn'))
    expect(mockFn).toHaveBeenCalled()
  })
})
