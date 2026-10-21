import { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Project from "../pages/Project"

const router = createBrowserRouter( [
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/project",
        Component: Project
    }
] )

export default router