import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import "../employeedetails1.css"
import Skills from './Skills';


function Experience() {
    const [skillsview, setSkillsview] = useState(true)
    function HandleSkillDetails() {
        setSkillsview(false)

    }
    return (
        <>
            {skillsview ?
                <div>
                    <div className=' text-center text-2xl font-bold'>Experience</div>
                    <div className="flex justify-evenly max-sm:flex-col-reverse ">
                        <div className="flex flex-col border-r-2 flex-1 items-center max-sm:items-start max-sm:pl-16">
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className=' text-start pr-36 font-bold text-blue-800 ml-10'>Add Experience</div>
                            <div>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Job Position
                                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Organization Name
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
                                <div className="add-education-btn float-right mt-10 mr-64 px-6 py-1 "><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#ffffff", }} /> Add Experience</div>
                                <input type="file" className='education-choose-file mt-10 ml-5' accept=" image/jpeg, image/png" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="continue-btn w-36 float-right px-5 py-2 mt-16 mr-36" onClick={HandleSkillDetails} >Continue   <FontAwesomeIcon icon={faArrowRight} color='white' /></div>
                </div>
                : <>
                    <Skills />
                </>

            }
        </>

    )
}

export default Experience