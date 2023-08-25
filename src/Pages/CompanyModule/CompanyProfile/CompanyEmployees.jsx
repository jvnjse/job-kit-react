import { faArrowAltCircleRight, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import employeeprofile from "../../../Assets/Images/employeeprofile.png"
function CompanyEmployees() {
    const [it, setit] = useState(true)
    const [sales, setsales] = useState(false)
    const [design, setdesign] = useState(false)


    const handleIT = () => {
        setit(!it)

    };
    const handleSales = () => {
        setsales(!sales)

    };
    const handleDesign = () => {
        setdesign(!design)

    };
    return (
        <div className=' px-8 py-4'>
            <div className='flex justify-between'>
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Employees</div>
                <div className=' text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer'>Add Employees</div>
            </div>
            <div className='mt-5'>
                <div className=' select-none  border-b-2 border-gray-300' onClick={handleIT}>IT & Development {it ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {it &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                    </div>
                }
                <div className='mt-3 select-none border-b-2 border-gray-300' onClick={handleSales}>Sales {sales ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {sales &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                    </div>
                }
                <div className='mt-3 select-none border-b-2 border-gray-300' onClick={handleDesign}>Design {design ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {design &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                        <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CompanyEmployees