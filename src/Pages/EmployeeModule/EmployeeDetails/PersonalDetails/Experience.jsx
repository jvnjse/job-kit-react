import { faArrowRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../employeedetails1.css";
import Skills from './Skills';
import MakeApiRequest from '../../../../Functions/AxiosApi';


function Experience() {
    const [skillsview, setSkillsview] = useState(true)
    const [file, setFile] = useState();
    const [inputValue, setInputValue] = useState('');
    const [experienceinfo, setExperienceInfo] = useState({
        user_id: "2",
        job_title: "",
        company_name: "",
        from_date: "",
        to_date: "",
        education_document: null,
    })
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        // setShowSuggestions(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in experienceinfo) {
            formData.append(key, experienceinfo[key]);
        }
        formData.append("experience_document", file);
        // formData.append("organization_id", inputValue);

        const headers = {}

        MakeApiRequest('POST', 'http://127.0.0.1:8000/employee/experience/', headers, formData)
            .then(response => {
                MakeApiRequest('get', 'http://127.0.0.1:8000/employee/experience/?id=1', headers)
                    .then(response => {
                        console.log(response)
                        setExperienceInfo(response)
                    })
                    .catch(error => {
                        // Handle any errors
                        console.log(error)
                    });
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
        console.log(formData)
    };

    function HandlePesronalInfo(e) {
        const { name, value } = e.target;
        setExperienceInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
    };
    function HandleSkillDetails() {
        setSkillsview(false)
    }
    return (
        <>
            {skillsview ?
                <div>
                    <div className=' text-center text-2xl font-bold'>Experience</div>
                    <div className="flex justify-evenly max-sm:flex-col-reverse ">
                        <div className="flex flex-col border-r-2 flex-1 items-center max-sm:items-start max-sm:pl-16">
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Job Position</div>
                                <div className=' text-sm'>Organization Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>From:</div>
                                    <div className=' text-xs'>To:</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className=' text-start pr-36 font-bold text-blue-800 ml-10'>Add Experience</div>
                            <form onSubmit={handleSubmit}>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Job Position
                                    <input
                                        type='text'
                                        value={experienceinfo.job_title}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Organization Name
                                    <input
                                        type='text'
                                        value={experienceinfo.company_name}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <div className="flex">
                                    <label className='flex flex-col gap-1 text-xs pl-10'>From
                                        <input
                                            type='date'
                                            value={experienceinfo.from_date}
                                            onChange={HandlePesronalInfo}
                                            required
                                            className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                    </label>
                                    <label className='flex flex-col gap-1 text-xs pl-10'>To
                                        <input
                                            type='date'
                                            value={experienceinfo.to_date}
                                            onChange={HandlePesronalInfo}
                                            required
                                            className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                    </label>
                                </div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    required
                                    className='education-choose-file mt-10 ml-5' accept=" image/jpeg, image/png" name="" id="" />
                                <button type='submit' className="add-education-btn float-right mt-10 mr-64 px-6 py-1 "><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#ffffff", }} /> Add Experience</button>
                            </form>
                        </div>
                    </div>
                    <div className="continue-btn w-36 float-right px-5 py-2 mt-16 mr-36" onClick={HandleSkillDetails} >Continue   <FontAwesomeIcon icon={faArrowRight} color='white' /></div>
                </div>
                : <>
                    <Skills />
                </>

            }
        </>

    )
}

export default Experience