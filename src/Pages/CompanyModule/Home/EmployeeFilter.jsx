import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function EmployeeFilter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' w-1/4 px-8 pt-5 max-md:px-2'>
            <button
                className=" text-3xl text-purple-950 bg-white p-2 rounded-xl focus:outline-none sm:hidden"
                onClick={toggleBox}
            ><FontAwesomeIcon icon={faFilter} />

            </button>

            {isOpen && (
                <div className='z-50 px-3 py-4 absolute bg-white rounded-lg sm:hidden'>
                    <div className=''>
                        <div className=' flex flex-col text-sm mt-3'>
                            Location
                            <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                                <option value="" className=' text-text_black_secondary_color'>Location</option>
                                <option value="wwww" className=' text-text_black_secondary_color'>Location 1</option>
                                <option value="wwww" className=' text-text_black_secondary_color'>Location 2</option>
                                <option value="wwww" className=' text-text_black_secondary_color'>Location 3</option>
                                <option value="wwww" className=' text-text_black_secondary_color'>Location 4</option>
                            </select>
                        </div>
                        <div className=' flex flex-col text-sm mt-3'>
                            Experience
                            <input type="range" name="" id="" className='experience-input-range' />
                        </div>
                    </div>
                </div>

            )}
            <div className=' max-sm:hidden'>
                <div className=' flex flex-col text-sm mt-3'>
                    Location
                    <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                        <option value="" className=' text-text_black_secondary_color'>Location</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Location 1</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Location 2</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Location 3</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Location 4</option>
                    </select>
                </div>
                <div className=' flex flex-col text-sm mt-3'>
                    Experience
                    <input type="range" name="" id="" className='experience-input-range' />
                </div>
            </div>
        </div>
    )
}

export default EmployeeFilter