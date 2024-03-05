import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"
import Cookies from "js-cookie";
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';



function CompanyMain() {
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [jobpostmodal, setJobpostModal] = useState(false);
    const [companydetails, setCompanydetails] = useState([])
    console.log(companydetails, "sss")
    const closemodal = () => {
        setJobpostModal(false);
    };

    const handlejobPostmodal = () => {
        setJobpostModal(true);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    const [jobData, setJobData] = useState({
        job_title: '',
        job_description: '',
        qualifications_requirements: '',
        location: '',
        mode_of_work: '',
        salary_range_from: '',
        salary_range_to: '',
        application_deadline: '',
        tags: '', //keywords_tags given earlier which were not accepted in the backend
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
        console.log(jobData)
    };
    // const keywordsTagsArray = jobData.tags.split(',').map(tagId => parseInt(tagId, 10));
    const tagsArray = jobData.tags.split(',').map(tag => tag.trim()); // Split by comma and trim whitespace
    const dataToSend = {
        ...jobData,
         tags: tagsArray,
        // tags:jobData.tags,
        user: 1,
    };
    const HandleJobpost = () => {
        MakeApiRequest('post', `${config.baseUrl}/post/job/${user_id}/`, headers, dataToSend)
            .then(response => {
                console.log(response)
                closemodal()
                // HandleNextDetails()
            })
            .catch(error => {
            });
    }

    const GetCompanyDetails = () => {
        // MakeApiRequest('get', `${config.baseUrl}/skills/`, headers)  // Fetch all skills
        // .then(skillResponse => {
        //     const skillsMap = skillResponse.reduce((map, skill) => {
        //         map[skill.id] = skill;
        //         return map;
        //     }, {});

        //     const skills = keywordsTagsArray.map(tagId => skillsMap[tagId]);

        //     const dataToSendWithSkills = {
        //         ...dataToSend,
        //         keywords_tags: skills,
        //     };
        MakeApiRequest('get', `${config.baseUrl}/company/${user_id}/`, headers)
            .then(response => {
                console.log(response)
                setCompanydetails(response[0])
                // closemodal()
                // HandleNextDetails()
            })
        // })
            .catch(error => {
            });
    }
    useEffect(() => {
        GetCompanyDetails()
    }, [])

    return (
        <div className='px-7 pt-10'>
           
            <div className='flex gap-3'>
                <div className=' w-24 h-24 rounded-2xl overflow-hidden'>
                    <img src={config.baseUrl + companydetails.profile_image} alt="" />
                </div>
                <div>
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>{companydetails.company_name}</div>
                    {/* <div className=' text-sm '>Company Sector</div> */}
                    <div className=' text-xs'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                </div>
            </div>
            <div className=' bg-primary_blue px-3 py-2 rounded-xl w-[130px] text-sm text-text_white_primary_color mt-3 cursor-pointer whitespace-nowrap ' onClick={handlejobPostmodal}>Post a New Job</div>
            <div className=' text-lg font-bold mt-3'>About Company</div>
            <div className=' text-sm w-3/5 leading-4'>Lorem ipsum dolor sit amet consectetur. Volutpat et vivamus amet feugiat et nisi vulputate nullam cras. Sem quis dui metus diam in elit sollicitudin nec. In euismod justo sodales suscipit id duis.</div>
            <div className=' text-lg font-bold mt-3'>Add Company Working Sector <FontAwesomeIcon icon={faPlusCircle} /></div>
            <div className='flex gap-4'>
                {companydetails.company_sectors && companydetails.company_sectors.map((sector) => (
                    // <div></div>
                    <div className=' border border-gray-700 px-2 rounded-full'>{sector}</div>
                ))}
                {/* <div className=' border border-gray-700 px-2 rounded-full'>Developement</div>
                <div className=' border border-gray-700 px-2 rounded-full'>Finance</div> */}
              
            </div>
            {jobpostmodal && (
                <div className="" onClick={closemodal}>
                    <div className="absolute top-0 left-0 bg-neutral-700/70 w-full flex justify-center py-32">
                        <div className=' w-9/12 bg-white rounded-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                        <h2 className="text-2xl text-center font-bold">Add Job</h2>

                            <label className="flex flex-col font-bold mt-3">
                                Job Title:
                                <input
                                    type="text"
                                    name="job_title"
                                    value={jobData.job_title}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Eg: HR Associate"
                                />
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                Job Description:
                                <input
                                    type="text"
                                    name="job_description"
                                    value={jobData.job_description}
                                    onChange={handleChange}
                                    className="h-16 text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Enter the job description"
                                />
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                Qualifications & Requirements:
                                <input
                                    type="text"
                                    name="qualifications_requirements"
                                    value={jobData.qualifications_requirements}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Enter the Qualifications & Requirements"
                                />
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                Location:
                                <input
                                    type="text"
                                    name="location"
                                    value={jobData.location}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Choose your Location"
                                />
                            </label>

                            {/* <label className="flex flex-col font-bold mt-3">
                                Mode of Work:
                                <input
                                    type="text"
                                    name="mode_of_work"
                                    value={jobData.mode_of_work}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Select the mode of work"
                                />
                            </label> */}

                            <label className="flex flex-col font-bold mt-3">
                                Mode of Work:
                                <select
                                    name="mode_of_work"
                                    value={jobData.mode_of_work}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                >
                                    <option value="">Select the mode of work</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </label>
                            
                            
                            
                            <label className="flex flex-col font-bold mt-3">
                                Add Salary Range:
                                <div className="flex gap-8">
                                    <input
                                        type="number"
                                        name="salary_range_from"
                                        value={jobData.salary_range_from}
                                        onChange={handleChange}
                                        className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                        placeholder="From"
                                    />
                                    <input
                                        type="number"
                                        name="salary_range_to"
                                        value={jobData.salary_range_to}
                                        onChange={handleChange}
                                        className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                        placeholder="To"
                                    />
                                </div>
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                Application Deadline:
                                <input
                                    type="date"
                                    name="application_deadline"
                                    value={jobData.application_deadline}
                                    onChange={handleChange}
                                    className="max-w-max text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Choose a Date"
                                />
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                Keywords and Tags:
                                <input
                                    type="text"
                                    name="tags"
                                    value={jobData.tags}
                                    onChange={handleChange}
                                    className="h-16 text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Enter the keywords and tags related to the job"
                                />
                            </label>

                            <label className="flex flex-col font-bold mt-3">
                                For Contact & Details:
                                <input
                                    type="text"
                                    name="contact_details"
                                    value={jobData.contact_details}
                                    onChange={handleChange}
                                    className="text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Enter Contact Details"
                                />
                            </label>
                            <div className=' bg-primary_blue px-3 py-2 rounded-xl max-w-max  text-text_white_primary_color mt-3 cursor-pointer float-right' onClick={HandleJobpost}>Post Job</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CompanyMain