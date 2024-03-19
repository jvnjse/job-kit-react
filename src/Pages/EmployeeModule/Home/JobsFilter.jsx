import React, { useState } from 'react'
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function JobsFilter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' w-1/4 px-8 pt-5 max-md:px-5'>
            <button
                className=" text-3xl text-purple-950 bg-white p-2 rounded-xl focus:outline-none sm:hidden"
                onClick={toggleBox}
            ><FontAwesomeIcon icon={faFilter} />

            </button>

            {
                isOpen ? (
                    <div className=" z-50 absolute">
                        <div className=' bg-white px-7 py-3 rounded-xl sm:hidden'>
                            <div className=' flex flex-col text-sm mt-2'>
                                Category
                                <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                                    <option value="" className=' text-text_black_secondary_color'>Category</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Category 1</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Category 2</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Category 3</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Category 4</option>
                                </select>
                            </div>
                            <div className=' flex flex-col text-sm mt-3'>
                                Job Type
                                <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                                    <option value="" className=' text-text_black_secondary_color'>Job Type</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Job Type 1</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Job Type 2</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Job Type 3</option>
                                    <option value="wwww" className=' text-text_black_secondary_color'>Job Type 4</option>
                                </select>
                            </div>
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
                ) : (
                    <></>
                )
            }
            <div className='max-sm:hidden'>
                <div className=' flex flex-col text-sm mt-2'>
                    Category
                    <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                        <option value="" className=' text-text_black_secondary_color'>Category</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Category 1</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Category 2</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Category 3</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Category 4</option>
                    </select>
                </div>
                <div className=' flex flex-col text-sm mt-3'>
                    Job Type
                    <select name="" id="" className=' h-9 px-3 rounded-lg mt-3 text-xs'>
                        <option value="" className=' text-text_black_secondary_color'>Job Type</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Job Type 1</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Job Type 2</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Job Type 3</option>
                        <option value="wwww" className=' text-text_black_secondary_color'>Job Type 4</option>
                    </select>
                </div>
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
        </div >
    )
}

export default JobsFilter