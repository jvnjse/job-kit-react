import React, { useState } from 'react'
import CSidePanel from './CSidePanel';
import CompanyMain from './CompanyMain';
import CompanyEmployees from './CompanyEmployees';
import CompanyJobs from './CompanyJobs';
import JobApplicants from './JobApplicants';
import CompanyManage from './CompanyManage';
import Nav from "../../EmployeeModule/Nav/Nav"

function CompanyProfile() {
    const [activeComponent, setActiveComponent] = useState("profile");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };
    function closetoggleBox() {
        setIsOpen(false);
    };


    return (<>
        <Nav />
        <div className='flex'>
            <CSidePanel handleLinkClick={handleLinkClick} toggleBox={toggleBox} isOpen={isOpen} />
            <div className=' flex-1 h-screen overflow-hidden overflow-y-scroll rounded-ss-2xl'>
                {activeComponent === 'profile' && <CompanyMain closetoggleBox={closetoggleBox} />}
                {activeComponent === 'employees' && <CompanyEmployees closetoggleBox={closetoggleBox} />}
                {activeComponent === 'jobs' && <CompanyJobs />}
                {activeComponent === 'job-applicants' && <JobApplicants closetoggleBox={closetoggleBox} />}
                {activeComponent === 'manage' && <CompanyManage closetoggleBox={closetoggleBox} />}
            </div>
        </div>
    </>
    )
}

export default CompanyProfile