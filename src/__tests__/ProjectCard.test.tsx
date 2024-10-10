import * as React from "react"
import { render, within, screen } from '@testing-library/react'
import { ProjectCard } from "../components/ProjectCard"
import { projectMockData } from "./testUtils"

describe('ProjectCard', () => {

  it('renders with the project title and number of stars', () => {
    render(<ProjectCard projectData={projectMockData}/>)
    const projectCardElement = screen.getByTestId('proj-card')
    expect(within(projectCardElement).getByText(projectMockData.name)).toBeTruthy()
    expect(within(projectCardElement).getAllByTestId('star')).toHaveLength(projectMockData.rating)
  })

  it('has a link to the GitHub project that is set to open in a new window', async () => {
    render(<ProjectCard projectData={projectMockData}/>)
    const cardActionArea = screen.getByTestId('card-action-area')
    expect(cardActionArea.getAttribute('href')).toBe(projectMockData.url)
    expect(cardActionArea.getAttribute('target')).toBe('_blank')
  })
  
})