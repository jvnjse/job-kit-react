import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function AboutCompany() {
    return (
        <div>
            <div className=' text-lg font-bold'>About Company</div>
            <div className=' text-sm w-3/5'>Lorem ipsum dolor sit amet consectetur. Volutpat et vivamus amet feugiat et nisi vulputate nullam cras. Sem quis dui metus diam in elit sollicitudin nec. In euismod justo sodales suscipit id duis.</div>
            <div className=' text-lg font-bold mt-6'>Contact us</div>
            <div className=' flex gap-6'>
                <div className=' font-semibold'>Phone: <span className=' font-normal'>5217358288</span></div>
                <div className=' font-semibold'>Website : <a target='_blank' className=' font-normal text-blue-500' href=' '>www.website.co</a></div>
            </div>
            <div className=' text-lg font-bold mt-6'>Socials</div>
            <div className=' flex gap-5 text-2xl mt-2'>
                <FontAwesomeIcon className='  hover:text-primary_blue cursor-pointer' icon={faInstagram} />
                <FontAwesomeIcon className='  hover:text-primary_blue cursor-pointer' icon={faTwitter} />
                <FontAwesomeIcon className='  hover:text-primary_blue cursor-pointer' icon={faLinkedin} />
            </div>
        </div>
    )
}

export default AboutCompany