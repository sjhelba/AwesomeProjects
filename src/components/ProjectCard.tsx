import * as React from "react"
import { Box, Card, CardActions, IconButton, Typography } from "@mui/material"
import { GithubProjectData } from "../utils/constantsAndTypes"
import DeleteIcon from '@mui/icons-material/Delete'
import StarIcon from '@mui/icons-material/Star'

interface ProjectCardProps {
  projectData: GithubProjectData
  deleteCallback: () => void
  color: string
}

export const ProjectCard = ({projectData, deleteCallback, color}: ProjectCardProps) => {

  const deleteButtonClickHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    deleteCallback()
  }

  return (
    <Card data-testid="proj-card" raised className="card" style={{backgroundColor: color}}>
      <a
          href={projectData.url}
          target="_blank"
          rel="noreferrer"
          data-testid="card-action-area"
      >
        <Typography component="h2" variant="h5" className="card-title">{projectData.name}</Typography>
        <CardActions className="card-actions">
          <IconButton
            aria-label="delete"
            size="small"
            data-testid="delete-btn"
            onClick={deleteButtonClickHandler}
          >
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </CardActions>
        <Box className="card-rating flex">
          {[...Array(projectData.rating)].map((_, index) => (
            <StarIcon key={index} data-testid="star" />
          ))}
        </Box>
      </a>
    </Card>
  )
}