import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import Error404 from './components/404';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
const App = () => {
   //add new job
   const addJob = async (newJob) => {
     await fetch('/api/jobs', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newJob),
      });
      return;
   };

   //delete new job
   const deleteJob = async (id) => {
      await fetch(`/api/jobs/${id}`, {
         method: 'DELETE',
      });
      return;
   };


const updateJob = async(job)=>{
  await fetch(`/api/jobs/${job.id}`, {
       method: 'PUT',
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(job),
    });
    return;
}

   //setting up react router for navigating through the pages
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route
               path="/jobs/:id"
               element={<JobPage deleteJob={deleteJob} />}
               loader={jobLoader}
            />
            <Route
               path="/add-job"
               element={<AddJobPage addJobSubmit={addJob} />}
            />
            <Route
               path="/edit-job/:id"
               element={<EditJobPage updateJobSubmit={updateJob} />}
               loader={jobLoader}
            />

            <Route path="*" element={<Error404 />} />
         </Route>
      )
   );
   return <RouterProvider router={router} />;
};

export default App;
