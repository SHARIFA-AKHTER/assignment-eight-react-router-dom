import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import Statistics from './components/Statistics/Statistics';
import ListedGadgets from './components/ListedGadgets/ListedGadgets';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail></GadgetDetail>,
        loader: () =>fetch('./gadgetsData.json')
      },
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'listedGadgets',
        element:<ListedGadgets></ListedGadgets>
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>,
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
