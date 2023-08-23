import React from 'react'

function CompanyDetails() {
    return (
        <div className=' flex justify-evenly'>
            <div>
                <label className='flex flex-col  gap-1 text-xs mt-4'>Company Type
                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                </label>
                <label className='flex flex-col  gap-1 text-xs mt-4'>Company Departments
                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                </label>
                <label className='flex flex-col  gap-1 text-xs mt-4'>Business Activity
                    <input type='text' className='signup-input border border-black-950 w-64 h-16 ml-2' />
                </label>
                <label className='flex flex-col  gap-1 text-xs mt-4'>Company Website
                    <input type='text' className='signup-input border border-black-950 w-64 h-8 ml-2' />
                </label>
            </div>
            <div>
                ggjhgjh
            </div>
        </div>
    )
}

export default CompanyDetails