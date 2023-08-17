import React, { useState } from 'react'


function PersonalDetails() {

    const [file, setFile] = useState();
    const [details, setDetails] = useState(true);

    function HandleNextDetails() {
        setDetails(false)

    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (<>
        {
            details ?
                <div className="flex justify-evenly pt-20">
                    < div >
                        <div className='fill-personal font-bold text-xl '>Fill your Personal Information</div>
                        <label className='flex flex-col  gap-1 text-xs'>Full Name
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Date of Birth
                            <input type='date' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Mobile
                            <div className='flex gap-3'>
                                <input type='text' value="+91" className='signup-input border border-black-950 w-10 h-8 ml-2' />
                                <input type='number' className='signup-input border border-black-950 w-60  h-8 ' />
                            </div>
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Address Line 1
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <label className='flex flex-col  gap-1 text-xs'>Address Line 2
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label>
                        <div className="flex flex-row gap-5">
                            <label className='flex flex-col  gap-1 text-xs'>City
                                <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>State
                                <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                            </label>
                            <label className='flex flex-col  gap-1 text-xs'>Pin Code
                                <input type='text' className='signup-input border border-black-950 w-20 h-8 ml-2' />
                            </label>
                        </div>
                        <div className="continue-btn float-right px-5 py-2 mt-6" onClick={HandleNextDetails}>Continue</div>
                    </div >
                    <div className="flex flex-col">
                        <div className="profile-add-text font-bold  text-base flex flex-col relative">Add your Profile Image
                            <input type="file" title="" className='choose-file-box' id="" accept=" image/jpeg, image/png" onChange={handleChange} />
                            <div style={{
                                backgroundImage: `url(${file})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "200px", height: "200px", borderRadius: "25px"
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
                :
                // _____________________________________________________
                <div >
                    <div className=' text-center text-2xl font-bold'>Education</div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col border-r-2 flex-1 items-center">
                            <div className=' text-left'>
                                <div className=' mt-5'>Course Name</div>
                                <div className=' text-sm'>Institution Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>Course Name</div>
                                    <div className=' text-xs'>Course Name</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Course Name</div>
                                <div className=' text-sm'>Institution Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>Course Name</div>
                                    <div className=' text-xs'>Course Name</div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <div className=' mt-5'>Course Name</div>
                                <div className=' text-sm'>Institution Name</div>
                                <div className='flex gap-3'>
                                    <div className=' text-xs'>Course Name</div>
                                    <div className=' text-xs'>Course Name</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className=' text-end pr-36 font-bold text-blue-800'>Add Education</div>
                            <div>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Course
                                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col gap-1 text-xs pl-10'>Institution Name
                                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                                </label>
                                <div className="flex">
                                    <label className='flex flex-col gap-1 text-xs pl-10'>From
                                        <input type='date' className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                    </label>
                                    <label className='flex flex-col gap-1 text-xs pl-10'>To
                                        <input type='date' className='signup-input border border-black-950  w-32 h-8 ml-2' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>

    )
}

export default PersonalDetails