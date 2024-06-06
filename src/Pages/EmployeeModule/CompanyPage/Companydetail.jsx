import React, { useState, useEffect } from 'react'
import Nav from "../Nav/Nav"
import companylogo from "../../../Assets/Images/companylogo.png"
import "./company.css"
import AboutCompany from './AboutCompany';
import CompanyJobs from './CompanyJobs';
import CompanyEmployee from './CompanyEmployee';
import Cookies from "js-cookie";
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';
import { useParams } from 'react-router-dom';


function Companydetail() {
    const [selectedTab, setSelectedTab] = useState('details');
    const [companydetails, setCompanydetails] = useState([])//added
    // const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    let { id } = useParams();
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }

    const GetCompanyDetails = () => {
        
        MakeApiRequest('get', `${config.baseUrl}company/company/${id}/`, headers)
            .then(response => {
                console.log(response)
                setCompanydetails(response[0])
               
            })
      
            .catch(error => {
            });
    }
    useEffect(() => {
        GetCompanyDetails()
    }, [])


    return (
        <div>
            <Nav />
            <div className=' py-20 px-32  max-sm:py-2 max-sm:px-2'>
                <div className=' flex gap-4'>
                    <div className=' w-20'>
                        <img src={companylogo} alt="" />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className=' text-3xl font-bold'>{ companydetails.company_name}</div>
                        <div className='flex gap-3'>
                        {companydetails.company_sectors && companydetails.company_sectors.map((sector) => (
                    // <div></div>
                    <div className='  border-2 rounded-xl px-2 hover:bg-primary_white cursor-pointer'>{sector}</div>
                ))}
                            {/* <div className=' border-2 rounded-xl px-2 hover:bg-primary_white cursor-pointer'>Company Sector</div>
                            <div className=' border-2 rounded-xl px-2 hover:bg-primary_white cursor-pointer'>Company Sector</div> */}
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
                {selectedTab === 'details' && <AboutCompany id={id} />}
                {selectedTab === 'jobs' && <CompanyJobs id={id} />}
                {selectedTab === 'employees' && <CompanyEmployee id={id} />}
            </div>





        </div>
    )
}

export default Companydetail