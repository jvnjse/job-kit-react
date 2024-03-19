import { faArrowAltCircleRight, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect } from 'react'
import employeeprofile from "../../../Assets/Images/employeeprofile.png"
import { Link } from 'react-router-dom';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';
import Cookies from "js-cookie";
//--------------for combobox----------
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "src/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover";

function CompanyEmployees() {
    

    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [addemployeemodal, setaddemployeemodal] = useState(false);

    const closemodal = () => {
        setaddemployeemodal(false);
    };

    const handleemployeeBoxClick = () => {
        setaddemployeemodal(true);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    //--------------for combobox----------
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [frameworks, setFrameworks] = React.useState([]);
  
    useEffect(() => {
      // Fetch department names from API
      fetch("http://127.0.0.1:8000/company/employee/department/")
        .then((response) => response.json())
        .then((data) => setFrameworks(data))
        .catch((error) => console.error("Error fetching departments:", error));
    }, []);
    //--------------end for combobox----------

    const [it, setit] = useState(true)
    const [sales, setsales] = useState(false)
    const [design, setdesign] = useState(false)
    const [employeeInfo, setEmployeeInfo] = useState({
        company_user_id: "",
        employee_name: "",
        employee_position: "",
        employee_phone_number: "",
        employee_email: "",
        employee_department: "",
    })
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    const handleEmployeeSubmit = (e) => {
        e.preventDefault();
        MakeApiRequest('post', `${config.baseUrl}company/company/employee/${user_id}/`, headers, employeeInfo)
            .then(response => {
                console.log(response)
                // GetEmployeeDetailList()
            })
            .catch(error => {
            });
    };

    function HandleEmployeeInfo(e) {
        const { name, value } = e.target;
        setEmployeeInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleIT = () => {
        setit(!it)

    };
    const handleSales = () => {
        setsales(!sales)

    };
    const handleDesign = () => {
        setdesign(!design)

    };
    return (
        <div className=' px-8 py-4'>
            <div className='flex justify-between'>
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Employees</div>
                <div onClick={handleemployeeBoxClick} className=' text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer'>Add Employees</div>
            </div>
            <div className='mt-5'>
                <div className=' select-none  border-b-2 border-gray-300' onClick={handleIT}>IT & Development {it ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {it &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                    </div>
                }
                <div className='mt-3 select-none border-b-2 border-gray-300' onClick={handleSales}>Sales {sales ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {sales &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                    </div>
                }
                <div className='mt-3 select-none border-b-2 border-gray-300' onClick={handleDesign}>Design {design ? <><FontAwesomeIcon icon={faArrowAltCircleDown} /></> : <><FontAwesomeIcon icon={faArrowAltCircleRight} /></>}
                </div>
                {design &&
                    <div className='flex px-10 py-2 flex-wrap gap-10 '>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                        <Link to={"/company/employeedetails"}><div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer '>
                            <div className='w-20 h-20 rounded-lg -ml-5'>
                                <img src={employeeprofile} alt="" className=' object-fill ' />
                            </div>
                            <div className='flex flex-col'>
                                <div className=' text-base font-semibold'>Name of Employee</div>
                                <div className=' text-[10px] font-thin'>Job Role</div>
                                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                                <div className=' flex flex-col'>
                                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                                </div>
                            </div>
                            <div className=' text-button_primary_color absolute top-1 right-3 '></div>
                        </div></Link>
                    </div>
                }
            </div>
            {addemployeemodal && (
                <div className="" onClick={closemodal}>
                    <div className="absolute top-0 left-0 h-full bg-neutral-700/70 w-full flex justify-center items-center">
                        <div className=' w-6/12 flex flex-col gap-3 bg-white mt-20 rounded-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                            <div className=' text-xl font-semibold cursor-pointer'>Add Employees</div>

                            <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                                <label className='flex flex-col flex-1  gap-1 text-xs '>Employee Name
                                    <input type='text'
                                      name='employee_name'
                                      onChange={HandleEmployeeInfo}
                                      value={employeeInfo.employee_name}
                                     className='signup-input border border-black-950 w-full  h-8 ml-2' />
                                </label>
                                <label className='flex flex-col flex-1 gap-1 text-xs'>Employee Position
                                    <input type='text' 
                                     name='employee_position'
                                     onChange={HandleEmployeeInfo}
                                     value={employeeInfo.employee_position}
                                    className='signup-input border border-black-950 w-full h-8 ml-2' />
                                </label>
                            </div>
                            <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                                <label className='flex flex-col flex-1  gap-1 text-xs'>Employee Email
                                    <input type='text' 
                                    name='employee_email'
                                    onChange={HandleEmployeeInfo}
                                    value={employeeInfo.employee_email}
                                    className='signup-input border border-black-950 h-8 ml-2' />
                                </label>
                                <label className='flex flex-col flex-1 gap-1 text-xs'>Phone
                                
                                    <input type='text'
                                    name='employee_phone_number'
                                    onChange={HandleEmployeeInfo}
                                    value={employeeInfo.employee_phone_number}
                                    className='signup-input border border-black-950 h-8 ml-2' />
                                </label>
                            </div>
                            <div className='flex gap-4 max-sm:flex-col max-md:flex-col'>
                                <label className='flex flex-col  gap-1 text-xs'>Department of working
                                    {/* <input type='text' 
                                    name='employee_department'
                                    onChange={HandleEmployeeInfo}
                                    value={employeeInfo.employee_department}
                                    className='signup-input border border-black-950 h-8 ml-2' /> */}
                                    {/* //--------------for combobox---------- */}
                                    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? frameworks.find((framework) => framework.employee_department === value)?.label : "Select department..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search department..." />
          <CommandEmpty>No department found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.employee_department}
                value={framework.employee_department}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.employee_department ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.employee_department}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
                                </label>
                                <div onClick={handleEmployeeSubmit} className='self-end bg-primary_blue px-3 py-2 max-h-max text-xs rounded-lg text-text_white_primary_color cursor-pointer ml-20 whitespace-nowrap' >Add employee</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CompanyEmployees