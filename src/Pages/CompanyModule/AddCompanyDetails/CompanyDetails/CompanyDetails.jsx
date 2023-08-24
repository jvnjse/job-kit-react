import React, { useState } from 'react'
import "../../../EmployeeModule/EmployeeDetails/employeedetails1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUpload } from '@fortawesome/free-solid-svg-icons'
import EmployeeDetailsAdd from "./EmployeeDetailsAdd"

function CompanyDetails() {
    // const [file, setFile] = useState();
    const [details, setDetails] = useState(true);

    function HandleNextDetails() {
        setDetails(false)

    }
    return (<>
        {details ?
            <div>
                <div className=' text-center text-2xl font-semibold text-primary_blue'>Company Information</div>
                <div className=' flex justify-evenly pt-4'>
                    <div>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Type
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Departments
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Business Activity
                            <input type='text' className='signup-input border border-black-950 w-64 h-16 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs mt-4'>Company Website
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <div className="continue-btn float-right px-5 py-2 mt-6 " onClick={HandleNextDetails}>Continue <FontAwesomeIcon icon={faArrowRight} className='text-blue-50' color='#ffffff' /></div>
                    </div>
                    <div>
                        <div className=' flex  flex-col  items-start rounded-xl bg-gray-200 px-10 py-10'>
                            {/* <img src="" alt="" /> */}
                            <div>
                                <FontAwesomeIcon className='text-6xl' icon={faUpload} />
                            </div>
                            <div className=' mt-5'>
                                <input type="file" title="" className='choose-file-box-company-information' id="" accept=" image/jpeg, image/png" onChange={"handleChange"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            <div >
                {/* <Education /> */}
                {/* <CompanyDetails /> */}
                <EmployeeDetailsAdd />
                {/* sdxhhjsdjh */}
            </div>
        }
    </>
    )
}

export default CompanyDetails