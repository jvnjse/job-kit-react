
import React from 'react'
import EmployeeBox from './EmployeeBox'

function Employees() {
    return (
        <div className='w-full flex flex-wrap justify-center items-center p-7 gap-10 max-md:p-2 max-md:gap-4'>
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
            <EmployeeBox />
        </div>

    )
}

export default Employees