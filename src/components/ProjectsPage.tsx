import * as React from "react"
import { GithubProjectData, SortOption } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Alert, Box, Grid2 as Grid, Paper, Snackbar, Typography } from "@mui/material"
import { useState } from "react"

const getProjectsFromLocalStorage = () => Object.values({...localStorage}).map(value => JSON.parse(value)) as GithubProjectData[]

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
  const sortedProjects = (sortOrder === SortOption.RATING_DESC) ? projects.sort((a, b) => b.rating - a.rating)
    : (sortOrder === SortOption.RATING_ASC) ? projects.sort((a, b) => a.rating - b.rating)
    : (sortOrder === SortOption.CREATED_AT_DESC) ? projects.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    : (sortOrder === SortOption.CREATED_AT_ASC) ? projects.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
    : projects

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
          <Grid key={project.id}><ProjectCard projectData={project} deleteCallback={() => removeProject(project.id)}/></Grid>
        ))}
      </Grid>
    </main>
  </Paper>
)}