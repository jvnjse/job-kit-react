import React, { useRef, useState } from "react";
import Nav from "../Nav/Nav";
import Search from "./Search";
import Jobs from "./Jobs";
import JobsFilter from "./JobsFilter";
import { useNavigate } from 'react-router-dom';
import JobDescription from "./JobDescription";
import "./home.css"
import JobContext from "../../../Contexts/JobContext";



function Home() {
  const [jobdetailmodal, setJobDetailModal] = useState(false);
  const navigate = useNavigate();

  const doubleClickTimeout = useRef(null);

  const handleJobBoxDoubleClick = () => {
    navigate('/jobdetails');
  };

  const handleJobBoxClick = () => {
    setJobDetailModal(true);
  };

  const closemodal = () => {
    setJobDetailModal(false);
  };

  const handleBoxClick = () => {
    if (doubleClickTimeout.current) {
      clearTimeout(doubleClickTimeout.current);
      handleJobBoxDoubleClick();
    } else {
      doubleClickTimeout.current = setTimeout(() => {
        doubleClickTimeout.current = null;
        handleJobBoxClick();
      }, 300);
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
        <div className="flex">
          <JobsFilter />
          <Jobs />
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
