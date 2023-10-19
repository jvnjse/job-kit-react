import React, { useEffect, useState } from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import MakeApiRequest from '../../../Functions/AxiosApi';
import { Tooltip } from 'react-tooltip'
import '../EmployeeDetails/employeedetails1.css'
import Cookies from "js-cookie";
import config from '../../../Functions/config';




function Profile(props) {
    const user_id = Cookies.get('user_id')
    const closetoggleBox = props.closetoggleBox
    const [employeepersonalData, setEmployeePersonalData] = useState()
    const [skills, setSkills] = useState()
    const [experienceData, setExperienceData] = useState()
    const [educationdata, setEducationdata] = useState()
    const [addexperience, setAddexperience] = useState(false)
    const [addeducation, setAddeducation] = useState(false)
    const [addskills, setAddskills] = useState(false)
    const [imageurl, setImageurl] = useState()
    const [tags, setTags] = useState([]);


    const GetEmployee = () => {
        MakeApiRequest('get', `${config.baseUrl}employee/${user_id}/`)
            .then(response => {
                // Handle the API response
                console.log(response)
                setEmployeePersonalData(response)
                setSkills(response.skills)
                setImageurl(config.baseUrl + response.profile_image)
                setTags(response.skills)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }
    const GetExperience = () => {
        MakeApiRequest('get', `${config.baseUrl}employee/experience/?id=${user_id}`, headers)
            .then(response => {
                // console.log(response)
                setExperienceData(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }
    const GetEducation = () => {
        MakeApiRequest('get', `${config.baseUrl}employee/education/?id=${user_id}`, headers)
            .then(response => {
                console.log(response)
                setEducationdata(response)
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });

    }

    useEffect(() => {
        GetEmployee()
        GetExperience()
        GetEducation()
    }, [])

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const headers = {
        "Content-Type": "application/json",
    }


    function AddSKills() {
        const [skillInputValue, setskillInputValue] = useState('');
        const handleSkillInputChange = (event) => {
            setskillInputValue(event.target.value);
        };

        const handleInputKeyPress = (event) => {
            if (event.key === 'Enter' || event.key === ',' || event.key === " ") {
                event.preventDefault();

                const newTag = skillInputValue.trim();
                if (newTag !== '') {
                    const existingTag = tags.find(tag => tag.toLowerCase() === newTag.toLowerCase());

                    if (!existingTag) {
                        setTags([...tags, newTag]);
                    }

                    setskillInputValue('');
                }
            }
        };

        const handleTagRemove = (tagIndex) => {
            const updatedTags = tags.filter((_, index) => index !== tagIndex);
            setTags(updatedTags);
        };



        const data = { "skills": tags }
        console.log(data)
        const handleSkillSubmit = (e) => {
            e.preventDefault();
            MakeApiRequest('POST', `${config.baseUrl}employees/${user_id}/skills/`, headers, data)
                .then(response => {
                    console.log(response)
                    // setSuccess(true)
                })
                .catch(error => {
                    console.log(error)
                });
        }

        return (
            <div className=' w-6/12 flex flex-col gap-3 bg-white mt-20 rounded-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                <div>Add Skills</div>
                <form onSubmit={handleSkillSubmit} className="w-[100%] tag-input-container  text-base font-semibold" >
                    <div className="tag-list px-2 py-2 ml-4">
                        {tags.map((tag, index) => (
                            <div key={index} className="tag text-sm font-thin">
                                {tag}
                                <button
                                    className="tag-remove-button"
                                    onClick={() => handleTagRemove(index)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                        <input
                            type="text"
                            className="tag-input font-thin"
                            value={skillInputValue}
                            placeholder="Enter a Skill"
                            onChange={handleSkillInputChange}
                            onKeyPress={handleInputKeyPress}
                        />
                    </div>
                    <div className='self-end font-normal bg-primary_blue px-3 py-2 max-h-max text-xs rounded-lg text-text_white_primary_color cursor-pointer ml-20 whitespace-nowrap' >Add Skills</div>
                </form>

            </div>
        )
    }

    function AddExperience() {
        const [file, setFile] = useState();
        const [inputValue, setInputValue] = useState('');
        const [showSuggestions, setShowSuggestions] = useState(false);
        const [companyListdata, setCompanyListdata] = useState()
        const [experienceData, setExperienceData] = useState()
        const [experienceinfo, setExperienceInfo] = useState({
            user_id: user_id,
            job_title: "",
            job_description: "",
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
        useEffect(() => {
            const headers = {}
            MakeApiRequest('get', `${config.baseUrl}companies/`, headers)
                .then(response => {
                    console.log(response)
                    setCompanyListdata(response)
                })
                .catch(error => {
                    // Handle any errors
                    console.log(error)
                });
        }, [])
        useEffect(() => {
            const timer = setTimeout(() => {
                setShowSuggestions(true);
            }, 500);

            return () => {
                clearTimeout(timer);
            };
        }, [inputValue]);
        const handleExperienceSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            for (let key in experienceinfo) {
                formData.append(key, experienceinfo[key]);
            }
            formData.append("experience_document", file);
            formData.append("company_name", inputValue);

            const headers = {}

            MakeApiRequest('POST', `${config.baseUrl}employee/experience/`, headers, formData)
                .then(response => {
                    MakeApiRequest('get', `${config.baseUrl}employee/experience/?id=${user_id}`, headers)
                        .then(response => {
                            console.log(response)
                            setExperienceData(response)
                            GetExperience()
                            setAddexperience(false)
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
        return (
            <form onSubmit={handleExperienceSubmit} className=' w-6/12 flex flex-col gap-3 bg-white mt-20 rounded-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                <div cl>Add Experience</div>
                <div className='flex flex-wrap gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs '>Job Position
                        <input
                            type='text'
                            name='job_title'
                            value={experienceinfo.job_title}
                            onChange={HandlePesronalInfo}
                            required
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col flex-1 gap-1 text-xs relative'>Company Name
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
                </div>
                <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs '>Job Description
                        <textarea type='text' name='job_description'
                            value={experienceinfo.job_description}
                            onChange={HandlePesronalInfo}
                            required
                            className='signup-input border border-black-950 h-24 ml-2' />
                    </label>
                </div>
                <div className='flex flex-wrap gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs'>From Date
                        <input
                            type='date'
                            name='from_date'
                            value={experienceinfo.from_date}
                            onChange={HandlePesronalInfo}
                            required
                            className='signup-input border border-black-950  w-32 h-8 ml-2' />

                    </label>
                    <label className='flex flex-col flex-1 gap-1 text-xs'>To Date
                        <input
                            type='date'
                            name='to_date'
                            value={experienceinfo.to_date}
                            onChange={HandlePesronalInfo}
                            required
                            className='signup-input border border-black-950  w-32 h-8 ml-2' />

                    </label>
                    <label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                            className='education-choose-file' accept=" image/jpeg, image/png" name="" id="" />
                    </label>


                </div>
                <div className='flex justify-end gap-4 max-sm:flex-col max-md:flex-col'>
                    <button type='submit' className='self-end bg-primary_blue px-3 py-2 max-h-max text-xs rounded-lg text-text_white_primary_color cursor-pointer ml-20 whitespace-nowrap' >Add a New Experience</button>
                </div>
            </form>
        )
    }


    function Addeducation() {
        return (
            <div className=' w-6/12 flex flex-col gap-3 bg-white mt-20 rounded-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                <div cl>Add Education</div>
                <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs '>Course Name
                        <input type='text' className='signup-input border border-black-950 w-full  h-8 ml-2' />
                    </label>
                    <label className='flex flex-col flex-1 gap-1 text-xs'>Organization Name
                        <input type='text' className='signup-input border border-black-950 w-full h-8 ml-2' />
                    </label>
                </div>
                <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs '>Course Description
                        <textarea type='text' className='signup-input border border-black-950 w-full h-24  ml-2' />
                    </label>
                </div>
                <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                    <label className='flex flex-col flex-1  gap-1 text-xs'>From Date
                        <input type='date' className='signup-input border border-black-950 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col flex-1 gap-1 text-xs'>To Date
                        <input type='month' className='signup-input border border-black-950 h-8 ml-2' />
                    </label>
                </div>
                <div className='flex justify-end gap-4 max-sm:flex-col max-md:flex-col'>
                    <div className='self-end bg-primary_blue px-3 py-2 max-h-max text-xs rounded-lg text-text_white_primary_color cursor-pointer ml-20 whitespace-nowrap' >Add a New Education</div>
                </div>
            </div>)
    }

    return (
        <div className='p-10 text-text_black_primary_color' onClick={closetoggleBox}>
            <div className=' flex gap-5'>
                <div className=' bg-background_grey_color w-20 h-20 rounded-3xl overflow-hidden'>
                    <img src={imageurl} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className="flex flex-col flex-1">
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>{employeepersonalData && employeepersonalData.full_name}</div>
                    <div className=' text-base font-medium text-text_black_primary_color'>Job Profile</div>
                    <div className="flex justify-between">
                        <div className=' text-xs font-extralight text-text_black_primary_color'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                    </div>
                </div>
            </div>
            <div className=' text-lg font-bold text-text_black_primary_color mt-14'>About Candidate:</div>
            <div className=' text-xs  text-text_black_primary_color w-9/12'>Lorem ipsum dolor sit amet consectetur. Erat dictum eget in sed eget iaculis arcu orci scelerisque. Elementum amet tincidunt erat ac. Bibendum elit odio mauris eget mauris. Ullamcorper lectus vivamus tortor vitae.</div>
            <div className=' text-lg font-bold text-text_black_primary_color mt-8'>Add Professional Skills:
                <FontAwesomeIcon icon={faCirclePlus}
                    data-tooltip-id="Skills"
                    data-tooltip-content="Add Skills"
                    data-tooltip-place="right"
                    onClick={() => { setAddskills(true) }}
                />
            </div>
            <Tooltip id='Skills' style={{ backgroundColor: "#5d626b", padding: '5px 5px ', fontSize: '12px' }}></Tooltip>
            <div className=' flex flex-wrap gap-3 pl-5 mt-3'>

                {skills && skills.map((item, index) => (
                    <div className=' px-2 border rounded-2xl border-gray-800 cursor-pointer hover:bg-slate-300' key={index}>{item}</div>
                ))}
                {/* <div className=' px-2 border rounded-2xl border-gray-800'>Django</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>Bootstrap</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>Tailwind</div>
                <div className=' px-2 border rounded-2xl border-gray-800'>React</div> */}
            </div>
            <div className='flex justify-start gap-10 flex-wrap'>
                <div className='flex-1 p-10 max-lg:p-2 max-lg:pt-4'>
                    <div className=' font-semibold text-lg flex justify-between'>
                        <div>Experience</div>
                        <div onClick={() => { setAddexperience(!addexperience) }} className='cursor-pointer'>
                            <FontAwesomeIcon icon={faCirclePlus} data-tooltip-id="experience"
                                data-tooltip-content="Add Experience"
                                data-tooltip-place="top" />
                        </div>
                    </div>
                    <Tooltip id="experience" style={{ backgroundColor: "#5d626b", padding: '5px 5px ', fontSize: '12px' }} />
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        <Tooltip id="edit-exp" style={{ backgroundColor: "#5d626b", padding: '5px 5px ', fontSize: '12px' }} />
                        {experienceData && experienceData.map((experience, index) => (
                            <li className='list-disc leading-4'>
                                <div className=' text-base font-semibold flex justify-between'><div>{experience.job_title}</div><div>
                                    <FontAwesomeIcon
                                        data-tooltip-id="edit-exp"
                                        data-tooltip-content="Edit Experience"
                                        data-tooltip-place="top"
                                        className='text-gray-500'
                                        icon={faEdit}
                                        onClick={() => { setAddexperience(!addexperience) }} />
                                </div>
                                </div>
                                <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                    <div>{experience.company_name}</div>
                                    <div>{experience.from_date.substring(0, experience.from_date.length - 3)} - {experience.to_date.substring(0, experience.to_date.length - 3)}</div>
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
                        </li> */}
                    </ul>
                </div>
                <div className='flex-1 p-10 max-lg:p-2 max-lg:pt-4'>
                    <div className=' font-semibold text-lg flex justify-between'><div>Education
                    </div><div onClick={() => { setAddeducation(!addexperience) }}><FontAwesomeIcon icon={faCirclePlus} data-tooltip-id="education"
                        data-tooltip-content="Add education"
                        data-tooltip-place="top" /></div>
                    </div>
                    <Tooltip id="education" style={{ backgroundColor: "#5d626b", padding: '5px 5px ', fontSize: '12px' }} />
                    <ul className=' list-outside flex flex-col gap-3 ml-8'>
                        {educationdata && educationdata.map((education, index) => (
                            <li className='list-disc leading-4'>
                                <div className='flex justify-between text-base font-semibold'><div>{education.course_name}</div><div><FontAwesomeIcon className='text-gray-500' icon={faEdit} /></div></div>
                                <div className=' flex justify-between pr-16 mt-1 text-sm'>
                                    <div>{education.organization_name}</div>
                                    <div>{education.from_date.substring(0, education.from_date.length - 3)} - {education.to_date.substring(0, education.to_date.length - 3)}</div>
                                </div>
                                <div className=' text-xs  mt-1  leading-3'>{education.course_description}</div>
                                <div className='mt-1 text-xs text-primary_blue'><FontAwesomeIcon icon={faCheckCircle} /> Verified by Company name </div>
                            </li>
                        ))}
                        {/* <li className='list-disc leading-4'>
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
                        </li> */}
                    </ul>
                </div>

            </div>






            {addexperience &&
                <div className="fixed top-0 left-0 h-screen bg-neutral-700/70 w-full flex justify-center items-center" onClick={() => { setAddexperience(false) }}>
                    <AddExperience />
                </div>
            }
            {addeducation &&
                <div className="fixed top-0 left-0 h-screen bg-neutral-700/70 w-full flex justify-center items-center" onClick={() => { setAddeducation(false) }}>
                    <Addeducation />
                </div>
            }
            {addskills &&
                <div className="fixed top-0 left-0 h-[100dvh]  bg-neutral-700/70 w-full flex justify-center items-center" onClick={() => { setAddskills(false) }}>
                    <AddSKills />
                </div>
            }
        </div>
    )
}

export default Profile