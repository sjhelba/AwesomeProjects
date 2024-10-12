import * as React from "react"
import { getRandomColor, GithubProjectData, SortOption } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Alert, Box, Grid2 as Grid, Paper, Snackbar, Typography } from "@mui/material"
import { useState } from "react"

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
  <Paper elevation={1} data-testid="projects-page">
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
          sx={{ width: '100%' }}
        >
          {`Success! You've saved an awesome project!`}
        </Alert>
      </Snackbar>
    <Typography variant="h1">Awesome Projects</Typography>
    {addModalIsOpen && <AddProjectModal {...{addProject}} open={addModalIsOpen} closeModal={() => setAddModalIsOpen(false)}/>}
    <main onClick={() => addModalIsOpen && setAddModalIsOpen(false)}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <AddButton callback={() => setAddModalIsOpen(true)}/>
        <SortSelector currentSort={sortOrder} setSort={setSetOrder}/>
      </Box>
      <Grid container>
        {sortedProjects.map(project => (
          <Grid key={project.id}><ProjectCard projectData={project} deleteCallback={() => removeProject(project.id)} color={getRandomColor()}/></Grid>
        ))}
      </Grid>
    </main>
  </Paper>
)}