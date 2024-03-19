import React from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCalendar, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import JobBox from './JobBox';

function JobDescription() {

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className=' w-9/12 bg-slate-50 top-36 rounded-t-lg mt-36 ' onClick={stopPropagation}>
            <div className="flex justify-start gap-3 p-4">
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
            <div className="flex p-5">
                <div className=' flex-1'>
                    <div className=' text-lg font-bold text-text_black_primary_color'>Job description:</div>
                    <div className=' text-xs  text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Faucibus cras gravida arcu risus arcu a. Mi nulla justo velit interdum massa. Velit dictum velit aliquet sagittis libero quis. Ultrices sapien at tristique amet.</div>
                    <div className=' text-lg font-bold text-text_black_primary_color mt-3'>Key Responsibilities:</div>
                    <ul className=' flex flex-col gap-1 list-outside ml-12 pr-24 '>
                        <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                        <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                        <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                        <li className=' text-xs  text-text_black_primary_color list-disc'>Lorem ipsum dolor sit amet consectetur. Sem sit pellentesque donec eu nisl quis suscipit vulputate.</li>
                    </ul>
                    <div className=' text-lg font-bold text-text_black_primary_color mt-4'>Key Skills:</div>
                    <div className=' flex text-base font-medium ml-12 gap-3'>
                        <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>Python</div>
                        <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>React</div>
                        <div className=' bg-violet-300 px-2 rounded-lg  text-text_black_primary_color'>Tailwind</div>
                    </div>
                    <div className=' text-lg font-bold text-text_black_primary_color mt-4'>Related Jobs:</div>
                    <div className=' flex ml-12 gap-3 flex-wrap mt-2'>
                        <JobBox />
                        <JobBox />
                        <JobBox />
                        <JobBox />
                    </div>
                </div>
                <div className=' w-1/4 flex flex-col items-start pl-16'>
                    <div className=' w-20 rounded-md bg-primary_blue tracking-widest text-text_white_primary_color text-center'>Enroll</div>
                    <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Posted Date</div>
                    <div className=' text-xs font-thin ml-3 mt-2 flex gap-2 text-text_black_primary_color'><FontAwesomeIcon icon={faCalendar} className='text-base' />12 May, 2023</div>
                    <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Social Media</div>
                    <div className=' flex gap-3 mt-2 text-xl ml-3 text-text_black_primary_color'><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faTwitter} /><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Company Website</div>
                    <div className=' flex gap-3 mt-1 text-sm ml-3 text-blue-700 underline'><a target='_blank' rel="noreferrer" href="http://www.company.com">www.company.com</a></div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription