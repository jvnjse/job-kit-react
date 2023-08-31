import React, { useState } from 'react'
import Nav from '../EmployeeModule/Nav/Nav';
import EmployerRequest from './EmployerRequest';
import AdminProfile from './AdminProfile';
import CompanyRequest from './CompanyRequest';
import ReportedIssues from './ReportedIssues';
import AdSidePanel from './AdSidePanel';

function AdminMain() {
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
    return (
        <>
            <Nav />
            <div className='flex'>
                <AdSidePanel handleLinkClick={handleLinkClick} toggleBox={toggleBox} isOpen={isOpen} />
                <div className=' flex-1 h-screen overflow-hidden overflow-y-scroll rounded-ss-2xl'>
                    {activeComponent === 'profile' && <AdminProfile closetoggleBox={closetoggleBox} />}
                    {activeComponent === 'employees' && <EmployerRequest closetoggleBox={closetoggleBox} />}
                    {activeComponent === 'jobs' && <CompanyRequest />}
                    {activeComponent === 'job-applicants' && <ReportedIssues closetoggleBox={closetoggleBox} />}
                </div>
            </div>
        </>
    )
}

export default AdminMain