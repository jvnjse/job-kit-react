import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import Search from "./Search";
import Jobs from "./Jobs";
import JobsFilter from "./JobsFilter";
import { useLocation, useNavigate } from 'react-router-dom';
import JobDescription from "./JobDescription";
import "./home.css"
import JobContext from "../../../Contexts/JobContext";
import JobBox from "./JobBox";
import MakeApiRequest from "../../../Functions/AxiosApi";
import config from "../../../Functions/config";
import Cookies from "js-cookie";

function Home() {
  const [jobdetailmodal, setJobDetailModal] = useState(false);
  const [categoryjobs, setCategoryJobs] = useState([])
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const location = useLocation();
  const access_token = Cookies.get('access_token')

  const headers = {
    'Authorization': `Bearer ${access_token}`
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    const fetchData = async () => {
      try {
        const response = await MakeApiRequest('get', `${config.baseUrl}company/jobs-by-category-and-skills/?category_id=${category}`, headers);
        setCategoryJobs(response);
        setError(null); // Reset error state on successful response
      } catch (error) {
        console.error("Error fetching job categories:", error);
        setError(error.response.data.error); // Set error message from the response
      }
    };
    fetchData();
  }, [location.search]);

  const doubleClickTimeout = useRef(null);

  const handleJobBoxDoubleClick = (id) => {
    navigate(`/employee/jobdetails?id=${id}/`);
  };

  const handleJobBoxClick = () => {
    setJobDetailModal(true);
  };

  const closemodal = () => {
    setJobDetailModal(false);
  };

  const handleBoxClick = (id) => {
    if (window.innerWidth < 1000) {
      navigate(`/employee/jobdetails?id=${id}/`);//added
    } else {
      if (doubleClickTimeout.current) {
        clearTimeout(doubleClickTimeout.current);
        handleJobBoxDoubleClick(id);
      } else {
        doubleClickTimeout.current = setTimeout(() => {
          doubleClickTimeout.current = null;
          handleJobBoxClick();
        }, 300);
      }
    }
  };

  return (
    <JobContext.Provider
    value={{
      handleBoxClick
    }}
  >
    <div className="flex flex-col">
      <Nav />
      <Search />
      {error && <div className="text-red-600 text-center w-full flex flex-wrap justify-center items-center p-7 gap-10">{error}</div>} {/* Display error message in the center */}
      <div className="flex">
        <JobsFilter />
        <div className='w-full flex flex-wrap justify-center items-center p-7 gap-10 '>
          {categoryjobs.length === 0 && !error ? (
            <div className="text-center">No jobs available</div>
          ) : (
            categoryjobs.map(job => (
              <JobBox key={job.id} job={job} click={()=>{handleBoxClick(job.id)}}/>
            ))
          )}
        </div>
      </div>
      {jobdetailmodal && (
        <div className="flex justify-center" onClick={closemodal}>
          <div className="absolute top-0 bg-neutral-700/70 w-full flex justify-center">
            <JobDescription />
          </div>
        </div>
      )}
    </div>
  </JobContext.Provider>
);
}

export default Home;

