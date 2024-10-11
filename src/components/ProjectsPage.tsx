import * as React from "react"
import { initialGithubProjects, SortOption } from "../utils/constantsAndTypes"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"
import { Box, Grid2 as Grid, Paper, Typography } from "@mui/material"
import { useState } from "react"

export const ProjectsPage = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [projects, setProjects] = useState(initialGithubProjects)
  const [sortOrder, setSetOrder] = useState<SortOption>(SortOption.NONE)
  const removeProject = (projectId: string) => {
    setProjects(currentProjects => currentProjects.filter(project => project.id !== projectId))
  }
  const sortedProjects = (sortOrder === SortOption.RATING) ? projects.sort((a, b) => b.rating - a.rating)
    : (sortOrder === SortOption.CREATED_AT) ? projects.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    : projects

return (
  <Paper elevation={1} data-testid="projects-page">
    <Typography variant="h1">Awesome Projects</Typography>
    {addModalIsOpen && <AddProjectModal open={addModalIsOpen} closeCallback={() => setAddModalIsOpen(false)}/>}
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