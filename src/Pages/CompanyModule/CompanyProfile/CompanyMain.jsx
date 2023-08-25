import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"

function CompanyMain() {
    return (
        <div className='px-7 pt-10'>
            <div className='flex gap-3'>
                <div className=' w-24 h-24 rounded-2xl overflow-hidden'>
                    <img src={profileimage} alt="" />
                </div>
                <div>
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>Company Name</div>
                    <div className=' text-sm '>Company Sector</div>
                    <div className=' text-xs'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                </div>
            </div>
            <div className=' bg-primary_blue px-3 py-2 rounded-xl w-[130px] text-sm text-text_white_primary_color mt-3'>Post a New Job</div>
            <div className=' text-lg font-bold mt-3'>About Company</div>
            <div className=' text-sm w-3/5 leading-4'>Lorem ipsum dolor sit amet consectetur. Volutpat et vivamus amet feugiat et nisi vulputate nullam cras. Sem quis dui metus diam in elit sollicitudin nec. In euismod justo sodales suscipit id duis.</div>
            <div className=' text-lg font-bold mt-3'>Add Company Working Sector <FontAwesomeIcon icon={faPlusCircle} /></div>
            <div className='flex gap-4'>
                <div className=' border border-gray-700 px-2 rounded-full'>IT</div>
                <div className=' border border-gray-700 px-2 rounded-full'>Developement</div>
                <div className=' border border-gray-700 px-2 rounded-full'>Finance</div>
            </div>

        </div>
    )
}

export default CompanyMain