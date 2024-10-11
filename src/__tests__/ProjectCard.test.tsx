import * as React from "react"
import { render, within, screen } from '@testing-library/react'
import { ProjectCard } from "../components/ProjectCard"
import userEvent from "@testing-library/user-event"
import { GithubProjectData } from "../utils/constantsAndTypes"

const projectMockData: GithubProjectData = {
  id: "l43kd4k-9384-4io2-n5k4-jk20fn9x04nb",
  name: "Mock",
  url: "https://github.com/forTesting/mock",
  rating: 4,
  created_at: "2024-09-19T14:02:00.211Z"
}

describe('ProjectCard', () => {
  it('renders with the project title and number of stars', () => {
    render(<ProjectCard projectData={projectMockData} deleteCallback={() => {}}/>)
    const projectCardElement = screen.getByTestId('proj-card')
    expect(within(projectCardElement).queryByText(projectMockData.name)).toBeTruthy()
    expect(within(projectCardElement).getAllByTestId('star')).toHaveLength(projectMockData.rating)
  })

  it('has a link to the GitHub project that is set to open in a new window', () => {
    render(<ProjectCard projectData={projectMockData} deleteCallback={() => {}}/>)
    const cardActionArea = screen.getByTestId('card-action-area')
    expect(cardActionArea.getAttribute('href')).toBe(projectMockData.url)
    expect(cardActionArea.getAttribute('target')).toBe('_blank')
  })

  it('calls delete callback when delete button is clicked', async () => {
    const mockFn = jest.fn()
    const user = userEvent.setup()
    render(<ProjectCard projectData={projectMockData} deleteCallback={mockFn}/>)
    const cardDeleteButton = screen.getByTestId('delete-btn')
    await user.click(cardDeleteButton)
    expect(mockFn).toHaveBeenCalled()
  })
  
})