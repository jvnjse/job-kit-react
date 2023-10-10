import React, { useEffect, useState } from 'react'
import "../../EmployeeDetails/employeedetails1.css"
import Experience from './Experience'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MakeApiRequest from '../../../../Functions/AxiosApi';

function Education() {
    const [experienceview, setExperienceview] = useState(true)
    const [file, setFile] = useState();
    const [educationdata, setEducationdata] = useState()
    const [educationinfo, setEducationInfo] = useState({
        user_id: "1",
        course_job_name: "",
        from_date: "",
        to_date: "",
        is_experience: "",
        organization_id: "",
        experience_education_document: null,
    })
    function HandleExperienceDetails() {
        setExperienceview(false)
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
    };
    function HandlePesronalInfo(e) {
        const { name, value } = e.target;
        setEducationInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in educationinfo) {
            formData.append(key, educationinfo[key]);
        }
        formData.append("experience_education_document", file);

        const headers = {}

        MakeApiRequest('POST', 'http://127.0.0.1:8000/employee/education/', headers, formData)
            .then(response => {
                // Handle the API response
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
        console.log(formData)
    };
    useEffect(() => {
        const headers = {}

        MakeApiRequest('get', 'http://127.0.0.1:8000/employee/education/?user_id=1', headers)
            .then(response => {
                console.log(response)
                setEducationdata(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }, [])


    return (
        <div>
            {experienceview ? <>
                <div className=' text-center text-2xl font-bold'>Education</div>
                <div className="flex justify-evenly max-sm:flex-col-reverse">
                    <div className="flex flex-col border-r-2 flex-1 items-center max-sm:items-start max-sm:pl-16">
                        {educationdata && educationdata.map((education, index) => (
                            <div className=' text-left' key={index}>
                                <div className=' mt-5'>{education.course_job_name}</div>
                                <div className=' text-sm'>Institution Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>{education.from_date}</div>
                                    <div className=' text-xs'>{education.to_date}</div>
                                </div>
                            </div>
                        ))}
                        {/* <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div>
                        <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className=' text-start pr-36 font-bold text-blue-800 ml-10'>Add Education</div>
                        <form onSubmit={handleSubmit}>
                            <label className='flex flex-col gap-1 text-xs pl-10'>Course
                                <input
                                    type='text'
                                    className='signup-input border border-black-950 w-64 h-8 ml-2'
                                    name='course_job_name'
                                    value={educationinfo.course_job_name}
                                    onChange={HandlePesronalInfo}
                                    required
                                />
                            </label>
                            <label className='flex flex-col gap-1 text-xs pl-10'>Institution Name
                                <input
                                    type='text'
                                    className='signup-input border border-black-950 w-64 h-8 ml-2'
                                    name='organization_id'
                                    value={educationinfo.organization_id}
                                    onChange={HandlePesronalInfo}
                                    required
                                />
                            </label>
                            <div className="flex">
                                <label className='flex flex-col gap-1 text-xs pl-10'>From
                                    <input
                                        type='date'
                                        className='signup-input border border-black-950  w-32 h-8 ml-2'
                                        name='from_date'
                                        value={educationinfo.from_date}
                                        onChange={HandlePesronalInfo}
                                        required
                                    />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10'>To
                                    <input
                                        type='date'
                                        className='signup-input border border-black-950  w-32 h-8 ml-2'
                                        name='to_date'
                                        value={educationinfo.to_date}
                                        onChange={HandlePesronalInfo}
                                        required
                                    />
                                </label>
                            </div>
                            <input
                                type="file"
                                className='education-choose-file mt-10 ml-5'
                                accept="image/jpeg, image/png"
                                name="experience_education_document"
                                id="experience_education_document"
                                onChange={handleFileChange}
                                required
                            />
                            <button type='submit' className="add-education-btn float-right mt-10 mr-64 px-6 py-1 ">Add Education</button>
                        </form>

                    </div>
                </div>
                <div className="continue-btn w-36 float-right px-5 py-2 mt-16 mr-36" onClick={HandleExperienceDetails}>Continue <FontAwesomeIcon icon={faArrowRight} color='white' /></div>
            </> :
                <>
                    <Experience />
                </>
            }

        </div>
    )
}


export default Education