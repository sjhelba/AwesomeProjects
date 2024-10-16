export interface GithubProjectData {
  id: string
  name: string
  url: string
  rating: number
  created_at: string
}

export enum SortOption {
  NONE = '',
  CREATED_AT_DESC = 'created-desc-sort',
  CREATED_AT_ASC = 'created-asc-sort',
  RATING_DESC = 'rating-desc-sort',
  RATING_ASC = 'rating-asc-sort'
}

export const initialGithubProjects: GithubProjectData[] = [
  {
    id: 'a87e8618-7392-4ac2-b4d0-c6b9b8fb3304',
    name: 'React',
    url: 'https://github.com/facebook/react',
    rating: 5,
    created_at: '2023-11-19T13:46:36.211Z'
  },
  {
    id: 'a2f4e2e7-33ef-461c-a846-da88d6d4b536',
    name: 'NodeJs',
    url: 'https://github.com/nodejs/node',
    rating: 3,
    created_at: '2023-11-19T13:47:12.795Z'
  },
  {
    id: '836e6ac0-4c58-4392-8795-650108e67b3c',
    name: 'AngularJs',
    url: 'https://github.com/angular/angular.js?',
    rating: 2,
    created_at: '2022-11-19T13:47:18.933Z'
  },
  {
    id: 'b62fe100-71b6-4ce0-a8b0-3f365d99621f',
    name: 'Django',
    url: 'https://github.com/django/django',
    rating: 5,
    created_at: '2023-11-20T13:47:08.026Z'
  },
  {
    id: '1342d001-2871-4e17-9f47-979815b825d0',
    name: 'Jest',
    url: 'https://github.com/facebook/jest',
    rating: 3,
    created_at: '2021-11-21T13:12:55.403Z'
  },
  {
    id: '22c9861a-5c65-4275-bb15-165938896ae9',
    name: 'Docker',
    url: 'https://github.com/docker',
    rating: 4,
    created_at: '2023-03-19T13:47:01.492Z'
  },
  {
    id: '01516ba7-0556-4c78-ba72-2a93865e5bfb',
    name: 'Selenium',
    url: 'https://github.com/SeleniumHQ/selenium',
    rating: 1,
    created_at: '2023-12-01T11:46:49.460Z'
  },
  {
    id: 'c3da7eab-ef0e-4868-9875-bebef24fd706',
    name: 'Playwright',
    url: 'https://github.com/microsoft/playwright',
    rating: 1,
    created_at: '2024-01-10T10:11:49.460Z'
  }
]

const colorsList = [
  '#bbd3ff',
  '#afcd61',
  '#eb9f74',
  '#e899b3',
  '#acddf2',
  '#fece95',
  '#71e6e3',
  '#e7cffd',
  '#f67db5'
]

const minIndex = 0
const maxIndex = colorsList.length - 1
const getRandomColorIndex = () =>
  Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex
export const getRandomColor = () => colorsList[getRandomColorIndex()]
