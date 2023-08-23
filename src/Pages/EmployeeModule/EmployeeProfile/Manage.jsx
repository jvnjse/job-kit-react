import React from 'react'

function Manage() {
    return (
        <div>
            <div className='font-bold'>Your current Job Search Category </div>
            <div className=' px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl'>IT & Web Development</div>
            <div className=' font-bold'>Change your Job Category</div>
            <div className='flex gap-6'>
                <select name="" id="" className=' px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl'>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                </select>
                <div className=' self-end px-2 rounded-xl bg-primary_blue text-text_white_primary_color' >Submit</div>
            </div>
        </div>
    )
}

export default Manage