import * as React from "react"
import { Alert, Button, Dialog, IconButton, InputLabel, Slider, Snackbar, TextField } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from "react"
import { GithubProjectData } from "../utils/constantsAndTypes"

interface AddProjectModalProps {
  open: boolean
  closeModal: () => void
  addProject: (project: GithubProjectData) => void
}

export const AddProjectModal = ({open, closeModal, addProject}: AddProjectModalProps) => {
  const [repoPath, setRepoPath] = useState('')
  const [sliderRating, setSliderRating] = useState(1)
  const [toastIsActive, setToastIsActive] = useState(false)
  const [statusIsPending, setStatusIsPending] = useState(false)

  const submitHandler = () => {
    setStatusIsPending(true)
    fetch(`https://api.github.com/repos/${repoPath}`)
      .then(res => res.json())
      .then(data => {
        if (data.status && data.status !== 200) throw 'err'
        const {id, name, created_at, svn_url: url} = data
        if (!id || !name || !created_at || !url)  throw 'err'

        addProject({id, name, created_at, url, rating: sliderRating})
        setStatusIsPending(false)
        closeModal()
      })
      .catch(() => {
        setStatusIsPending(false)
        setToastIsActive(true)
      })
  }
  const toastCloseHandler = () => {
    setToastIsActive(false)
  }

  return (
    <Dialog open={open} data-testid="add-proj-modal" fullWidth >
      <Snackbar
        open={toastIsActive}
        autoHideDuration={5000}
        onClose={toastCloseHandler}
        anchorOrigin={{ vertical:'top', horizontal: 'right' }}
      >
        <Alert
          onClose={toastCloseHandler}
          severity="error"
          variant="filled"
          className="alert"
        >
          The request was unsuccessful. Please check your input and try again.
        </Alert>
      </Snackbar>
      <div className="modal-content">
        <div className="flex flex-end">
          <IconButton aria-label="close" size="small" data-testid="close-modal-btn" onClick={closeModal}><ClearIcon /></IconButton>
        </div>
        <form>
          <h3>Add an Awesome Project</h3>
          <div className="input-container">
            <TextField
              name="repo path"
              placeholder="GitHub Repo"
              label="GitHub Repository"
              helperText={`Please use format: "{owner}/{repoName}". Eg: reduxjs/redux`}
              value={repoPath}
              disabled={statusIsPending}
              type="text"
              variant="outlined"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRepoPath(event.target.value);
              }}
            />
          </div>
          <InputLabel>Rating (1-5)</InputLabel>
          <div className="input-container">
            <Slider valueLabelDisplay="auto" marks step={1} min={1} max={5} value={sliderRating} onChange={(_, value) => setSliderRating(value as number)}></Slider>
          </div>
            <Button type="submit" disabled={statusIsPending || !repoPath} onClick={submitHandler} variant="contained">Submit</Button>
        </form>
      </div>
    </Dialog>
  )
}