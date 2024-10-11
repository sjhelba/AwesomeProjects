import * as React from "react"
import { Dialog, IconButton } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear'

interface AddProjectModalProps {
  open: boolean
  closeCallback: () => void
}

export const AddProjectModal = ({open, closeCallback}: AddProjectModalProps) => {

  return (
    <Dialog {...{open}} data-testid="add-proj-modal">
       <IconButton aria-label="close" size="small" data-testid="close-modal-btn" onClick={closeCallback}><ClearIcon /></IconButton>
      <h3>Add an Awesome Project</h3>
    </Dialog>
  )
}