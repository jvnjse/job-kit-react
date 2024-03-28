import {
  faArrowAltCircleRight,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import employeeprofile from "../../../Assets/Images/employeeprofile.png";
import { Link } from "react-router-dom";
import MakeApiRequest from "../../../Functions/AxiosApi";
import config from "../../../Functions/config";
import Cookies from "js-cookie";
import CreatableSelect from 'react-select/creatable';
import { Settings } from "lucide-react";
const CompanyEmployees = () => {
  // function CompanyEmployees() {
  const user_id = Cookies.get("user_id");
  const access_token = Cookies.get("access_token");
  const [addemployeemodal, setaddemployeemodal] = useState(false);
  const [employees, setEmployees] = useState([]); //test
  const [selectedDepartment, setSelectedDepartment] = useState('');//test
  const fetchEmployees =() => {//test
    MakeApiRequest('get', `${config.baseUrl}company/company/employee/${user_id}/`) //testing with manuel api
     
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

  // // Group employees by department
  // const groupedEmployees = employees.reduce((acc, employee) => {
  //   employee.department_names.forEach(department => {
  //     if (!acc[department]) {
  //       acc[department] = [];
  //     }
  //     acc[department].push(employee);
  //   });
  //   return acc;
  // }, {});//test


  const closemodal = () => {
    setaddemployeemodal(false);
  };

  const handleemployeeBoxClick = () => {
    setaddemployeemodal(true);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };


  const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // MakeApiRequest('get', `${config.baseUrl}company/department/`, headers)
      MakeApiRequest('get', `${config.baseUrl}company/company/get/department/${user_id}/`, headers)
      .then(response => {
          console.log(response,"response")
       
          setDepartments(response.map(response => ({ value: response, label: response})));
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching departments:', error);
          setLoading(false);
        });
    }, []);

    // const handleCreateOption = (inputValue) => {
    //     // You can handle the creation of a new option here
    //     const newValue = { value: inputValue.toLowerCase(), label: inputValue };
    //     setDepartments([...departments, newValue]);
    //     // You may also want to send a request to your server to create the option
    //   };
      console.log(departments, "depatrt")
  
  //test
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredEmployees = selectedDepartment
  ? employees.filter(employee => employee.department_names.includes(selectedDepartment))
  : employees;

  //test    

  const [it, setit] = useState(true);
  const [sales, setsales] = useState(false);
  const [design, setdesign] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({
    company_user_id: user_id,
    employee_name: "",
    employee_position: "",
    employee_phone_number: "",
    employee_email: "",
    employee_department: [],
  });
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    MakeApiRequest(
      "post",
      `${config.baseUrl}company/company/employee/${user_id}/`,
      headers,
      employeeInfo
    )
      .then((response) => {
        console.log(response);
        // GetEmployeeDetailList()
        setaddemployeemodal(false);
        fetchEmployees();
      })
     
      .catch((error) => {});
      
  };

  function HandleEmployeeInfo(e) {
    const { name, value } = e.target;
    if (name === "employee_department") {
      // Split the string value into an array
      const departments = value.split(",");
      setEmployeeInfo((prevState) => ({
        ...prevState,
        [name]: departments,
      }));
    } else {
      setEmployeeInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }
//test
  const handleDropdownChange = (e, department) => {
    const selectedEmployeeId = e.target.value;
    const departmentDiv = document.getElementById(`department-${department}`);
  



    // Hide all employee details divs
    const allDepartmentDivs = document.querySelectorAll('[id^="department-"]');
    allDepartmentDivs.forEach(div => {
      div.classList.add('hidden');
    });
  
    // Show the selected department's employee details div
    if (selectedEmployeeId) {
      departmentDiv.classList.remove('hidden');
    } else {
      departmentDiv.classList.add('hidden');
    }
  };
  
  

  // const handleIT = () => {
  //   setit(!it);
  // };
  // const handleSales = () => {
  //   setsales(!sales);
  // };
  // const handleDesign = () => {
  //   setdesign(!design);
  // };
  const  handleFaArrow = (depart) => {
   if (selectedDepartment === depart)
   {
    selectedDepartment ? setSelectedDepartment(null) :
    setSelectedDepartment(depart)
   }
   else{
    setSelectedDepartment(depart)
   }
     
  }

  return (
    <div className=" px-8 py-4">
      <div className="flex justify-between">
        <div className=" text-2xl font-bold text-text_black_primary_color select-none">
          Employees
        </div>
        <div
          onClick={handleemployeeBoxClick}
          className=" text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer"
        >
          Add Employees
        </div>
      </div>
      {/* tring the arrow key prev */}

      {/* <div > needed
        <label htmlFor="department">Select a department:</label>
        <select id="department" onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">All</option>
          {departments.map(department => (
            <option  key={department.label} value={department.label}>{department.label}</option>
          ))}
        </select>
      </div> */}

      <div>
        {departments.map(department => (
          <div key={department.label}>
            <div  className=" select-none  border-b-2 border-gray-300 mt-5" >
            
            {department.label}{" "}
           
            < FontAwesomeIcon onClick={() => handleFaArrow(department.label)} icon={selectedDepartment === department.label ? faArrowAltCircleDown : faArrowAltCircleRight} />
             
            
            </div>
            {selectedDepartment === department.label && (
              <ul className="flex flex-wrap">
                 
                {employees && employees.length > 0  ? ( 
                  employees.map(employee => (
                  employee.department_names.includes(department.label) && (
                    <li key={employee.id}>
                      <div className="flex px-10 py-2 flex-wrap gap-10 ">
                      <Link to={"/company/employeedetails"}>
           <div className='bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer'>
           <div className='w-20 h-20 rounded-lg -ml-5'>
            
             <img src={employeeprofile} alt={employee.employee_name} className='object-fill' />
           </div>
           <div className='flex flex-col'>
             <div className='text-base font-semibold'>{employee.employee_name}</div>
             <div className='text-[10px] font-thin'>{employee.employee_position}</div>
             
             <div className='flex flex-col'>
               
               <div className='text-[8px] text-green-600'>Matches Your Job Description</div>
               <div className='text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
             </div>
           </div>
           <div className='text-button_primary_color absolute top-1 right-3'></div>
         </div>
           </Link>
           </div> 
                    </li>
                  )
                ))): (
                <div> No Employees in this department </div>
                )
                }
                
              </ul>
            )}
          </div>
        ))}
      </div>
      
      {/* trying end */}
      {/* test 2 start on selecting a department on the dropodown employees of that department will be listed*/}
      {/* <div>
      <label htmlFor="department">Select a department:</label>
      <select id="department" onChange={handleDepartmentChange}>
        <option value="">All</option>
        {departments.map(department => (
          <option key={department.label} value={department.label}>{department.label}{console.log(department.label,"inside")}</option>
        ))}
      </select>

      <ul>
        {filteredEmployees.map(employee => (
         <div className='flex px-10 py-2 flex-wrap gap-10 '>
         <Link to={"/company/employeedetails"}>
           <div className='bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer'>
           <div className='w-20 h-20 rounded-lg -ml-5'>
            
             <img src={employeeprofile} alt={employee.employee_name} className='object-fill' />
           </div>
           <div className='flex flex-col'>
             <div className='text-base font-semibold'>{employee.employee_name}</div>
             <div className='text-[10px] font-thin'>{employee.employee_position}</div>
             
             <div className='flex flex-col'>
               
               <div className='text-[8px] text-green-600'>Matches Your Job Description</div>
               <div className='text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
             </div>
           </div>
           <div className='text-button_primary_color absolute top-1 right-3'></div>
         </div>
           </Link>
           </div>
        ))}
      </ul>
    </div> */}
      {/* test 2 ends */}
    
       {/* <div>
      {Object.entries(groupedEmployees).map(([department, employees]) => (
        <div key={department}>
          <h2>{department}</h2>
          {employees.map(employee => (
            <div className='flex px-10 py-2 flex-wrap gap-10 '>
           <Link to={"/company/employeedetails"}>
             <div className='bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer'>
             <div className='w-20 h-20 rounded-lg -ml-5'>
              
               <img src={employeeprofile} alt={employee.employee_name} className='object-fill' />
             </div>
             <div className='flex flex-col'>
               <div className='text-base font-semibold'>{employee.employee_name}</div>
               <div className='text-[10px] font-thin'>{employee.employee_position}</div>
               
               <div className='flex flex-col'>
                 
                 <div className='text-[8px] text-green-600'>Matches Your Job Description</div>
                 <div className='text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
               </div>
             </div>
             <div className='text-button_primary_color absolute top-1 right-3'></div>
           </div>
             </Link>
             </div>
          ))}
        </div>
      ))}
    </div> */}
      {/* test */}
      {/* <div className="mt-5">
        <div
          className=" select-none  border-b-2 border-gray-300"
          onClick={handleIT}
        >
          IT & Development{" "}
          {it ? (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </>
          )}
        </div>
        {it && (
          <div className="flex px-10 py-2 flex-wrap gap-10 ">
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
          </div>
        )}
        <div
          className="mt-3 select-none border-b-2 border-gray-300"
          onClick={handleSales}
        >
          Sales{" "}
          {sales ? (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </>
          )}
        </div>
        {sales && (
          <div className="flex px-10 py-2 flex-wrap gap-10 ">
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
          </div>
        )}
        <div
          className="mt-3 select-none border-b-2 border-gray-300"
          onClick={handleDesign}
        >
          Design{" "}
          {design ? (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </>
          )}
        </div>
        {design && (
          <div className="flex px-10 py-2 flex-wrap gap-10 ">
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
            <Link to={"/company/employeedetails"}>
              <div className=" bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ">
                <div className="w-20 h-20 rounded-lg -ml-5">
                  <img src={employeeprofile} alt="" className=" object-fill " />
                </div>
                <div className="flex flex-col">
                  <div className=" text-base font-semibold">
                    Name of Employee
                  </div>
                  <div className=" text-[10px] font-thin">Job Role</div> */}
                  {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                  {/* <div className=" flex flex-col">
                    <div className=" text-[8px] text-green-600">
                      Matches Your Job Description
                    </div>
                    <div className="  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1">
                      Remote
                    </div>
                  </div>
                </div>
                <div className=" text-button_primary_color absolute top-1 right-3 "></div>
              </div>
            </Link>
          </div>
        )}
      </div> */}
      {addemployeemodal && (
        <div className="" onClick={closemodal}>
          <div className="absolute top-0 left-0 h-full bg-neutral-700/70 w-full flex justify-center items-center">
            <div
              className=" w-6/12 flex flex-col gap-3 bg-white mt-20 rounded-lg py-5 px-14 max-sm:w-full"
              onClick={stopPropagation}
            >
              <div className=" text-xl font-semibold cursor-pointer">
                Add Employees
              </div>

              <div className="flex gap-4 max-sm:flex-col max-md:flex-col">
                <label className="flex flex-col flex-1  gap-1 text-xs ">
                  Employee Name
                  <input
                    type="text"
                    name="employee_name"
                    onChange={HandleEmployeeInfo}
                    value={employeeInfo.employee_name}
                    className="signup-input border border-black-950 w-full  h-8 ml-2"
                  />
                </label>
                <label className="flex flex-col flex-1 gap-1 text-xs">
                  Employee Position
                  <input
                    type="text"
                    name="employee_position"
                    onChange={HandleEmployeeInfo}
                    value={employeeInfo.employee_position}
                    className="signup-input border border-black-950 w-full h-8 ml-2"
                  />
                </label>
              </div>
              <div className="flex gap-4 max-sm:flex-col max-md:flex-col">
                <label className="flex flex-col flex-1  gap-1 text-xs">
                  Employee Email
                  <input
                    type="text"
                    name="employee_email"
                    onChange={HandleEmployeeInfo}
                    value={employeeInfo.employee_email}
                    className="signup-input border border-black-950 h-8 ml-2"
                  />
                </label>
                <label className="flex flex-col flex-1 gap-1 text-xs">
                  Phone
                  <input
                    type="text"
                    name="employee_phone_number"
                    onChange={HandleEmployeeInfo}
                    value={employeeInfo.employee_phone_number}
                    className="signup-input border border-black-950 h-8 ml-2"
                  />
                </label>
              </div>
              <div className="flex gap-4 max-sm:flex-col max-md:flex-col">
                <label className="flex flex-col  gap-1 text-xs">
                  Department of working
                  <div>
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <CreatableSelect
                        isClearable
                        options={departments}
                        onChange={(selectedOption) => {
                          const departmentValue = selectedOption
                            ? selectedOption.value
                            : "";
                          setEmployeeInfo((prevState) => ({
                            ...prevState,
                            employee_department: [departmentValue], // Send as a list
                            // employee_department: selectedOption ? selectedOption.value : '',
                          }));
                        }}
                      />
                    )}
                  </div>
                </label>
                <div
                  onClick={handleEmployeeSubmit}
                  className="self-end bg-primary_blue px-3 py-2 max-h-max text-xs rounded-lg text-text_white_primary_color cursor-pointer ml-20 whitespace-nowrap"
                >
                  Add employee
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyEmployees
