import React from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCalendar, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Nav from '../Nav/Nav';

function JobDetail() {
    return (
        <div>
            <Nav />
            <div className='rounded-t-lg'>
                <div className="flex justify-start gap-3 p-4 px-56 max-lg:px-24 max-md:px-12 max-sm:p-2">
                    <div className=' bg-background_grey_color w-20 h-20 rounded-xl'>
                        <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className=' text-2xl font-semibold text-text_black_primary_color'>Job Title</div>
                        <div className=' text-base font-medium text-text_black_primary_color'>Company Name</div>
                        <div className="flex justify-between">
                            <div className=' text-xs font-extralight text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                            <div className='flex gap-3 text-xl'>
                                <div className=' flex flex-col'>
                                    <FontAwesomeIcon icon={faBookmark} />
                                    <span className=' text-[9px]'>Share</span>
                                </div>
                                <div className=' flex flex-col'>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                    <span className=' text-[9px]'>Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-evenly flex-wrap text-xs bg-background_grey_color py-[3px]'>
                    <div>Experience 2 - 4 years</div>
                    <div>Package : 18000- 20000 / month</div>
                    <div>Experience 2 - 4 years</div>
                </div>
                <div className="flex p-5 px-56 max-lg:px-24 max-md:px-12 max-sm:p-7 max-sm:flex-col">
                    <div className=' flex-1'>
                        <div className=' text-lg font-bold text-text_black_primary_color'>Job description:</div>
                        <div className=' text-xs  text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Faucibus cras gravida arcu risus arcu a. Mi nulla justo velit interdum massa. Velit dictum velit aliquet sagittis libero quis. Ultrices sapien at tristique amet.</div>
                        <div className=' text-lg font-bold text-text_black_primary_color mt-5'>Key Responsibilities:</div>
                        <ul className=' flex flex-col gap-1 list-outside ml-12 pr-24 max-sm:pr-2'>
                            <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                            <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                            <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                            <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                        </ul>
                        <div className=' text-lg font-bold text-text_black_primary_color mt-5'>Key Skills:</div>
                        <div className=' flex text-base font-medium ml-12 gap-3'>
                            <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>Python</div>
                            <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>React</div>
                            <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>Tailwind</div>
                        </div>
                        <div className=' text-lg font-bold text-text_black_primary_color mt-5'>Related Jobs:</div>
                        {/* JOBBOX */}
                        <div className=' flex flex-wrap gap-10 px-12 mt-6'>
                            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' text-base font-semibold'>Job Title</div>
                                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                                    <div className=' flex gap-2'>
                                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                                    </div>
                                </div>
                                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
                            </div>
                            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' text-base font-semibold'>Job Title</div>
                                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                                    <div className=' flex gap-2'>
                                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                                    </div>
                                </div>
                                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
                            </div>
                            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' text-base font-semibold'>Job Title</div>
                                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                                    <div className=' flex gap-2'>
                                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                                    </div>
                                </div>
                                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
                            </div>
                            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' text-base font-semibold'>Job Title</div>
                                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                                    <div className=' flex gap-2'>
                                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                                    </div>
                                </div>
                                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
                            </div>
                        </div>
                        {/* JOBBOX */}

                        <div className=' flex ml-12 gap-3 flex-wrap mt-2'>

                        </div>
                    </div>
                    <div className=' w-1/4 flex flex-col items-start pl-16 max-sm:pl-5'>
                        <div className=' w-20 rounded-md bg-primary_blue tracking-widest text-text_white_primary_color text-center'>Enroll</div>
                        <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Posted Date</div>
                        <div className=' text-xs font-thin ml-3 mt-2 flex gap-2 text-text_black_primary_color'><FontAwesomeIcon icon={faCalendar} className='text-base' />12 May, 2023</div>
                        <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Social Media</div>
                        <div className=' flex gap-3 mt-2 text-xl ml-3 text-text_black_primary_color'><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faTwitter} /><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Company Website</div>
                        <div className=' flex gap-3 mt-1 text-sm ml-3 text-blue-700 underline'><a target='_blank' rel="noreferrer" href="http://www.company.com">www.company.com</a></div>
                    </div>
                </div>
            </div></div>
    )
}

export default JobDetail