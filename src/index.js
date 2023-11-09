import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import App from '../src/App'
import AboutMeComponent from '../src/component/about';
import ExperienceComponent from "../src/component/experience";
import ProjectComponent from "../src/component/projects";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />
    },
    {
        path: "about",
        element: <AboutMeComponent />
    },
    {
        path: "experience",
        element: <ExperienceComponent />
    },
    {
        path: "projects",
        element: <ProjectComponent />
    },
])

export default function Main() {
  return (
    <div>Main</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
