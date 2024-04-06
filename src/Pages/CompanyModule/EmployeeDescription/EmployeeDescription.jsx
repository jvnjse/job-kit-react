import React, { useEffect, useState } from 'react'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileimage from "../../../Assets/Images/profileimage.png"
import Nav from '../../EmployeeModule/Nav/Nav';
import MakeApiRequest from '../../../Functions/AxiosApi';
import Cookies from "js-cookie";
import config from '../../../Functions/config';
import { useParams } from 'react-router-dom';



function EmployeeDescription() {
    // const user_id = Cookies.get('user_id')
   
    const access_token = Cookies.get('access_token')
    let { id } = useParams();
    const [employeepersonalData, setEmployeePersonalData] = useState()
    const [skills, setSkills] = useState()
    const [experienceData, setExperienceData] = useState()
    const [educationdata, setEducationdata] = useState()
    const [addedskills, setSddedskills] = useState()
    const [imageurl, setImageurl] = useState()
    console.log(id, "id")
   
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${access_token}`,
    }

    const GetEmployee = () => {
        MakeApiRequest('get', `${config.baseUrl}employee/employee-personal/${id}/`, headers)
            .then(response => {
                // Handle the API response
                console.log(response, "data")
                setEmployeePersonalData(response)

                GetExperience(response.user_id)
                GetEducation(response.user_id)
                console.log(response.user_id,"res")
                setSkills(response.skills)
                setImageurl(config.baseUrl + response.profile_image)
                setSddedskills(response.skills)
            })
            .catch(error => {
                console.log(error)
            });
    }

    const GetExperience = (user_id) => {
        MakeApiRequest('get', `${config.baseUrl}employee/employee-experience/${user_id}/`, headers)
            .then(response => {
                console.log(response, "exp")
                setExperienceData(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }
    const GetEducation = (user_id) => {
        MakeApiRequest('get', `${config.baseUrl}employee/employee-education/${user_id}/`, headers)
            .then(response => {
                console.log(response,"edu")
                setEducationdata(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });

    }

    useEffect(() => {
        GetEmployee()
        // GetExperience()
        // GetEducation()
    }, [])

    return (<>
        <Nav />
        <div className=' bg-slate-50 pb-20'>
            <div className="flex justify-start gap-3 p-4 px-14 max-sm:px-4">
                <div className=' bg-background_grey_color w-20 h-20 rounded-xl'>
                    <img src={profileimage} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className="flex flex-col flex-1">
                    {/* <div className=' text-2xl font-semibold text-text_black_primary_color'>{employeepersonalData.full_name}</div> */}
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>{employeepersonalData && employeepersonalData.full_name}</div>

                    <div className=' text-base font-medium text-text_black_primary_color'>Job Profile</div>
                    <div className=' text-xs font-extralight text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>

                    <div className="flex justify-between pr-10 max-md:flex-col max-sm:pr-2">
                        <div>
                            <div className='font-bold mt-4'>About Candidate:</div>
                            <div className=' text-xs w-3/4'>Lorem ipsum dolor sit amet consectetur. Erat dictum eget in sed eget iaculis arcu orci scelerisque. Elementum amet tincidunt erat ac. Bibendum elit odio mauris eget mauris. Ullamcorper lectus vivamus tortor vitae.
                            </div>
                        </div>
                        {/* <div className=' flex items-center flex-1 max-w-max rounded-lg gap-5 bg-primary_blue text-text_white_primary_color h-min px-7 py-7 max-md:p-2'>Resume <FontAwesomeIcon className='text-4xl max-md:text-2xl' icon={faFilePdf} /></div> */}
                    </div>
                </div>
            </div>
            <div className=' flex justify-around text-xs text-text_white_primary_color bg-primary_blue py-[3px]'>
                <div>
                    <div>Email</div>
                    <div>employee@gmail.com</div>
                </div>
                <div>
                    <div>Phone</div>
                    <div>{employeepersonalData && employeepersonalData.mobile}</div>
                </div>
                <div>
                    <div>Location</div>
                    <div>Kochi</div>
                </div>
            </div>
            <div className='flex justify-between px-10 max-md:px-2 max-sm:flex-col'>
                <div className='flex-1 p-10'>
                    <div className=' font-semibold text-lg'>Experience </div>
                      <ul className=' list-outside flex flex-col gap-3 ml-8'>
                    {experienceData && experienceData.map((experience) => (
                         <li className='list-disc leading-4'>
                         <div className=' text-base font-semibold'>{experience.job_title}</div>
                         <div className=' flex justify-between pr-16 mt-1 text-sm'>
                             <div>{experience.company_name}</div>
                             <div>{experience.from_date} - {experience.to_date}</div>
                         </div>
                         <div className=' text-xs mt-1  leading-3'>{experience.job_description}</div>
                         <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                     </li>
                    ))}
                  
                        {/* <li className='list-disc leading-4'>
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
                        </li> */}
                    </ul>
                </div>
                <div className='flex-1 p-10'>
                    <div className=' font-semibold text-lg'>Education </div>
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        {educationdata && educationdata.map((education) => (
                             <li className='list-disc leading-4'>
                             <div className=' text-base font-semibold'>{education.course_name}</div>
                             <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                 <div>{education.organization_name}</div>
                                 <div>{education.from_date} - {education.to_date}</div>
                             </div>
                             {/* <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                             <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                         </li>
                        ))}
                        {/* <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div> */}
                            {/* <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            {/* <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div> */}
                            {/* <div className=' text-xs  mt-1  leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            {/* <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li>
                        <li className='list-disc leading-4'>
                            <div className=' text-base font-semibold'>Bachelors in Fine Arts</div>
                            <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                <div>Institution Name</div>
                                <div>2017 - Present</div>
                            </div> */}
                            {/* <div className=' text-xs  mt-1 leading-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing lobortis at in egestas eu blandit scelerisque. Dui dictumst urna est enim lacus pharetra adipiscing. Nullam leo vitae purus nulla eros.</div> */}
                            {/* <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className='flex justify-between px-24 max-md:flex-col max-sm:px-6'>
                <div>
                    <div>Professional Skills</div>
                    <div className='flex gap-4'>
                        {skills && skills.map((skill) => (
                            <div className='flex px-2 border border-gray-700 rounded-xl'>{skill}</div>
                        ))}
                        {/* <div className='flex px-2 border border-gray-700 rounded-xl'>Python</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>React</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>CSS</div>
                        <div className='flex px-2 border border-gray-700 rounded-xl'>Javascript</div> */}
                    </div>
                </div>

                <div>
                    <div className=' text-sm font-semibold mt-5 text-text_black_primary_color'>Social Media</div>
                    <div className=' flex gap-3 mt-2 text-xl ml-3 text-text_black_primary_color'><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faTwitter} /><FontAwesomeIcon icon={faLinkedin} /></div>
                </div>
            </div>
        </div>
    </>
    )
}

export default EmployeeDescription