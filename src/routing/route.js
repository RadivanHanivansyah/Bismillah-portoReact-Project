import { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Project from "../pages/Project"
import Index from "../pages/Index";

const router = createBrowserRouter( [
    {
        path: "/",
        Component: Index,
        children: [
            { index: true, Component: HomePage },
            { path: "project", Component: Project }
        ]
    },
] )

export default router