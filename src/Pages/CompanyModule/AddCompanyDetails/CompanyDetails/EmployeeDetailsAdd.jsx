import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import successicon from "../../../../Assets/Images/success.png"


function EmployeeDetailsAdd() {
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        if (success) {
            const redirectTimer = setTimeout(() => {
                window.location.href = "/company";
            }, 5000);

            return () => clearTimeout(redirectTimer);
        }
    }, [success]);


    return (<>
        <div className=' text-center text-2xl font-bold text-primary_blue pt-10'>Employee Details</div>
        <div className=' flex justify-evenly pt-4 max-md:flex-col max-md:gap-4'>
            <div className=' flex flex-col max-sm:px-4'>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col gap-1 text-xs mt-4'>Employee Name
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs mt-4 ml-4 max-sm:ml-0'>Employee Position
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                </div>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col  gap-1 text-xs mt-4'>Employee Email
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs mt-4 ml-4 max-sm:ml-0'>Phone
                        <div className='flex gap-3'>
                            <input type='text' value="+91" className='signup-input border border-black-950 w-10 h-8 ml-2' />
                            <input type='number' className='signup-input border border-black-950 w-60  h-8 ' />
                        </div>
                    </label>
                </div>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col  gap-1 text-xs mt-4'>Department of working
                        <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <div className='ml-4 bg-primary_blue text-text_white_primary_color self-end px-3 py-1 rounded-lg'> Add Employee</div>
                </div>
            </div>
            <div className=' flex flex-col gap-3 h-[350px] p-5 rounded-2xl bg-white justify-center overflow-y-scroll'>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
            </div>
        </div>
        <div className=' flex justify-center'>
            <div className="continue-btn ml-[200px] px-5 py-2 " onClick={() => setSuccess(true)}>Continue &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color='white' /></div>
        </div>
        {success &&
            <div className='success-bg-main absolute w-full h-full top-0 flex justify-center items-center'>
                <div className="success-box flex flex-col items-center w-6/12 h-3/6 bg-white rounded-lg max-sm:w-10/12">
                    <div className=' mt-10'>
                        <img src={successicon} alt="" />
                    </div>
                    <div className=' text-3xl font-semibold text-sky-900 mt-5'>Profile created!</div>
                    <div className=' text-1xl font-semibold text-sky-900 mt-5'>Get ready for exciting job opportunities ahead</div>
                </div>
            </div>
        }


    </>
    )
}

export default EmployeeDetailsAdd