import React, { useState } from 'react'
import "../../../EmployeeModule/EmployeeDetails/employeedetails1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CompanyDetails from './CompanyDetails';
import MakeApiRequest from '../../../../Functions/AxiosApi';
import config from '../../../../Functions/config';
import Cookies from "js-cookie";



function Companyinfo() {
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [file, setFile] = useState();
    const [viewfile, setViewFile] = useState();
    const [details, setDetails] = useState(false);
    const [companyinfo, setCompanyinfo] = useState({
        company_user_id: user_id,
        company_name: "",
        mobile: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pin_code: "",
    })

    const headers = {
        'Authorization': `Bearer ${access_token}`
    }

    function HandleCompanyInfo(e) {
        const { name, value } = e.target;
        setCompanyinfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in companyinfo) {
            formData.append(key, companyinfo[key]);
        }
        formData.append("profile_image", file);

        MakeApiRequest('post', `${config.baseUrl}company/${user_id}/`, headers, formData)
            .then(response => {
                console.log(response)
                HandleNextDetails()
            })
            .catch(error => {
            });
        console.log(formData)
    };
    function HandleNextDetails() {
        setDetails(false)
    }

    function handleChange(e) {
        const file = e.target.files[0];
        // setViewFile(URL.createObjectURL(file));
        setFile(file)
    }


    return (<>
        {details ?
            <form onSubmit={handleSubmit} className="flex justify-evenly pt-20 max-sm:flex-col-reverse max-sm:justify-normal max-sm:pt-3" >
                < div className=' max-sm:p-8'>
                    <div className='fill-personal font-bold text-xl '>Fill your Company Information</div>
                    <label className='flex flex-col  gap-1 text-xs'>Company Name
                        <input
                            type='text'
                            onChange={HandleCompanyInfo}
                            required
                            name='company_name'
                            value={companyinfo.company_name}
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Mobile
                        <div className='flex gap-3'>
                            <input type='text' value="+91" className='signup-input border border-black-950 w-10 h-8 ml-2' />
                            <input
                                type='number'
                                value={companyinfo.mobile}
                                onChange={HandleCompanyInfo}
                                required
                                name='mobile'
                                className='signup-input border border-black-950 w-60  h-8 ' />
                        </div>
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Address Line 1
                        <input
                            type='text'
                            onChange={HandleCompanyInfo}
                            required
                            value={companyinfo.address_line1}
                            name='address_line1'
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs'>Address Line 2
                        <input
                            type='text'
                            onChange={HandleCompanyInfo}
                            required
                            value={companyinfo.address_line2}
                            name='address_line2'
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <div className="flex flex-row gap-5">
                        <label className='flex flex-col  gap-1 text-xs'>City
                            <input
                                type='text'
                                onChange={HandleCompanyInfo}
                                required
                                value={companyinfo.city}
                                name='city'
                                className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>State
                            <input
                                type='text'
                                onChange={HandleCompanyInfo}
                                required
                                value={companyinfo.state}
                                name='state'
                                className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Pin Code
                            <input
                                type='text'
                                onChange={HandleCompanyInfo}
                                required
                                value={companyinfo.pin_code}
                                name='pin_code'
                                className='signup-input border border-black-950 w-20 h-8 ml-2' />
                        </label>
                    </div>
                    <button type='submit' className="continue-btn float-right px-5 py-2 mt-6 text-white" >Continue <FontAwesomeIcon className='text-white continue-btn' icon={faArrowRight} color='white' /></button>
                </div >
                <div className="flex flex-col ">
                    <div className='font-bold  text-base '>Add your Company Logo</div>
                    <div className="profile-add-text flex flex-col relative max-sm:flex-row">
                        <input type="file" title="" className='choose-file-box-company' id="" accept=" image/jpeg, image/png" onChange={handleChange} required />
                        {/* <div style={{
                            backgroundImage: `url(${viewfile})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "200px", height: "200px", borderRadius: "25px"
                        }}> 
                        </div>*/}
                    </div>
                </div>
            </form > :
            <div >
                {/* <Education /> */}
                <CompanyDetails />
            </div>
        }
    </>
    )
}

export default Companyinfo