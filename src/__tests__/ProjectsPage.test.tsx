import * as React from "react"
import { render, screen, within } from '@testing-library/react'
import { ProjectsPage } from "../components/ProjectsPage"

describe('ProjectsPage', () => {

  it('renders a list of project cards', () => {
    render(<ProjectsPage />)
    expect(within(screen.getByTestId('projects-page')).getAllByTestId('proj-card')).toHaveLength(8)
  })

})