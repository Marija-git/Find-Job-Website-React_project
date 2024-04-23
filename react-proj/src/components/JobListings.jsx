
 //import jobs  from '../jobs.json' //ovde sam koristila podatke preko json fajla
// sada korisitm podatke sa API i stavljam ih u state
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {

    //const jobListings = isHome ? jobs.slice(0,3) : jobs;

    //create state now: (prvi arg-stanje,drugi funkcija koja update state)
    //prvo je state prazan niz(default value), kada posaljemo request onda se popuni podacima
    const [jobs, setJobs] = useState([]);
    const [loading,setLoading] = useState(true); //kada uradim fatch-ing hocemo da se promeni u false

    //fatching - sa useEffect
    //1.function,2.dependency array(kad god se promeni podaci u njemu,useEffect se pokrece)
    useEffect(() =>{
      const fetchJobs = async () => 
      {
        const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'
        try
        {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch(error)
        {
          console.log('Error fatching data',error);
        } finally 
        {
          setLoading(false);
        }       
      }

      fetchJobs();
    }, []);



  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recenet Jobs' : 'Browse Jobs'}
        </h2>
        
          {loading ? <Spinner loading={loading} /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=>(
            <JobListing key={job.id} job={job}/>
          ) )}  </div> }
         
          
        
       
      </div>
    </section>
  )
}

export default JobListings