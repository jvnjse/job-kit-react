import { faArrowRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import "../employeedetails1.css";
import Skills from './Skills';
import MakeApiRequest from '../../../../Functions/AxiosApi';
import Cookies from "js-cookie";
import config from '../../../../Functions/config';


function Experience() {
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [skillsview, setSkillsview] = useState(true)
    const [file, setFile] = useState();
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [companyListdata, setCompanyListdata] = useState()
    const [experienceData, setExperienceData] = useState()
    const [experienceinfo, setExperienceInfo] = useState({
        user_id: user_id,
        job_title: "",
        company_name: "",
        from_date: "",
        to_date: "",
        education_document: null,
    })
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setShowSuggestions(false);
    };

    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in experienceinfo) {
            formData.append(key, experienceinfo[key]);
        }
        formData.append("experience_document", file);
        formData.append("company_name", inputValue);


        MakeApiRequest('POST', `${config.baseUrl}employee/employee/experience/`, headers, formData)
            .then(response => {
                MakeApiRequest('get', `${config.baseUrl}employee/employee/experience/?id=${user_id}`, headers)
                    .then(response => {
                        console.log(response)
                        setExperienceData(response)
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

    useEffect(() => {

        MakeApiRequest('get', `${config.baseUrl}employee/employee/experience/?id=${user_id}`, headers)
            .then(response => {
                console.log(response)
                setExperienceData(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
        MakeApiRequest('get', `${config.baseUrl}company/companies/`, headers)
            .then(response => {
                console.log(response)
                setCompanyListdata(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }, [])

    function HandlePesronalInfo(e) {
        const { name, value } = e.target;
        setExperienceInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuggestions(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [inputValue]);

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.company_name);
        setShowSuggestions(false);

    };

    const filteredSuggestions = companyListdata && companyListdata.filter((suggestion) =>
        suggestion.company_name.toLowerCase().includes(inputValue.toLowerCase())

    );
    console.log("ssss", filteredSuggestions)

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
                            {experienceData && experienceData.map((experience, index) => (
                                <div className=' text-left'>
                                    <div className=' mt-5'>{experience.job_title}</div>
                                    <div className=' text-sm'>{experience.company_name}</div>
                                    <div className='flex gap-3'>
                                        <div className=' text-xs'>{experience.from_date}</div>
                                        <div className=' text-xs'>{experience.to_date}</div>
                                    </div>
                                </div>))}
                            {/* <div className=' text-left'>
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
                            </div> */}
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <div className=' text-start pr-36 font-bold text-blue-800 ml-10'>Add Experience</div>
                            <form onSubmit={handleSubmit}>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Job Position
                                    <input
                                        type='text'
                                        name='job_title'
                                        value={experienceinfo.job_title}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10 relative'>Organization Name
                                    <input
                                        type='text'
                                        name='company_name'
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        required
                                        className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                    {showSuggestions && inputValue && (
                                        <ul className='absolute top-14 bg-[#e2d2f8]  w-64 ml-2'>
                                            {filteredSuggestions && filteredSuggestions.map((suggestion) => (
                                                <li className='px-3 py-1' key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                                                    {suggestion.company_name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </label>
                                <label className='flex flex-col flex-1 pl-10  gap-1 text-xs '>Job Description
                                    <textarea type='text' name='job_description'
                                        value={experienceinfo.job_description}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-64 h-24 ml-2' />
                                </label>
                                <div className="flex">
                                    <label className='flex flex-col gap-1 text-xs pl-10'>From
                                        <input
                                            type='date'
                                            name='from_date'
                                            value={experienceinfo.from_date}
                                            onChange={HandlePesronalInfo}
                                            required
                                            className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                    </label>
                                    <label className='flex flex-col gap-1 text-xs pl-10'>To
                                        <input
                                            type='date'
                                            name='to_date'
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