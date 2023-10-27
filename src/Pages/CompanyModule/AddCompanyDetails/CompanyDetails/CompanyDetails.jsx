import React, { useState } from 'react'
import "../../../EmployeeModule/EmployeeDetails/employeedetails1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUpload } from '@fortawesome/free-solid-svg-icons'
import EmployeeDetailsAdd from "./EmployeeDetailsAdd"

function CompanyDetails() {
    const [file, setFile] = useState();
    const [details, setDetails] = useState(false);

    function HandleNextDetails() {
        setDetails(false)

    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (<>
        {details ?
            <div>
                <div className=' text-center text-2xl font-semibold text-primary_blue'>Company Information</div>
                <div className=' flex justify-evenly pt-4 max-sm:flex-col-reverse max-sm:px-5'>
                    <div>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Type
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Departments
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Business Activity
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-16 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Website
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <div className="continue-btn float-right px-5 py-2 mt-6 " onClick={HandleNextDetails}>Continue <FontAwesomeIcon icon={faArrowRight} className='text-blue-50' color='#ffffff' /></div>
                    </div>
                    <div>
                        <label className=' flex  flex-col  items-start rounded-xl bg-gray-200 px-10 py-10 max-sm:p-0'>
                            Choose a Valid File for Verification
                            <div>
                                <FontAwesomeIcon className='text-6xl' icon={faUpload} />
                            </div>
                            <div className=' mt-5'>
                                <input
                                    type="file"
                                    title=""
                                    className='choose-file-box-company-information'
                                    id=""
                                    accept="application/pdf" onChange={handleChange} />
                            </div>
                        </label>
                    </div>
                </div>
            </div> :
            <div >
                <EmployeeDetailsAdd />
            </div>
        }
    </>
    )
}

export default CompanyDetails