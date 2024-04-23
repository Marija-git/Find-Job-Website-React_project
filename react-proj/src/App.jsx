import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage  from './pages/HomePage';
import JobsPage  from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter
(
  // kreiranje rute sa putanjom i na toj stranici(do koje vodi path) kreira zadati element
  createRoutesFromElements(
    <Route path='/' element ={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />     
      <Route path='*' element={<NotFoundPage/>} />   
  </Route>
  )
);

const App = ()=> {
  return <RouterProvider router = {router} />
}

export default App