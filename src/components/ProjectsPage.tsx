import * as React from "react"
import { initialGithubProjects } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Box, Grid2 as Grid, Paper, Typography } from "@mui/material"
import { useState } from "react"

export const ProjectsPage = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [projects, setProjects] = useState(initialGithubProjects)
  const removeProject = (projectId: string) => {
    setProjects(currentProjects => currentProjects.filter(project => project.id !== projectId))
  }

return (
  <Paper elevation={1} data-testid="projects-page">
    <Typography variant="h1">Awesome Projects</Typography>
    {addModalIsOpen && <AddProjectModal open={addModalIsOpen} closeCallback={() => setAddModalIsOpen(false)}/>}
    <main onClick={() => addModalIsOpen && setAddModalIsOpen(false)}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <AddButton callback={() => setAddModalIsOpen(true)}/>
        <SortSelector />
      </Box>
      <Grid container>
        {projects.map(project => (
          <Grid key={project.id}><ProjectCard projectData={project} deleteCallback={() => removeProject(project.id)}/></Grid>
        ))}
      </Grid>
    </main>
  </Paper>
)}