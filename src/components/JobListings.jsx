import { useState, useEffect } from 'react';
import JobList from './joblist';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import getApiUrl from '../../getApiUrl';
const JobListings = ({ isHome = false }) => {
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);

   /* */
   useEffect(() => {
      const fetchJobs = async () => {
         const limit = isHome ? 3 : null;
         try {
            const res = await fetch(`${getApiUrl()}/jobs?_limit=${limit}`);
            const data = await res.json();
            setJobs(data);
         } catch (error) {
            console.log('Error fetching data', error);
         } finally {
            setLoading(false);
         }
      };
      fetchJobs();
   }, [isHome]);

   return (
      <section className="bg-blue-50 px-4 py-10">
         <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
               {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
            {loading ? (
               <Spinner loading={loading} />
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {jobs.map((job) => (
                     <JobList key={job.id} job={job} />
                  ))}
               </div>
            )}
         </div>
      </section>
   );
};
JobListings.propTypes = {
   isHome: PropTypes.bool,
};
export default JobListings;
