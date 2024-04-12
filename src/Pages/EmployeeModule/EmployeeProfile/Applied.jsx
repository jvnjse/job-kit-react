import React, { useEffect, useState } from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as regular} from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solid} from '@fortawesome/free-solid-svg-icons';


import Cookies from 'js-cookie';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';
import { useNavigate } from 'react-router-dom';

function Applied(props) {
    const access_token = Cookies.get('access_token')
    const [job, setJob] = useState([])
    const user_id = Cookies.get('user_id')
    const [savedJobs, setSavedJobs] = useState([]);
    const [isJobSaved, setIsJobSaved] = useState(false);
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    useEffect(() => {
        console.log(savedJobs, "11"); 
        GetAppliedjobs ()
        GetSavedjobs ()
    }, []);

    const GetSavedjobs=() => {
        // Make API request to fetch saved jobs for the user
        MakeApiRequest('get', `${config.baseUrl}employee/get-saved-jobs/${user_id}/`, headers)
            .then(response => {
                console.log(response,"blah");
                setSavedJobs(response);
                console.log(response,"getsaved")
                // job.forEach((job) => {
                //     if (response.includes(job.id)) {
                //         setIsJobSaved(true);
                //     }
                // });
                let isSaved = false;
                for (let i = 0; i < job.length; i++) {
                    if (response.includes(job[i].id)) {
                        isSaved = true;
                        break;
                    }
                }
                setIsJobSaved(isSaved);
            })
            .catch(error => {
                console.error('Error fetching saved jobs:', error);
            });
    };

    const GetAppliedjobs = () => {
        MakeApiRequest('get', `${config.baseUrl}employee/get-applied-jobs/${user_id}/`, headers)
        .then(response => {
            console.log(response,"full")
            
            setJob(response)
           
           
        })
        .catch(error => {
            console.log(error)
        });
    }

    const SaveJob = (jobId) => {

        const data = {
            user: user_id,
            saved_job_id: jobId
        };
       console.log(data, "post data")
       MakeApiRequest('post', `${config.baseUrl}employee/post-applied-jobs/`,headers,data)
       .then(response => {
           console.log(response, "saved job succesfully");
           setSavedJobs([...savedJobs, jobId]);
           setIsJobSaved(true);
        //    updateSavedJobsOnServer([...savedJobs, jobId]);                                                                                       
           })
       .catch(error => {
           console.log(error);
       });
   }
    const closetoggleBox = props.closetoggleBox

    return (
        <div className=' flex flex-wrap gap-14 px-24 max-sm:px-2'>
        {/* {job  &&
  job.map((job) => (
        <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
            <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
            </div>
            <div className='flex flex-col'>
                <div className=' text-base font-semibold'>{job.job_title}</div>
                <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                <div className=' flex gap-2'>
                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>{job.mode_of_work}</div>
                    <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                </div>
            </div>
            <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
        </div> 
         ))} */}
     
    

        <div className=' flex flex-wrap gap-10 p-16' onClick={closetoggleBox}>
        {job  &&
  job.map((job) => (
        <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
            <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
            </div>
            <div className='flex flex-col'>
                <div className=' text-base font-semibold'>{job.job_title}</div>
                <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                <div className=' flex gap-2'>
                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>{job.mode_of_work}</div>
                    <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                </div>
            </div>
            {console.log(savedJobs.includes(job.id),"checking")}
            {savedJobs.includes(job.id) ? (
                                 <div className='text-button_primary_color absolute top-1 right-2'>
                                 <FontAwesomeIcon icon={isJobSaved ? solid : regular} onClick={() => SaveJob(job.id)} />
                             </div>
                            ) : (
                                <div onClick={() => { SaveJob(job.id) }} className='text-button_primary_color text-blue absolute top-1 right-2 cursor-pointer'>
                                    <FontAwesomeIcon icon={regular} />
                                </div>
                            )}
        </div> 
         ))}
           </div>
      

{/* {job.map((job) => (
                <div className='bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer'>
                    <div className='bg-background_grey_color w-14 h-14 rounded-xl'>
                        <img src={companylogo} alt="" className='object-cover mix-blend-multiply' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-base font-semibold'>{job.job_title}</div>
                        <div className='text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className='text-xs font-semibold'>₹180000 - ₹400000</div>
                        <div className='flex gap-2'>
                            <div className='text-[8px] bg-background_grey_color px-1 rounded-lg'>{job.mode_of_work}</div>
                            <div className='text-[8px] text-green-600'>Matches Your Skills</div>
                        </div>
                    </div>
                    <div className='text-button_primary_color absolute top-1 right-2'>
                        <FontAwesomeIcon icon={isJobSaved ? faBookmark : faBookmarkRegular} onClick={() => SaveJob(job.id)} />
                    </div>
                </div>
            ))}
        </div> */}
            {/* <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>Job Title</div>
                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                    <div className=' flex gap-2'>
                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                    </div>
                </div>
                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
            </div>
            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>Job Title</div>
                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                    <div className=' flex gap-2'>
                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                    </div>
                </div>
                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
            </div>
            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>Job Title</div>
                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                    <div className=' flex gap-2'>
                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                    </div>
                </div>
                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
            </div> */}
      </div> 
    )
}

export default Applied