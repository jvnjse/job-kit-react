import React, { useState } from 'react'
import Nav from "../Nav/Nav"
import companylogo from "../../../Assets/Images/companylogo.png"
import "./company.css"
import AboutCompany from './AboutCompany';
import CompanyJobs from './CompanyJobs';
import CompanyEmployee from './CompanyEmployee';

function Companydetail() {
    const [selectedTab, setSelectedTab] = useState('details');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <Nav />
            <div className=' py-20 px-32'>
                <div className=' flex gap-4'>
                    <div className=' w-20'>
                        <img src={companylogo} alt="" />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className=' text-3xl font-bold'>Company Name</div>
                        <div className='flex gap-3'>
                            <div className=' border-2 rounded-xl px-2 hover:bg-primary_white cursor-pointer'>Company Sector</div>
                            <div className=' border-2 rounded-xl px-2 hover:bg-primary_white cursor-pointer'>Company Sector</div>
                        </div>
                    </div>
                </div>
                <div class=" mt-6 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                        <li class="mr-2 company-tab" >
                            <button
                                className={`inline-block p-2 border-b-4 rounded-t-lg ${selectedTab === 'details' ? ' border-primary_blue' : 'border-transparent'
                                    }`}
                                onClick={() => handleTabClick('details')}
                            >
                                Company Details</button>
                        </li>
                        <li class="mr-2 company-tab" >
                            <button
                                className={`inline-block p-2 border-b-4 rounded-t-lg ${selectedTab === 'jobs' ? ' border-primary_blue' : 'border-transparent'
                                    }`}
                                onClick={() => handleTabClick('jobs')}
                            >
                                Jobs</button>
                        </li>
                        <li class="mr-2 company-tab" >
                            <button
                                className={`inline-block p-2 border-b-4 rounded-t-lg ${selectedTab === 'employees' ? ' border-primary_blue' : 'border-transparent'
                                    }`}
                                onClick={() => handleTabClick('employees')}
                            >
                                Employees</button>
                        </li>
                    </ul>
                </div>
                {selectedTab === 'details' && <AboutCompany />}
                {selectedTab === 'jobs' && <CompanyJobs />}
                {selectedTab === 'employees' && <CompanyEmployee />}
            </div>





        </div>
    )
}

export default Companydetail