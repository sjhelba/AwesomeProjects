import * as React from "react"
import { initialGithubProjects } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Box, Grid2 as Grid, Paper, Typography } from "@mui/material"

export const ProjectsPage = () => {
  const addModalIsOpen = false

return (
  <Paper elevation={1} data-testid="projects-page">
    <Typography variant="h1">Awesome Projects</Typography>
    {addModalIsOpen && <AddProjectModal />}
    <main>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <AddButton />
        <SortSelector />
      </Box>
      <Grid container>
        {initialGithubProjects.map(project => (
          <Grid key={project.id}><ProjectCard projectData={project}/></Grid>
        ))}
      </Grid>
    </main>
  </Paper>
)}