import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client';
import Root from './components/Root/Root.tsx';
import Categories from './components/Categories/Categories.jsx';
import YogaPoses from './components/YogaPoses/YogaPoses.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", Component: Categories },
      { path: "yoga-poses", Component: YogaPoses },
    ]
  },
]);

const root = document.getElementById('root');
if (root){
  createRoot(root).render(
  <RouterProvider router={router} />
)}

