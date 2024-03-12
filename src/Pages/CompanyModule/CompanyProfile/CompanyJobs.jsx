import React, { useState, useEffect} from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
// import JobDescription from '../../EmployeeModule/Home/JobDescription';
import { Link } from "react-router-dom"
import Cookies from 'js-cookie';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';



function CompanyJobs() {
    const [jobpostmodal, setJobpostModal] = useState(false);
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [tags, setTags] = useState([]); 
    const [skillInputValue, setskillInputValue] = useState('');
    const [companydetails, setCompanydetails] = useState([])
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [job, setJob] = useState([])
    const closemodal = () => {
        setJobpostModal(false);
        resetJobData()
    };

    const handleemployeeBoxClick = () => {
        setJobpostModal(true);
    };
    const stopPropagation = (e) => { 
        e.stopPropagation();
    };
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    //---------------------adding-----------------------
    const [jobData, setJobData] = useState({
        job_title: '',
        job_description: '',
        qualifications_requirements: '',
        location: '',
        mode_of_work: '',
        salary_range_from: '',
        salary_range_to: '',
        application_deadline: '',
       // tags: '', //keywords_tags given earlier which were not accepted in the backend
    });

    // const tagsArray = jobData.tags ? jobData.tags.split(',').map(tag => tag.trim()) : []; // Split by comma and trim whitespace
    // const dataToSend = jobData ? {
    //     ...jobData,
    //     tags: tagsArray,
    //     user: 1,
    // } : {};
    // const dataToSend = {
    //     ...jobData,
    //     tags: tagsArray,
    //     user: 1,
    // };




    const GetCompanyDetails = () => {
        
        MakeApiRequest('get', `${config.baseUrl}/company/${user_id}/`, headers)
            .then(response => {
                console.log(response)
                setCompanydetails(response[0])
               
            })
      
            .catch(error => {
            });
    }
        useEffect(() => {
            GetCompanyDetails()
        }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
        console.log(jobData)
    };

    useEffect(() => {
        MakeApiRequest('get', `${config.baseUrl}/post/job/${user_id}/`, headers)
            .then(response => {
                console.log(response)
                setJob(response)
                // closemodal()
                console.log("its working")
               
            })
            .catch(error => {
                console.log(error)
            });
            console.log(jobData,"data")
    }, []);
     //----------------------------------------------------------------------
  //--------------------------------------------------------------------------
  // creating
  const HandleEdit = (jobId) => {
    MakeApiRequest('get', `${config.baseUrl}/get/job/${jobId}/`, headers)
        .then(response => {
            console.log(response, "getting the data");
            console.log("get is active now");
            if (response.length > 0) {
                const jobData = response[0]; // Assuming response is an array of objects
                console.log("jobData.id:", jobData.id); // Log the id value here
            //  setJobData({
            //     id: jobData.id,
            //     job_title: jobData.job_title,
            //     job_description: jobData.job_description,
            //     qualifications_requirements: jobData.qualifications_requirements,
            //     location:jobData.location,
            //     mode_of_work: jobData.mode_of_work,
            //     salary_range_from:jobData.salary_range_from,
            //     salary_range_to:jobData.salary_range_to,
            //     application_deadline: jobData.application_deadline,
            //     tags: jobData.tags?.join(','), // Assuming tags is an array
            //  });
            setJobData({
                ...jobData,
                tags: jobData.tags?.join(','), // Assuming tags is an array
            });
            setTags(jobData.tags);
            setSelectedJobId(jobData.id); // Set the selected job ID in the parent component state
            setJobpostModal(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

 console.log(jobData, "data set successfully")




  //----------------------------------------------------------------------

  const resetJobData = () => {
    setSelectedJobId(null) // initializing the globally available id to null
    setJobData({
        job_title: '',
        job_description: '',
        qualifications_requirements: '',
        location: '',
        mode_of_work: '',
        salary_range_from: '',
        salary_range_to: '',
        application_deadline: '',
        tags: '',
    });
};

  //--------------------------------------------------------------------------
  // adding

  const HandleJobpost = () => {
  
    console.log("jobData before HandleJobpost:", jobData); 
    console.log("jobData.id:", jobData.id); // Log the id value here 
    if (selectedJobId) {
        MakeApiRequest('put', `${config.baseUrl}/get/job/${selectedJobId}/`, headers, {
            ...jobData,
            tags: tags,
            })
            .then(response => {
                console.log(response);
                closemodal();
                resetJobData(); // Reset form fields
                // HandleNextDetails()
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        console.log("jobData.id is undefined. Cannot proceed with HandleJobpost");
        MakeApiRequest('post', `${config.baseUrl}/post/job/${user_id}/`, headers,{
            ...jobData,
            tags: tags,
            }) 
            .then(response => {
                console.log(response);
                closemodal();
                resetJobData(); // Reset form fields
                // HandleNextDetails()
            })
            .catch(error => {
                console.log(error);
            });
    }
};


//   const HandleJobpost = () => {
//     MakeApiRequest('post', `${config.baseUrl}/post/job/${user_id}/`, headers, dataToSend)
//         .then(response => {
//             console.log(response)
//             closemodal()
//             // HandleNextDetails()
//         })
//         .catch(error => {
//         });
// }

//  to handle the tag in skill-----------------------------------------
//----------------------------------------------------------------------------
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
};;

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://127.0.0.1:8000/post/job/4/');
    //         setJobData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching data: ', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    return (
        <div className=' px-8 py-4'>

            <div className='flex'>
            {console.log("in return2")}
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Job Vacancies</div>
            </div>
            
            <div onClick={handleemployeeBoxClick} className='whitespace-nowrap w-min mt-4 text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer'>Add Job</div>
            {/* --------------------------------------------------------------------------------------    
--------------------------------------------------------------------------------------  
 dispaly in the job vacancies 
   
--------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------      */}

     {/* <div>
        hi
      {jobData  &&
      jobData.map((job) => (
        <div key={job.id} className='bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
          <div className='bg-background_grey_color w-14 h-14 rounded-xl'>
            <img src={companylogo} alt="" className='object-cover mix-blend-multiply' />
          </div>
          <div className='flex flex-col'>
            {console.log("in return")}
            <div className='text-base font-semibold'>{job.job_title}</div>
            <div className='text-[10px] font-thin'>{job.job_description}</div>
            <div className='flex gap-2 mt-1'>
              <div className='text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
              <div className='text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
            </div>
          </div>
          <div className='text-button_primary_color absolute top-1 right-2'></div>
        </div>
      ))}
     </div> */}

{/* --------------------------------------------------------------------------------------    
--------------------------------------------------------------------------------------  
 dispaly 
   
--------------------------------------------------------------------------------------  
--------------------------------------------------------------------------------------      */}
            <div className="flex flex-row flex-wrap gap-4 mt-5">
           
            <div className="flex flex-row flex-wrap gap-4 mt-5">
     
      {job  &&
      job.map((job) => (
        <div key={job.id} className='bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
          <div className='bg-background_grey_color w-14 h-14 rounded-xl'>
            <img src={companylogo} alt="" className='object-cover mix-blend-multiply' />
          </div>
          <div className='flex flex-col  w-[250px]'>
            {console.log("in return")}
            <div className='text-base font-semibold'>{job.job_title}</div>
            <div className='text-[12px] font-thin'>{companydetails.company_name} </div>
            <div className='font-thin text-[10px]'>{job.location}</div>
            <div className='font-thin text-[10px]'>{job.mode_of_work}</div>
            <div className='flex gap-2 mt-1'>
            <Link to={`/employee/jobdetails?id=${job.id}/`}> 
              <div  className='text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
              </Link>
              <div onClick={() => HandleEdit(job.id)} className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Edit Details</div>
            </div>
          </div>
          <div className='text-button_primary_color absolute top-1 right-2'></div>
        </div>
      ))}
     </div>
                
                {/* <Link to={"/employee/jobdetails"}>
                    <div className=' bg-primary_white flex p-3  rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max '>
                        <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                            <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                        </div>
                        <div className='flex  flex-col w-[250px]'>
                            <div className=' text-base font-semibold'>Job Title</div>
                            <div className=' text-[12px] font-thin'>Company name</div>
                            <div className='font-thin text-[10px]'>location  </div>
                            <div className=' flex gap-2 mt-1'>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>mode</div>
                            </div>
                        </div>
                        <div className=' text-button_primary_color absolute top-1 right-2'></div>
                    </div>
                </Link> */}
                {/* <Link to={"/employee/jobdetails"}>
                    <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                        <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                            <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                        </div>
                        <div className='flex flex-col'>
                            <div className=' text-base font-semibold'>Job Title</div>
                            <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className=' flex gap-2 mt-1'>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                            </div>
                        </div>
                        <div className=' text-button_primary_color absolute top-1 right-2'></div>
                    </div>
                </Link>
                <Link to={"/employee/jobdetails"}>
                    <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                        <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                            <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                        </div>
                        <div className='flex flex-col'>
                            <div className=' text-base font-semibold'>Job Title</div>
                            <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className=' flex gap-2 mt-1'>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                            </div>
                        </div>
                        <div className=' text-button_primary_color absolute top-1 right-2'></div>
                    </div>
                </Link> */}
                {/* <Link to={"/employee/jobdetails"}>
                    <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                        <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                            <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                        </div>
                        <div className='flex flex-col'>
                            <div className=' text-base font-semibold'>Job Title</div>
                            <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className=' flex gap-2 mt-1'>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                            </div>
                        </div>
                        <div className=' text-button_primary_color absolute top-1 right-2'></div>
                    </div>
                </Link> */}
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
                                <div className="tag-list px-2 py-2 ml-4">
                                {tags.map((tag, tagIndex) => (
                                       <div key={tagIndex} className="tag text-sm font-thin">
                                           {tag}
                                           <button
                                               className="tag-remove-button"
                                               onClick={() =>handleTagRemove(tagIndex)}
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


                                {/* <input
                                    type="text"
                                    name="tags"
                                    value={jobData.tags}
                                    onChange={handleChange}
                                    className="h-16 text-sm font-thin bg-gray-200 p-2 rounded-lg"
                                    placeholder="Enter the keywords and tags related to the job"
                                /> */}
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

export default CompanyJobs