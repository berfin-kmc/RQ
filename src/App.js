import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';

import SuperHeroes from './components/SuperHeroes';
import SuperheroDetail from './components/SuperheroDetail';

import ParalelQueries from './components/ParalelQueries';
import DynamicParalelQueries from './components/DynamicParalelQueries';

import DependentQueries from './components/DependentQueries';

import InfiniteQueries from './components/InfiniteQueries';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route element={<ParalelQueries />} path='/paralelqueries' />
      <Route element={<DynamicParalelQueries heroIDs={[1, 3]} />} path='/dynamicparalelqueries' />
      <Route element={<DependentQueries email="jane_doe@example.com" />} path='/dependentqueries' />
      <Route element={<AddUser />} path='/users' />
      <Route element={<EditUser />} path='/edituser' />
      <Route element={<InfiniteQueries />} path='/colors' />
      <Route element={<SuperHeroes />} path='/superheroes' />
      <Route element={<SuperheroDetail />} path='/rqsuperheroes/:id' />
    </Route>
  ))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
