import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import * as React from "react"

export const AddButton = () => {

  return (
    <Button data-testid="add-btn" variant="contained" startIcon={<AddIcon />}>Add</Button>
  )
}