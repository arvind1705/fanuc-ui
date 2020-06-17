import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { DashboardLayout,AuthLayout } from './layouts'
import { SignInView } from './views'
import { LandingPage } from './landing.page'
import { ToolView, Profile, Application, Plans } from './views'
export const routes = [
  {
    layout: DashboardLayout,
    subRoutes: [
      {
        exact:true,
        path: "/profile",
        component: Profile
      },
      {
        exact:true,
        path: "/",
        component: ToolView
      },
      {
        exact:true,
        path: "/application",
        component: Application
      },
      {
        exact:true,
        path: "/plans",
        component: Plans
      },
      

    ]
  },
  {
    layout: AuthLayout,
    subRoutes: [
      {
        exact: true,
        path: "/login",
        component: SignInView
      }]
  },

];