import * as React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface AddButtonProps {
  callback: () => void
}

export const AddButton = ({ callback }: AddButtonProps) => {
  return (
    <Button
      onClick={callback}
      data-testid="add-btn"
      variant="contained"
      startIcon={<AddIcon />}
    >
      Add
    </Button>
  )
}
