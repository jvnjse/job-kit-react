import React from 'react'

function EmployerRequest() {
    return (
        <div className='p-3'>
            <div>
                <div className=' font-extrabold text-2xl mb-5'>
                    Employee Category Requests
                </div>
                <table className='w-full text-center border'>
                    <tr className=' bg-gray-300 font-bold'>
                        <td>No</td>
                        <td>Employer Name</td>
                        <td>Current Category</td>
                        <td>Requesting Category</td>
                        <td>Reason</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td>Design and Graphics</td>
                        <td className='text-xs text-left w-1/5'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td>Design and Graphics</td>
                        <td className='text-xs text-left w-1/5'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td>Design and Graphics</td>
                        <td className='text-xs text-left w-1/5'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                </table>
            </div>
            <div>
                <div className=' font-extrabold text-2xl mb-5'>
                    Employee Job Requests
                </div>
                <table className='w-full text-center border'>
                    <tr className=' bg-gray-300 font-bold'>
                        <td>No</td>
                        <td>Employer Name</td>
                        <td>Current Category</td>
                        <td>Requesting Category</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td className='text-xs text-left w-1/4'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td className='text-xs text-left w-1/4'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                    <tr className='border-b border-gray-400'>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>IT Development</td>
                        <td className='text-xs text-left w-1/4'>Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel eu egestas dictum.</td>
                    </tr>
                </table>
            </div>
        </div >
    )
}

export default EmployerRequest