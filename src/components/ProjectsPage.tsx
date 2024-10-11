import * as React from "react"
import { initialGithubProjects, GithubProjectData, SortOption } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Alert, Box, Grid2 as Grid, Paper, Snackbar, Typography } from "@mui/material"
import { useState } from "react"

export const ProjectsPage = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [toastIsActive, setToastIsActive] = useState(false)
  const [projects, setProjects] = useState(initialGithubProjects)
  const [sortOrder, setSetOrder] = useState<SortOption>(SortOption.NONE)
  const toastCloseHandler = () => {
    setToastIsActive(false)
  }
  const removeProject = (projectId: string) => {
    setProjects(currentProjects => currentProjects.filter(project => project.id !== projectId))
  }
  const addProject = (project: GithubProjectData) => {
    setProjects(currentProjects => [...currentProjects, project])
    setToastIsActive(true)
  }
  const sortedProjects = (sortOrder === SortOption.RATING) ? projects.sort((a, b) => b.rating - a.rating)
    : (sortOrder === SortOption.CREATED_AT) ? projects.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
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