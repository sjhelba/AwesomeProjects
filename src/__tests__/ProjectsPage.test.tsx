import * as React from "react"
import { render, screen, within } from '@testing-library/react'
import { getSortCompareFunction, ProjectsPage } from "../components/ProjectsPage"
import { SortOption } from "../utils/constantsAndTypes"
import { getMockProjectsList, mockLocalStorageValue } from "./mockData"

describe('ProjectsPage', () => {
  it('renders a list of project cards', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorageValue,
    });
    render(<ProjectsPage />)
    const cards = await (within(screen.getByTestId('projects-page')).findAllByTestId('proj-card'))
    expect(cards).toHaveLength(8)
  })

})

describe('getSortCompareFunction', () => {
  it('can return a function that compares projects by which was created last, with dates that differ only in time', () => {
    const [earliestProject, middleProject, latestProject] = getMockProjectsList('time')
    const expectedSortOrder = [latestProject, middleProject, earliestProject]
    const mixedOrderProjects = [latestProject, earliestProject, middleProject]
    const compareFunc = getSortCompareFunction(SortOption.CREATED_AT_DESC)
    expect(mixedOrderProjects.sort(compareFunc)).toEqual(expectedSortOrder)
  })

  it('can return a function that compares projects by which was created first, with dates that differ only in date', () => {
    const [earliestProject, middleProject, latestProject] = getMockProjectsList('date')
    const expectedSortOrder = [earliestProject, middleProject, latestProject]
    const mixedOrderProjects = [earliestProject, latestProject, middleProject]
    const compareFunc = getSortCompareFunction(SortOption.CREATED_AT_ASC)
    expect(mixedOrderProjects.sort(compareFunc)).toEqual(expectedSortOrder)
  })

  it('can return a function that compares projects by which has the highest rating', () => {
    const [lowestRatedProject, midRatedProject, highestRatedProject] = getMockProjectsList()
    const expectedSortOrder = [highestRatedProject, midRatedProject, lowestRatedProject]
    const mixedOrderProjects = [midRatedProject, highestRatedProject, lowestRatedProject]
    const compareFunc = getSortCompareFunction(SortOption.RATING_DESC)
    expect(mixedOrderProjects.sort(compareFunc)).toEqual(expectedSortOrder)
  })

})