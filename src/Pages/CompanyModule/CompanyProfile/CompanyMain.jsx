import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"
import Cookies from "js-cookie";
import Creatable from 'react-select/creatable';//add
import { faArrowRight, faUpload } from '@fortawesome/free-solid-svg-icons'//added
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';




function CompanyMain() {
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [jobpostmodal, setJobpostModal] = useState(false);
    const [sectormodal, setSectorModal] = useState(false); //adding-------------------
    const [companydetails, setCompanydetails] = useState([])
    const [tags, setTags] = useState([]); 
    const [skillInputValue, setskillInputValue] = useState('');
    console.log(companydetails, "sss")
    const closemodal = () => {
        setJobpostModal(false);
        setSectorModal(false);//adding----------
    };

    const handlesectormodal = () => {
        setSectorModal(true);
    }

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
       
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
        console.log(jobData)
    };
    // const keywordsTagsArray = jobData.tags.split(',').map(tagId => parseInt(tagId, 10));
    // const tagsArray = jobData.tags.split(',').map(tag => tag.trim()); // Split by comma and trim whitespace
    // const dataToSend = {
    //     ...jobData,
    //      tags: tagsArray,
    //     // tags:jobData.tags,
    //     user: 1,
    // };
   
    
    const HandleJobpost = () => {
        MakeApiRequest('post', `${config.baseUrl}company/post/job/${user_id}/`, headers,{
         ...jobData,
         tags: tags,
         })// Include tags in the request body for creating
            .then(response => {
                console.log(response)
                closemodal()
                // HandleNextDetails()
            })
            .catch(error => {
            });
    }


    // for sector start---------------------------------------------------------
    const [companyTypes, setCompanyTypes] = useState([]);
    const [companyDepartments, setCompanyDepartments] = useState([]);
    const [rows, setRows] = useState([{ companyType: null, companyDepartments: null }]);
    useEffect(() => {
        // setCompanyTypes([{ label: 'Type A' }, { label: 'Type B', value: 'type_b' }, { label: 'Type C', value: 'type_c' }]);
        // setCompanyDepartments([{ label: 'HR', value: 'hr' }, { label: 'Finance', value: 'finance' }, { label: 'Finance', value: 'finance' }, { label: 'Finance', value: 'finance' }]);
        MakeApiRequest('get', `${config.baseUrl}company/get/sector/`, headers)
        .then(response => {
            console.log(response,"sectors")
         
            setCompanyTypes(response.map(sector => ({ value: sector, label: sector})));
            // setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching departments:', error);
            // setLoading(false);
          });
        MakeApiRequest('get', `${config.baseUrl}company/department/`, headers)
        .then(response => {
            console.log(response)
         
            setCompanyDepartments(response.map(department => ({ value: department.name, label: department.name })));
            // setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching departments:', error);
            // setLoading(false);
          });
    }, []);
    console.log(companyTypes, "sectors after labeling")
    // function HandleNextDetails() {
    //     setDetails(false)

    // }
    // console.log(selectedCompanyType, "check2")
    // console.log(selectedCompanyDepartment,"check1")

    // function handleSectorChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    const createOption = (inputValue) => ({
        label: inputValue,
        value: inputValue,
    });

    const addNewRow = () => {
        setRows([...rows, { companyType: null, companyDepartments: null }]);
    };
    const handleCompanyTypeChange = (selectedOption, rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].companyType = selectedOption;
        setRows(updatedRows);
    };

    const handleCompanyDepartmentsChange = (selectedOptions, rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].companyDepartments = selectedOptions;
        setRows(updatedRows);
    };

    console.log(rows)

   
    const SubmitSecDep = () => {
       
        closemodal()
        
        const requestData = {
            company_user_id: user_id,
            sector_name: "",
            departments: [],
        };
        const headers = {
            'Authorization': `Bearer ${access_token}`
        }
    
        

        rows.forEach(row => {
            if (row.companyType && row.companyDepartments) {
                const requestData = {
                    company_user_id: user_id,
                    sector_name: row.companyType.label,
                    departments: row.companyDepartments.map(dep => dep.label),
                };
    
        MakeApiRequest('post', `${config.baseUrl}company/company/post/sector/`, headers, requestData)
            .then(response => {
                console.log(response, "posted successfully")
                GetCompanyDetails()
                // HandleNextDetails()
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });

        }
    })  
        
    }
   // end----------------------------------------------------------


   

    const handleSkillInputChange = (event) => {
        setskillInputValue(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ',') {
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
      
    
    

    

    //----------------------------------------------------------------------------
    

    const GetCompanyDetails = () => {
       
        MakeApiRequest('get', `${config.baseUrl}company/company/${user_id}/`, headers)
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
            <div className=' text-lg font-bold mt-3'>Add Company Working Sector <FontAwesomeIcon onClick={handlesectormodal} icon={faPlusCircle} /></div>
             {/* i will be working in ------------------------------------------------------------------------------------------------------*/}
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
                                <div className="tag-list px-2 py-2 ml-4">
                                   {tags.map((tag, tagIndex) => (
                                       <div key={tagIndex} className="tag text-sm font-thin">
                                           {tag}
                                           <button
                                               className="tag-remove-button"
                                               onClick={() => handleTagRemove(tagIndex)}
                                            
                                           >
                                               &times;
                                           </button>
                                       </div>
                                   ))}
                                   <input
                                       type="text"
                                       className="tag-input font-thin"
                                       name="tags"
                                       value={skillInputValue}
                                       placeholder="Enter a Skill"
                                       onChange={handleSkillInputChange}
                                       onKeyPress={handleInputKeyPress}
                                   />
                                   </div>

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
             {/* {sectormodal && ( //issue with styling----------------------------------------------------------------------------------------
                <div className="" onClick={closemodal}>
                     <div className="absolute top-0 left-0  bg-neutral-700/70 w-full  flex justify-center py-32">
                     <div className=' w-9/12 bg-white rounded-lg py-5 px-14  max-sm:w-full' onClick={stopPropagation}>
                     <div className=' text-center text-2xl font-semibold text-primary_blue'>Company Sectors and Departments</div>
                <div className=' flex justify-evenly pt-4 max-sm:flex-col-reverse max-sm:px-5'>
                    <div>
                        <div className='flex flex-col'>
                            {rows.map((row, index) => (
                                <div className='flex w-full gap-5'>
                                    <label className='flex flex-col gap-1 text-xs mt-4'>
                                        Company Type
                                        <Creatable
                                            value={row.companyType}
                                            onChange={(selectedOption) => handleCompanyTypeChange(selectedOption, index)}
                                            options={companyTypes}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-1 text-xs mt-4'>
                                        Company Departments
                                        <Creatable
                                            value={row.companyDepartments}
                                            onChange={(selectedOptions) => handleCompanyDepartmentsChange(selectedOptions, index)}
                                            options={companyDepartments}
                                            isMulti
                                        />
                                    </label>
                                </div>
                            ))}
                            <button className='bg-primary_blue text-white w-10 rounded-lg self-end mt-3' onClick={addNewRow}>+</button>

                        </div>
                       
                        <div className="continue-btn float-right px-5 py-2 mt-6 " onClick={SubmitSecDep}>Add  <FontAwesomeIcon icon={faArrowRight} className='text-blue-50' color='#ffffff' /></div>
                    </div>
                   
                </div>
            </div>
                    </div>
                    </div>
                   
             )} */}
             {sectormodal && (
    <div className="fixed top-0 left-0 w-full h-full bg-neutral-700/70 flex justify-center items-center" onClick={closemodal}>
        <div className="relative w-full max-w-screen-sm bg-white rounded-lg py-5 px-14 max-sm:w-full" onClick={stopPropagation}>
            <div className="text-center text-2xl font-semibold text-primary_blue">Company Sectors and Departments</div>
            <div className="flex flex-col gap-4 pt-4">
                {rows.map((row, index) => (
                    <div key={index} className="flex w-full gap-5">
                        <label className="flex flex-col gap-1 text-xs mt-4">
                            Company Type
                            <Creatable
                                value={row.companyType}
                                onChange={(selectedOption) => handleCompanyTypeChange(selectedOption, index)}
                                options={companyTypes}
                            />
                        </label>
                        <label className="flex flex-col gap-1 text-xs mt-4">
                            Company Departments
                            <Creatable
                                value={row.companyDepartments}
                                onChange={(selectedOptions) => handleCompanyDepartmentsChange(selectedOptions, index)}
                                options={companyDepartments}
                                isMulti
                            />
                        </label>
                    </div>
                ))}
                <button className="bg-primary_blue text-white w-10 rounded-lg self-end mt-3" onClick={addNewRow}>+</button>
            </div>
            <div className="continue-btn float-right px-5 py-2 mt-6" onClick={SubmitSecDep}>Add <FontAwesomeIcon icon={faArrowRight} className="text-blue-50" color="#ffffff" /></div>
        </div>
    </div>
)}

        </div>
    )
}

export default CompanyMain