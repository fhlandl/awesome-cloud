import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import MyRoot from './pages/MyRoot.tsx';
import Trash from './pages/Trash.tsx';
import DirectoryDetail from './pages/DirectoryDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/drive/root', element: <MyRoot /> },
      { path: '/drive/dirs/*', element: <DirectoryDetail /> },
      { path: '/trash', element: <Trash /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
