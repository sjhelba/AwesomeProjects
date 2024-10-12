import * as React from "react"
import { getRandomColor, GithubProjectData, SortOption } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Alert, Box, FormControl, Grid2 as Grid, Card, Snackbar, Typography } from "@mui/material"
import { useState } from "react"
import breakpointStyling from "../muiBreakpointStyles"

const getProjectsFromLocalStorage = () => Object.values({...localStorage}).map(value => JSON.parse(value)) as GithubProjectData[]

type GetSortCompareFunction = (sortOrder: SortOption) => ((a: GithubProjectData, b: GithubProjectData) => number)
export const getSortCompareFunction: GetSortCompareFunction = sortOrder => ((a, b) => (
    (sortOrder === SortOption.RATING_DESC) ? b.rating - a.rating
  : (sortOrder === SortOption.RATING_ASC) ? a.rating - b.rating
  : (sortOrder === SortOption.CREATED_AT_DESC) ? Date.parse(b.created_at) - Date.parse(a.created_at)
  : (sortOrder === SortOption.CREATED_AT_ASC) ? Date.parse(a.created_at) - Date.parse(b.created_at)
  : -1
))

export const ProjectsPage = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [toastIsActive, setToastIsActive] = useState(false)
  const [projects, setProjects] = useState(getProjectsFromLocalStorage)
  const [sortOrder, setSetOrder] = useState<SortOption>(SortOption.NONE)
  const toastCloseHandler = () => {
    setToastIsActive(false)
  }
  const removeProject = (projectId: string) => {
    localStorage.removeItem(projectId)
    setProjects(getProjectsFromLocalStorage())
  }
  const addProject = (project: GithubProjectData) => {
    localStorage.setItem(project.id, JSON.stringify(project))
    setProjects(getProjectsFromLocalStorage())
    setToastIsActive(true)
  }
  const sortCompareFunction = getSortCompareFunction(sortOrder)
  const sortedProjects = sortOrder === SortOption.NONE ? projects : projects.sort(sortCompareFunction)

return (
  <Card data-testid="projects-page" id="projects-page" raised >
      <Snackbar
        open={toastIsActive}
        autoHideDuration={2500}
        onClose={toastCloseHandler}
        anchorOrigin={{ vertical:'top', horizontal: 'right' }}
      >
        <Alert
          onClose={toastCloseHandler}
          severity="success"
          variant="filled"
        >
          {`Success! You've saved an awesome project!`}
        </Alert>
      </Snackbar>
    <Typography
      component="h1"
      variant="h3"
      sx={breakpointStyling.h1}
    >
      Awesome Projects
    </Typography>
    {addModalIsOpen && <AddProjectModal {...{addProject}} open={addModalIsOpen} closeModal={() => setAddModalIsOpen(false)}/>}
    <main onClick={() => addModalIsOpen && setAddModalIsOpen(false)}>
      <Box
        id="header-btns-container"
        className="flex space-between"
        sx={breakpointStyling.headerBtnsContainer}
      >
        <FormControl size='small'>
        <AddButton callback={() => setAddModalIsOpen(true)}/>
        </FormControl>
        <FormControl size='small'>
        <SortSelector currentSort={sortOrder} setSort={setSetOrder}/>
        </FormControl>
      </Box>
      <Grid
        container
        spacing={4}
        sx={breakpointStyling.cardsContainer}
      >
        {sortedProjects.map(project => (
          <Grid key={project.id}><ProjectCard projectData={project} deleteCallback={() => removeProject(project.id)} color={getRandomColor()}/></Grid>
        ))}
      </Grid>
    </main>
  </Card>
)}