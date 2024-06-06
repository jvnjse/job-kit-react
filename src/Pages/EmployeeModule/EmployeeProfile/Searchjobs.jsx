import React, { useState, useEffect } from 'react';
import JobBox from '../Home/JobBox';
import CompanyBox from '../Home/CompanyBox';
import Cookies from 'js-cookie';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [jobs, setJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
    const access_token = Cookies.get('access_token');
    const navigate = useNavigate();

    const headers = {
        'Authorization': `Bearer ${access_token}`
    };

    const fetchJobs = async () => {
        try {
            const response = await MakeApiRequest('get', `${config.baseUrl}company/search/jobs/?query=${searchQuery}`, headers);
            setJobs(response.jobs);
            setCompanies(response.companies);
        } catch (error) {
            console.error('Error fetching job listings:', error);
        }
    };

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            fetchJobs();
        } else {
            setJobs([]);
            setCompanies([]);
        }
    }, [searchQuery]);

    const handleJobBoxDoubleClick = (jobId) => {
        navigate(`/employee/jobdetails/?id=${jobId}/`);
    };

    return (
        <div>
            <div className='search-job-box flex justify-center items-center gap-5 px-10 py-16 max-sm:flex-col'>
                <div>
                    <div>
                        <input
                            type="text"
                            className='w-72 h-7 rounded-3xl text-xs py-1 px-2'
                            placeholder='Search Job Titles'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className=' flex justify-center items-center gap-5'>
                    <div
                        className='bg-violet-950 text-primary_white border-primary_white border rounded-s-2xl text-xs py-1 px-2'
                        onClick={fetchJobs}
                    >
                        Find Jobs
                    </div>
                </div>
            </div>

            {jobs.length > 0 && (
                <>
                    <h2 className="p-5 text-xl font-semibold mb-4">Job Listings</h2>
                    <div className='w-full flex flex-wrap justify-center items-center p-7 gap-10 '>
                        {jobs.map(job => (
                            <JobBox key={job.id} job={job} click={() => handleJobBoxDoubleClick(job.id)} />
                        ))}
                    </div>
                </>
            )}

            {companies.length > 0 && (
                <>
                    <h2 className="p-5 text-xl font-semibold mb-4">Company Listings</h2>
                    <div className='w-full flex flex-wrap justify-center items-center p-7 gap-10 '>
                        {companies.map(company => (
                            <CompanyBox key={company.id} company={company} />
                        ))}
                    </div>
                </>
            )}

            {jobs.length === 0 && companies.length > 0 && (
                <div className="text-center text-gray-500 mt-5">No jobs found.</div>
            )}

            {jobs.length > 0 && companies.length === 0 && (
                <div className="text-center text-gray-500 mt-5">No companies found.</div>
            )}

{jobs.length === 0 && companies.length === 0 && searchQuery.trim() !== '' && (
                <div className="text-center text-gray-500 mt-5">No jobs or companies found.</div>
            )}
        </div>
    );
}

export default Search;

