import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pvp from './components/Pvp'
import Pvc from './components/Pvc'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/>  <Home/> </>
    },
    {
      path: '/pvp',
      element: <> <Navbar/>  <Pvp/> </>
    },
    {
      path: '/pvc',
      element: <> <Navbar/>  <Pvc/> </>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
