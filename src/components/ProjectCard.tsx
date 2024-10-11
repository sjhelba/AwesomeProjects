import * as React from "react"
import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import { GithubProjectData } from "../utils/constantsAndTypes"
import DeleteIcon from '@mui/icons-material/Delete'
import StarIcon from '@mui/icons-material/Star'

interface ProjectCardProps {
  projectData: GithubProjectData
  deleteCallback: () => void
}

export const ProjectCard = ({projectData, deleteCallback}: ProjectCardProps) => {

  return (
    <Card data-testid="proj-card" raised>
      <CardContent>
      <CardActions>
        <IconButton aria-label="delete" size="small" data-testid="delete-btn" onClick={deleteCallback}><DeleteIcon /></IconButton>
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