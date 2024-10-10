import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import * as React from "react"
import { GithubProjectData } from "../utils/constantsAndTypes"
import ClearIcon from '@mui/icons-material/Clear'
import StarIcon from '@mui/icons-material/Star'

interface ProjectCardProps {
  projectData: GithubProjectData
}

export const ProjectCard = ({projectData}: ProjectCardProps) => {

  return (
    <Card data-testid="proj-card">
      <CardContent>
      <CardActions>
        <IconButton aria-label="delete" size="small"><ClearIcon /></IconButton>
      </CardActions>
      <a href={projectData.url} target="_blank" rel="noreferrer" data-testid="card-action-area">
        <Typography variant="h2">{projectData.name}</Typography>
        <Box sx={{display: 'flex'}}>
          {[...Array(projectData.rating)].map((_, index) => (
            <StarIcon key={index} data-testid="star" />
          ))}
        </Box>
      </a>
      </CardContent>
    </Card>
  )
}