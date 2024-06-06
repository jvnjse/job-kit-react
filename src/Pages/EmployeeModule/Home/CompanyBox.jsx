import React from 'react';
import "./home.css";
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function CompanyBox({ company, click }) {
    const { company_name, address_line1, address_line2, city, state, pin_code, mobile } = company;

    return (
        <div className='bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer' onClick={click}>
            <div className='bg-background_grey_color w-14 h-14 rounded-xl'>
                {/* Assuming company logo is available in the company object */}
                <img src={companylogo} alt="" className='object-cover mix-blend-multiply' />
            </div>
            <div className='flex flex-col'>
                <div className='text-base font-semibold'>{company_name}</div>
                <div className='text-[10px] font-thin'>{city}, {state}</div>
                <div className='text-[10px] font-thin'>{mobile}</div>
            </div>
            <div className='text-button_primary_color absolute top-1 right-2'>
                <FontAwesomeIcon icon={faBookmark} />
            </div>
        </div>
    );
}

export default CompanyBox;
