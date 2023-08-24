import React, { useState } from 'react'
import CSidePanel from './CSidePanel';
import CompanyMain from './CompanyMain';
import CompanyEmployees from './CompanyEmployees';
import CompanyJobs from './CompanyJobs';
import JobApplicants from './JobApplicants';
import CompanyManage from './CompanyManage';

function CompanyProfile() {
    const [activeComponent, setActiveComponent] = useState("profile");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);
    };


    return (
        <div className='flex'>
            <CSidePanel handleLinkClick={handleLinkClick} />
            <div className=' flex-1 h-screen overflow-hidden overflow-y-scroll '>
                {activeComponent === 'profile' && <CompanyMain />}
                {activeComponent === 'employees' && <CompanyEmployees />}
                {activeComponent === 'jobs' && <CompanyJobs />}
                {activeComponent === 'job-applicants' && <JobApplicants />}
                {activeComponent === 'manage' && <CompanyManage />}
            </div>
        </div>
    )
}

export default CompanyProfile