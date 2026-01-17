import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/app/layouts/MainLayout'
import NotFoundLayout from '@/app/layouts/NotFoundLayout'
import HomePage from '@/pages/home-page'
import VehiclesPage from '@/pages/vehicles-page'
import DetailsPage from '@/pages/details-page'
import AboutPage from '@/pages/about-page'
import ContactsPage from '@/pages/contacts-page'
import NotFoundPage from '@/pages/not-found-page'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'vehicles',
        element: <VehiclesPage />,
      },
      {
        path: 'details',
        element: <DetailsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundLayout />,
    children: [
      {
        index: true,
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router