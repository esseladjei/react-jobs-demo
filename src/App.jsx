import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Developers from './components/HomeCard'
import BrowserJobs from './components/BrowserJobs'
import ViewAllJobs from './components/ViewAllJobs'
function App() {
   return (
      <>
         <Navbar />
         {/* <!-- Hero --> */}
         <Hero />
         {/* <!-- Developers and Employers --> */}
         <Developers />
         {/*  <!-- Browse Jobs --> */}
         <BrowserJobs />
         {/*  <!-- View all jobs --> */}
         <ViewAllJobs />
      </>
   )
}

export default App
