import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout, {loader as rootLoader, action as rootAction,} from '@/routes/RootLayout'
import NotFound from './pages/NotFound'
import Contact, { loader as contactLoader } from './routes/Contact'

import '@/styles/global.css';
import App from '@/app/App';
import ContactEdit, { action as contactEditAction } from './routes/ContactEdit';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
        {
        path: '/contacts/:contactId/edit',
        element: <ContactEdit />,
        loader: contactLoader,
        action: contactEditAction,
      },

    ]
  },
]);

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);