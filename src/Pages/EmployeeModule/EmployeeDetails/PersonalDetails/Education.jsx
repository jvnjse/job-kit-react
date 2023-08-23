import React, { useState } from 'react'
import "../../EmployeeDetails/employeedetails1.css"
import Experience from './Experience'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Education() {
    const [experienceview, setExperienceview] = useState(true)

    function HandleExperienceDetails() {
        setExperienceview(false)

    }
    return (
        <div>
            {experienceview ? <>
                <div className=' text-center text-2xl font-bold'>Education</div>
                <div className="flex justify-evenly max-sm:flex-col-reverse">
                    <div className="flex flex-col border-r-2 flex-1 items-center max-sm:items-start max-sm:pl-16">
                        <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div>
                        <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div>
                        <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className=' text-start pr-36 font-bold text-blue-800 ml-10'>Add Education</div>
                        <div>
                            <label className='flex flex-col gap-1 text-xs pl-10'>Course
                                <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                            </label>
                            <label className='flex flex-col gap-1 text-xs pl-10'>Institution Name
                                <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                            </label>
                            <div className="flex">
                                <label className='flex flex-col gap-1 text-xs pl-10'>From
                                    <input type='date' className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10'>To
                                    <input type='date' className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                </label>
                            </div>
                            <div className="add-education-btn float-right mt-10 mr-64 px-6 py-1 ">Add Education</div>
                            <input type="file" className='education-choose-file mt-10 ml-5' accept=" image/jpeg, image/png" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="continue-btn w-36 float-right px-5 py-2 mt-16 mr-36" onClick={HandleExperienceDetails}>Continue <FontAwesomeIcon icon={faArrowRight} color='white' /></div>
            </> :
                <>
                    <Experience />
                </>
            }

        </div>
    )
}


export default Education