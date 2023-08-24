import React, { useState } from 'react'
import "../../../EmployeeModule/EmployeeDetails/employeedetails1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CompanyDetails from './CompanyDetails';

function Companyinfo() {
    const [file, setFile] = useState();
    const [details, setDetails] = useState(true);

    function HandleNextDetails() {
        setDetails(false)

    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (<>
        {details ?
            <div className="flex justify-evenly pt-20 max-sm:flex-col-reverse max-sm:justify-normal max-sm:pt-3" >
                < div className=' max-sm:p-8'>
                    <div className='fill-personal font-bold text-xl '>Fill your Company Information</div>
                    <label className='flex flex-col  gap-1 text-xs'>Company Name
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Mobile
                        <div className='flex gap-3'>
                            <input type='text' value="+91" className='signup-input border border-black-950 w-10 h-8 ml-2' />
                            <input type='number' className='signup-input border border-black-950 w-60  h-8 ' />
                        </div>
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Address Line 1
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Address Line 2
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <div className="flex flex-row gap-5">
                        <label className='flex flex-col  gap-1 text-xs'>City
                            <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>State
                            <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Pin Code
                            <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                    </div>
                    <div className="continue-btn float-right px-5 py-2 mt-6 text-white" onClick={HandleNextDetails}>Continue <FontAwesomeIcon className='text-white continue-btn' icon={faArrowRight} color='white' /></div>
                </div >
                <div className="flex flex-col ">
                    <div className='font-bold  text-base '>Add your Company Logo</div>
                    <div className="profile-add-text flex flex-col relative max-sm:flex-row">
                        <input type="file" title="" className='choose-file-box-company' id="" accept=" image/jpeg, image/png" onChange={handleChange} />
                        <div style={{
                            backgroundImage: `url(${file})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "200px", height: "200px", borderRadius: "25px"
                        }}>
                        </div>
                    </div>
                </div>
            </div > :
            <div >
                {/* <Education /> */}
                <CompanyDetails />
            </div>
        }
    </>
    )
}

export default Companyinfo