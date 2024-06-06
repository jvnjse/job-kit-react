import React, { useEffect, useState } from 'react'
import imageemployee from "../../../Assets/Images/employeeprofile.png"
import MakeApiRequest from "../../../Functions/AxiosApi";
import config from "../../../Functions/config";
import Cookies from "js-cookie";

function CompanyEmployee({ id }) {
    console.log(id, "companyemployee")
    const access_token = Cookies.get("access_token");
    const [employees, setEmployees] = useState([]);
    const headers = {
        Authorization: `Bearer ${access_token}`,
      };
    const fetchEmployees =() => {//test
        MakeApiRequest('get', `${config.baseUrl}company/company/employee/${id}/`) //testing with manuel api
         
          .then(response => {
            setEmployees(response);
            console.log(response, "employee")
          })
          .catch(error => {
            console.error('Error fetching employee data:', error);
          });
      } ;
    
      useEffect(() => {
        fetchEmployees(); 
      }, []);
    return (
        <div className=' flex flex-wrap gap-14 px-24 max-sm:px-2'>
               {employees && 
                  employees.map(employee => (
                    <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>{employee.employee_name}</div>
                    <div className=' text-[10px] font-thin'>{employee.department_names}</div>
                    <div className=' text-xs font-thin'>{employee.employee_position}</div>
                </div>
            </div>
                  ))}
            {/* <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div>
                
            <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div>
            <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div>
            <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div>
            <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div>
            <div className=' w-[280px] bg-primary_white flex px-3 py-2 rounded-lg gap-2 shadow-md relative cursor-pointer '>
                <div className=' w-14 h-14 rounded-xl'>
                    <img src={imageemployee} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>John Doe</div>
                    <div className=' text-[10px] font-thin'>Company Department</div>
                    <div className=' text-xs font-thin'>Job Position</div>
                </div>
            </div> */}
        </div>
    )
}

export default CompanyEmployee