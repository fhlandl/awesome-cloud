import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import Trash from './pages/Trash.tsx';
import Drive from './pages/Drive.tsx';
import Login from './pages/Login.tsx';
import ProtectedRoute from './pages/ProtectedRoute.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';
import SignUp from './pages/SignUp.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
          { index: true, path: '/', element: <Home /> },
          { path: '/drive/dirs/:id', element: <Drive /> },
          { path: '/trash', element: <Trash /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
