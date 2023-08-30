import React from 'react'

function Manage(props) {
    const closetoggleBox = props.closetoggleBox

    return (
        <div onClick={closetoggleBox} className='px-5'>
            <div className='font-bold mt-5'>Your current Job Search Category </div>
            <div className=' px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl'>IT & Web Development</div>
            <div className=' font-bold mt-4'>Change your Job Category</div>
            <div className='flex gap-6'>
                <select name="" id="" className=' px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl'>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                </select>
                <div className=' self-end px-2 rounded-xl bg-primary_blue text-text_white_primary_color' >Submit</div>
            </div>
            <div className='font-bold mt-5'>Request for a New Job</div>
            <div className=' flex items-end'>
                <textarea type="text" placeholder='Type the reason for job change' className='p-2' />
                <div className='bg-primary_blue text-text_white_primary_color max-w-max px-2 rounded-full'>submit</div>
            </div>
            <div className='font-bold mt-5'>Change Password</div>
            <div className='bg-primary_blue text-text_white_primary_color max-w-max px-2 py-2 rounded-lg mt-2'>Change Password</div>
        </div>
    )
}

export default Manage