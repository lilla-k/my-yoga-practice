import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client';
import Root from './components/Root/Root.tsx';
import SequencesPage from './components/SequencesPage/SequencesPage.js';
import AsanasPage from './components/AsanasPage/AsanasPage.js';
import CreateAsanaPage from './components/CreateAsanaPage/CreateAsanaPage.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.ts';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    ErrorBoundary: ErrorPage,
    Component: Root,
    children: [
      { path: "/", Component: SequencesPage },
      { path: "yoga-asanas", Component: AsanasPage },
      { path: "add-asana", Component: CreateAsanaPage },
    ]
  },
]);

const root = document.getElementById('root');
if (root){
  createRoot(root).render(
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
)}

