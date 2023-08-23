import React from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus, faEdit } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    return (
        <div className='p-10 text-text_black_primary_color'>
            <div className=' flex gap-5'>
                <div className=' bg-background_grey_color w-20 h-20 rounded-3xl'>
                    <img src={profileimage} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className="flex flex-col flex-1">
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>Employee Name</div>
                    <div className=' text-base font-medium text-text_black_primary_color'>Job Profile</div>
                    <div className="flex justify-between">
                        <div className=' text-xs font-extralight text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                    </div>
                </div>
            </div>
            <div className=' text-lg font-bold text-text_black_primary_color mt-14'>About Candidate:</div>
            <div className=' text-xs  text-text_black_primary_color w-9/12'>Lorem ipsum dolor sit amet consectetur. Erat dictum eget in sed eget iaculis arcu orci scelerisque. Elementum amet tincidunt erat ac. Bibendum elit odio mauris eget mauris. Ullamcorper lectus vivamus tortor vitae.</div>
            <div className=' text-lg font-bold text-text_black_primary_color mt-8'>Add Professional Skills: <FontAwesomeIcon icon={faCirclePlus} /></div>
            <div className=' flex gap-3 pl-5 mt-3'>
                <div className=' px-2 border rounded-2xl border-gray-800'>Python</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>Django</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>Bootstrap</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>Tailwind</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>React</div>
            </div>
            <div className='flex justify-start gap-10'>
                <div className='flex-1 p-10'>
                    <div className=' font-semibold text-lg'>Experience <FontAwesomeIcon icon={faEdit} /></div>
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
                    <div className=' font-semibold text-lg'>Education <FontAwesomeIcon icon={faEdit} /></div>
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div>
                            <div className=' text-xs  mt-1 leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div>
                            <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Profile