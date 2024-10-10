import * as React from "react"
import { ProjectsPage } from "./components/ProjectsPage"
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => (
  <div>
    <CssBaseline />
    <ProjectsPage />
  </div>
)

export default App