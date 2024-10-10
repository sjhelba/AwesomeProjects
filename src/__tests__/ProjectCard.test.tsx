import * as React from "react"
import { render, within, screen } from '@testing-library/react'
import { ProjectCard } from "../components/ProjectCard"
import { projectMockData } from "./testUtils"
import userEvent from "@testing-library/user-event"

describe('ProjectCard', () => {

  it('renders with the project title and number of stars', () => {
    render(<ProjectCard />)
    const projectCardElement = screen.getByTestId('proj-card')
    expect(within(projectCardElement).getByText(projectMockData.name)).toBeInTheDocument()
    expect(within(projectCardElement).getAllByTestId('star')).toHaveLength(projectMockData.rating)
  })

  it('opens project in a new window when clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectCard />)
    await user.click(screen.getByTestId('proj-card'))
    expect(global.open).toHaveBeenCalledWith(projectMockData.url, "_blank")
  })
  
})