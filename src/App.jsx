import React from 'react';
import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import Error404 from './components/404';
//setting up react router for navigating through the pages
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
         <Route index element={<HomePage />} />
         <Route path="/jobs" element={<JobsPage />} />
         <Route path="*" element={<Error404 />} />
      </Route>
   )
);
const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
