import MainLayout from './components/layouts/MainLayout'
import { Home } from './pages'

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]
