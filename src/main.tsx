import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client';
import Root from './components/Root/Root.tsx';
import Categories from './components/Categories/Categories.jsx';
import YogaAsanas from './components/YogaAsanas/YogaAsanas.jsx';
import CreateAsana from './components/CreateAsana/CreateAsana.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.ts';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    ErrorBoundary: ErrorPage,
    Component: Root,
    children: [
      { path: "/", Component: Categories },
      { path: "yoga-asanas/:category", Component: YogaAsanas },
      { path: "add-asana", Component: CreateAsana },
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

