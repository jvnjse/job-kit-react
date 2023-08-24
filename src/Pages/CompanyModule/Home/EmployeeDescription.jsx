import React from 'react'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileimage from "../../../Assets/Images/profileimage.png"

function EmployeeDescription() {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className=' w-9/12 bg-slate-50 top-36 rounded-t-lg mt-36 py-5' onClick={stopPropagation}>
            <div className="flex justify-start gap-3 p-4 px-14">
                <div className=' bg-background_grey_color w-20 h-20 rounded-xl'>
                    <img src={profileimage} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className="flex flex-col flex-1">
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>Employer Name</div>
                    <div className=' text-base font-medium text-text_black_primary_color'>Job Profile</div>
                    <div className=' text-xs font-extralight text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>

                    <div className="flex justify-between pr-10">
                        <div>
                            <div className='font-bold mt-4'>About Candidate:</div>
                            <div className=' text-xs w-3/4'>Lorem ipsum dolor sit amet consectetur. Erat dictum eget in sed eget iaculis arcu orci scelerisque. Elementum amet tincidunt erat ac. Bibendum elit odio mauris eget mauris. Ullamcorper lectus vivamus tortor vitae.
                            </div>
                        </div>
                        <div className=' flex items-center flex-1 w-3/12 rounded-lg gap-5 bg-primary_blue text-text_white_primary_color h-min px-7 py-7'>Resume <FontAwesomeIcon className='text-4xl' icon={faFilePdf} /></div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-evenly text-xs text-text_white_primary_color bg-primary_blue py-[3px]'>
                <div>
                    <div>Email</div>
                    <div>employee@gmail.com</div>
                </div>
                <div>
                    <div>Phone</div>
                    <div>2734987299</div>
                </div>
                <div>
                    <div>Location</div>
                    <div>Kochi</div>
                </div>
            </div>
            <div className='flex justify-between px-10'>
                <div className='flex-1 p-10'>
                    <div className=' font-semibold text-lg'>Experience </div>
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Product Designer</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Company Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Product Designer</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Company Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Product Designer</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Company Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                    </ul>
                </div>
                <div className='flex-1 p-10'>
                    <div className=' font-semibold text-lg'>Education </div>
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            {/* <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            {/* <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            {/* <div className=' text-xs  mt-1 leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-56 px-24'>
                <div>
                    <div>Professional Skills</div>
                    <div className='flex gap-4'>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>Python</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>React</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>CSS</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>Javascript</div>
                    </div>
                </div>

                <div>
                    <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Social Media</div>
                    <div className=' flex gap-3 mt-2 text-xl ml-3 text-text_black_primary_color'><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faTwitter} /><FontAwesomeIcon icon={faLinkedin} /></div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDescription