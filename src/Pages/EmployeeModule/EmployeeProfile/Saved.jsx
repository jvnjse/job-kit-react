import React, { useEffect, useState } from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import Cookies from 'js-cookie';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';

function Saved(props) {
    const closetoggleBox = props.closetoggleBox
    const access_token = Cookies.get('access_token')
    const [job, setJob] = useState([])
    const user_id = Cookies.get('user_id')
    const [savedJobs, setSavedJobs] = useState([]);
    
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }

    useEffect(() => {
      
        GetSavedjobs ()
    }, []);

    const GetSavedjobs=() => {
        // Make API request to fetch saved jobs for the user
        MakeApiRequest('get', `${config.baseUrl}employee/get-saved-jobs/${user_id}/`, headers)
            .then(response => {
                setSavedJobs(response);
                console.log(response,"saved jobs")
            })
            .catch(error => {
                console.error('Error fetching saved jobs:', error);
            });
    };

    return (
        <div className=' flex flex-wrap gap-10 p-16' onClick={closetoggleBox}>
             <div className=' flex flex-wrap gap-10 p-16' onClick={closetoggleBox}>
        {job  &&
  savedJobs.map((job) => (
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
         ))}
            
        </div>
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

export default Saved