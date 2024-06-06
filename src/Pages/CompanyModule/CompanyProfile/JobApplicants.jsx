import React, { useEffect, useState } from 'react'
import imageemployee from "../../../Assets/Images/employeeprofile.png"
import employeeprofile from "../../../Assets/Images/employeeprofile.png"
import EmployeeDescription from '../Home/EmployeeDescription';
import { useNavigate } from "react-router-dom"
import MakeApiRequest from "../../../Functions/AxiosApi";
import config from "../../../Functions/config";
import Cookies from "js-cookie";

function JobApplicants() {
    const access_token = Cookies.get("access_token");
    const [employeesByJob, setEmployeesByJob] = useState({});
    const user_id = Cookies.get('user_id')
    const [employeedetailmodal, setemployeeDetailModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    const closemodal = () => {
        setemployeeDetailModal(false);
    };

    const handleemployeeBoxClick = () => {
        if (window.innerWidth < 1000) {
            navigate('/company/employeedetails');
        } else {
            setemployeeDetailModal(true);
        }
    };

    const handleEmployeeClick = (id) => {
        navigate(`/company/employeedetails/${id}`)

    }
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }

    useEffect(() => {
        GetAppliedEmployees ()
        Getjobs ()
    }, []);
    const Getjobs = () => {
        MakeApiRequest('get', `${config.baseUrl}company/post/job/${user_id}/`, headers)
        .then(response => {
            console.log(response)
            setJobs(response)
            response.forEach(job => {
                GetAppliedEmployees(job.id);
            });
            // setEmployeeid(response)
           
           
        })
        .catch(error => {
            console.log(error)
        });

    }

    const GetAppliedEmployees = (jobId) => {
        MakeApiRequest('get', `${config.baseUrl}employee/get-employees-for-job-vacancy/${jobId}/`, headers)
        .then(response => {
            console.log(response)
            setEmployeesByJob(prevState => ({
                ...prevState,
                [jobId]: response
            }));
        })
        .catch(error => {
            console.log(error)
        });
    }
    // const GetAppliedjobs = () => {
    //     MakeApiRequest('get', `${config.baseUrl}employee/get-employees-for-job-vacancy/1/`, headers)
    //     .then(response => {
    //         console.log(response)
    //         setEmployees(response)
            
    //         // setEmployeeid(response)
           
           
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });

    // } 


   
        // <div className=' px-8 py-4'>
        //     <div className='flex'>
        //         <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Job Applicants</div>
        //     </div>
        //     <div className="flex flex-col gap-4 mt-5">
        //     {jobs.map(job => (
        //             < // return (div key={job.id} className='bg-primary_white p-3 rounded-lg shadow-md'>
        //                 <div className='text-lg font-semibold'>{job.title}</div>
        //                 <div className='grid grid-cols-1 gap-4 mt-3'>
        //                     {employeesByJob[job.id] && employeesByJob[job.id].map(employee => (
        //                         <div key={employee.id} className='bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md cursor-pointer' onClick={() => handleEmployeeClick(employee.id)}>
        //                             <div className='w-14 h-14 rounded-xl'>
        //                                 <img src={imageemployee} alt="" className='object-cover mix-blend-multiply' />
        //                             </div>
        //                             <div className='flex flex-col'>
        //                                 <div className='text-base font-semibold'>{employee.full_name}</div>
        //                                 <div className='text-[10px] font-thin'>{employee.job_category_name}</div>
        //                                 <div className="text-[8px] text-green-600">Matches Your Job Description</div>
        //                                 <div className='text-xs font-thin'>{employee.employee_position}</div>
        //                             </div>
        //                         </div>
        //                     ))}
        //                       </div>
        //             </div>
        //         ))}  first

        return (
            <div className='px-8 py-4'>
                <div className='flex'>
                    <div className='text-2xl font-bold text-text_black_primary_color select-none'>Job Applicants</div>
                </div>
                <div className="flex flex-col gap-4 mt-5">
                    {jobs.map(job => (
                        <div key={job.id} className=' p-3 rounded-lg shadow-md'>
                            <div className='text-lg font-semibold'>{job.job_title}</div>
                            <div className='grid grid-cols-1 gap-4 mt-3'>
                                {employeesByJob[job.id] && employeesByJob[job.id].map(employee => (
                                    <div key={employee.id} className='bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max' onClick={() => handleEmployeeClick(employee.id)}>
                                        <div className='w-14 h-14 rounded-xl'>
                                            <img src={imageemployee} alt="" className='object-cover mix-blend-multiply' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-base font-semibold'>{employee.full_name}</div>
                                            <div className='text-[10px] font-thin'>{employee.job_category_name}</div>
                                            <div className="text-[8px] text-green-600">Matches Your Job Description</div>
                                            <div className='text-xs font-thin'>{employee.employee_position}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                {/* </div>
                {employeedetailmodal && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closemodal}>
                        <div className="bg-white p-8 rounded-lg">
                            <EmployeeDescription />
                        </div>
                    </div>
                )}
            </div>
        ) */}
               {/* {employees && 
                     employees.map(employee => (
                       <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                   <div className=' w-14 h-14 rounded-xl'>
                       <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                   </div>
                   <div className='flex flex-col'>
                       <div onClick={()=> handleemployeeClick(employee.id)} className=' text-base font-semibold'>{employee.full_name}</div>
                       <div className=' text-[10px] font-thin'>{employee.
job_category_name
}</div>
<div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                       <div className=' text-xs font-thin'>{employee.employee_position}</div>
                   </div>
               </div>
                     ))} */}
                {/* <div onClick={handleemployeeBoxClick} className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div> */}

            </div>
            {employeedetailmodal && (
                <div className="" onClick={closemodal}>
                    <div className="absolute top-0 left-0 bg-neutral-700/70 w-full flex justify-center">
                        {/* <employeeDescription />jshbjhbhjsbjb */}
                        <EmployeeDescription />
                    </div>
                </div>
            )}

        </div>
    )
}

export default JobApplicants