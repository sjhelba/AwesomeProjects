import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initialGithubProjects } from './utils/constantsAndTypes'

if (!localStorage.length) {
  initialGithubProjects.forEach((project) =>
    localStorage.setItem(project.id, JSON.stringify(project))
  )
}
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
