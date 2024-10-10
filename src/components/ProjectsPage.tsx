import * as React from "react"
import { initialGithubProjects } from "../utils/constants"
import { AddProjectModal } from "./AddProjectModal"
import { AddButton } from "./AddButton"
import { SortSelector } from "./SortSelector"
import { ProjectCard } from "./ProjectCard"

export const ProjectsPage = () => {
  const addModalIsOpen = false

return (
  <div>
    {addModalIsOpen && <AddProjectModal />}
    <AddButton  />
    <SortSelector />
    {initialGithubProjects.map(project => (
        <ProjectCard key={project.id} />
    ))}
  </div>
)}