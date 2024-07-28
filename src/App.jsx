import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs'
function App() {
   return (
      <>
         <Navbar />
         {/* <!-- Hero --> */}
         <Hero />
         {/* <!-- Developers and Employers --> */}
         <HomeCard />
         {/*  <!-- Browse Jobs --> */}
         <JobListings />
         {/*  <!-- View all jobs --> */}
         <ViewAllJobs />
      </>
   );
}

export default App
