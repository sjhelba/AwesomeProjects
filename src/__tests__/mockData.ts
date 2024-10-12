import { GithubProjectData } from '../utils/constantsAndTypes'

export const projectMockData: GithubProjectData = {
  id: 'l43kd4k-9384-4io2-n5k4-jk20fn9x04nb',
  name: 'Mock',
  url: 'https://github.com/forTesting/mock',
  rating: 4,
  created_at: '2024-09-19T14:02:00.211Z'
}

export const mockLocalStorageValue = {
  '1342d001-2871-4e17-9f47-979815b825d0':
    '{"id":"1342d001-2871-4e17-9f47-979815b825d0","name":"Jest","url":"https://github.com/facebook/jest","rating":3,"created_at":"2021-11-21T13:12:55.403Z"}',
  'a87e8618-7392-4ac2-b4d0-c6b9b8fb3304':
    '{"id":"a87e8618-7392-4ac2-b4d0-c6b9b8fb3304","name":"React","url":"https://github.com/facebook/react","rating":5,"created_at":"2023-11-19T13:46:36.211Z"}',
  '836e6ac0-4c58-4392-8795-650108e67b3c':
    '{"id":"836e6ac0-4c58-4392-8795-650108e67b3c","name":"AngularJs","url":"https://github.com/angular/angular.js?","rating":2,"created_at":"2022-11-19T13:47:18.933Z"}',
  '22c9861a-5c65-4275-bb15-165938896ae9':
    '{"id":"22c9861a-5c65-4275-bb15-165938896ae9","name":"Docker","url":"https://github.com/docker","rating":4,"created_at":"2023-03-19T13:47:01.492Z"}',
  'c3da7eab-ef0e-4868-9875-bebef24fd706':
    '{"id":"c3da7eab-ef0e-4868-9875-bebef24fd706","name":"Playwright","url":"https://github.com/microsoft/playwright","rating":1,"created_at":"2024-01-10T10:11:49.460Z"}',
  '01516ba7-0556-4c78-ba72-2a93865e5bfb':
    '{"id":"01516ba7-0556-4c78-ba72-2a93865e5bfb","name":"Selenium","url":"https://github.com/SeleniumHQ/selenium","rating":1,"created_at":"2023-12-01T11:46:49.460Z"}',
  'b62fe100-71b6-4ce0-a8b0-3f365d99621f':
    '{"id":"b62fe100-71b6-4ce0-a8b0-3f365d99621f","name":"Django","url":"https://github.com/django/django","rating":5,"created_at":"2023-11-20T13:47:08.026Z"}',
  'a2f4e2e7-33ef-461c-a846-da88d6d4b536':
    '{"id":"a2f4e2e7-33ef-461c-a846-da88d6d4b536","name":"NodeJs","url":"https://github.com/nodejs/node","rating":3,"created_at":"2023-11-19T13:47:12.795Z"}'
}

export const getMockProjectsList = (differBy?: 'time' | 'date') => [
  {
    id: 'a',
    name: 'React',
    url: 'www.mockUrl.com',
    rating: 1,
    created_at: '2023-11-19T13:46:36.211Z'
  },
  {
    id: 'b',
    name: 'Node',
    url: 'www.mockUrl.com',
    rating: 3,
    created_at:
      differBy === 'time'
        ? '2023-11-19T13:46:37.211Z'
        : '2023-11-20T13:46:36.211Z'
  },
  {
    id: 'c',
    name: 'Jest',
    url: 'www.mockUrl.com',
    rating: 5,
    created_at:
      differBy === 'time'
        ? '2023-11-19T13:56:36.211Z'
        : '2024-11-19T13:46:36.211Z'
  }
]
