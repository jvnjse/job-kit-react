import React, { useState } from 'react'
import Education from './Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MakeApiRequest from '../../../../Functions/AxiosApi';


function PersonalDetails() {


    const [personalinfo, setPersonalinfo] = useState({
        user_id: "1",
        full_name: "",
        dob: "",
        mobile: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pin_code: "",
    })
    const [file, setFile] = useState();
    const [details, setDetails] = useState(false);

    function HandleNextDetails() {
        setDetails(false)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
    };

    function HandlePesronalInfo(e) {
        const { name, value } = e.target;
        setPersonalinfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in personalinfo) {
            formData.append(key, personalinfo[key]);
        }
        formData.append("profile_image", file);
        const headers = {}

        MakeApiRequest('post', 'http://127.0.0.1:8000/employee/1/', headers, formData)
            .then(response => {
                // Handle the API response
            })
            .catch(error => {
                // Handle any errors
            });
        console.log(formData)
        HandleNextDetails()
    };



    return (<>
        {
            details ?
                <form onSubmit={handleSubmit} >
                    <div className="flex justify-evenly pt-20 max-sm:flex-col-reverse max-sm:justify-normal max-sm:pt-3">
                        <div className=' max-sm:p-8'>
                            <div className='fill-personal font-bold text-xl '>Fill your Personal Information</div>
                            <label className='flex flex-col  gap-1 text-xs'>Full Name
                                <input
                                    type='text'
                                    name="full_name"
                                    className='signup-input border border-black-950 w-64 h-8 ml-2'
                                    value={personalinfo.full_name}
                                    onChange={HandlePesronalInfo}
                                    required
                                />

                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>Date of Birth
                                <input
                                    type='date'
                                    name='dob'
                                    value={personalinfo.dob}
                                    onChange={HandlePesronalInfo}
                                    required
                                    className='signup-input border border-black-950 w-64 h-8 ml-2' />
                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>Mobile
                                <div className='flex gap-3'>
                                    <input
                                        type='text'
                                        value="+91"
                                        className='signup-input border border-black-950 w-10 h-8 ml-2' />
                                    <input
                                        type='tel'
                                        name="mobile"
                                        value={personalinfo.mobile}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-60  h-8 ' />
                                </div>
                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>Address Line 1
                                <input
                                    type='text'
                                    name='address_line1'
                                    value={personalinfo.address_line1}
                                    onChange={HandlePesronalInfo}
                                    required
                                    className='signup-input border border-black-950 w-64 h-8 ml-2' />
                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>Address Line 2
                                <input
                                    type='text'
                                    name='address_line2'
                                    value={personalinfo.address_line2}
                                    onChange={HandlePesronalInfo}
                                    required
                                    className='signup-input border border-black-950 w-64 h-8 ml-2' />
                            </label>
                            <div className="flex flex-row gap-5">
                                <label className='flex flex-col  gap-1 text-xs'>City
                                    <input
                                        type='text'
                                        name='city'
                                        value={personalinfo.city}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-20 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col  gap-1 text-xs'>State
                                    <input
                                        type='text'
                                        name='state'
                                        value={personalinfo.state}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-20 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col  gap-1 text-xs'>Pin Code
                                    <input
                                        type='text'
                                        name='pin_code'
                                        value={personalinfo.pin_code}
                                        onChange={HandlePesronalInfo}
                                        required
                                        className='signup-input border border-black-950 w-20 h-8 ml-2' />
                                </label>
                            </div>
                            <button className="continue-btn float-right px-5 py-2 mt-6" type="submit" >Continue <FontAwesomeIcon icon={faArrowRight} color='white' /></button>
                        </div >
                        <div className="flex flex-col ">
                            <div className='font-bold  text-base '>Add your Profile Image</div>
                            <div className="profile-add-text flex flex-col relative max-sm:flex-row">
                                <input
                                    type="file"
                                    title=""
                                    className='choose-file-box'
                                    id=""
                                    name='profile_image'
                                    accept=" image/jpeg, image/png"
                                    onChange={handleFileChange}
                                    required />
                                <div style={{
                                    backgroundImage: `url(${file})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "200px", height: "200px", borderRadius: "25px"
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button >Submit</button> */}
                </form>
                :
                // _____________________________________________________
                <div >
                    <Education />
                </div>
        }
    </>

    )
}

export default PersonalDetails