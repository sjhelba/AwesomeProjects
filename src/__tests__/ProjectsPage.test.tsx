import * as React from "react"
import { render, screen, within } from '@testing-library/react'
import { ProjectsPage } from "../components/ProjectsPage"

describe('ProjectsPage', () => {

  it('renders a list of project cards', () => {
    render(<ProjectsPage />)
    expect(within(screen.getByTestId('projects-page')).getAllByTestId('proj-card')).toHaveLength(8)
  })

  it('stops displaying a project when deleted', async () => {
    const user = userEvent.setup()
    render(<ProjectsPage />)
    const firstCard = screen.getAllByTestId('proj-card')[0]
    await user.click(within(firstCard).getByTestId('delete-btn'))
    expect(screen.getAllByTestId('proj-card')).toHaveLength(7)
  })

})