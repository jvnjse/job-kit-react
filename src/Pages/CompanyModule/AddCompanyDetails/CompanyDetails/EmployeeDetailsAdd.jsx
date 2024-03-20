import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import successicon from "../../../../Assets/Images/success.png"
import MakeApiRequest from '../../../../Functions/AxiosApi';
import config from '../../../../Functions/config';
import Cookies from "js-cookie";
import CreatableSelect from 'react-select/creatable';


function EmployeeDetailsAdd() {
    const [success, setSuccess] = useState(false)
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [file, setFile] = useState()
    const [excelmodal, setExcelModal] = useState(false)
    const [downloadbtn, setDownloadbtn] = useState(true)
    const [employeeData, setEmployeeData] = useState()
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
 // adding
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/company/department/')
        .then(response => response.json())
        .then(data => {
          setDepartments(data.map(department => ({ value: department.name, label: department.name })));
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching departments:', error);
          setLoading(false);
        });
    }, []);

    const handleCreateOption = (inputValue) => {
        // You can handle the creation of a new option here
        const newValue = { value: inputValue.toLowerCase(), label: inputValue };
        setDepartments([...departments, newValue]);
        // You may also want to send a request to your server to create the option
      };
      console.log(departments, "depatrt")

      //adding
    const handleEmployeeSubmit = (e) => {
        e.preventDefault();
        MakeApiRequest('post', `${config.baseUrl}company/company/employee/${user_id}/`, headers, employeeInfo)
            .then(response => {
                console.log(response)
                GetEmployeeDetailList()
            })
            .catch(error => {
            });
    };
    const GetEmployeeDetailList = () => {
        MakeApiRequest('get', `${config.baseUrl}company/company/employee/${user_id}/`, headers)
            .then((response) => {
                console.log(response)
                setEmployeeData(response)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    const DownloadExcel = () => {
        MakeApiRequest('get', `${config.baseUrl}company/download/excel_file/`)
            .then((response) => {
                console.log(response)
                window.location.href = config.baseUrl + response.download_url
                setDownloadbtn(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function handleChange(e) {
        const file = e.target.files[0];
        // setViewFile(URL.createObjectURL(file));
        setFile(file)
    }
    const UploadExcel = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("excel_file", file);
        MakeApiRequest('post', `${config.baseUrl}company/import_data/${user_id}/`, headers, formData)
            .then((response) => {
                console.log(response)
                // window.location.href = config.baseUrl + response.download_url
                // setDownloadbtn(false)
                setExcelModal(false)
                GetEmployeeDetailList()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        GetEmployeeDetailList()
    }, [])


    function HandleEmployeeInfo(e) {
        const { name, value } = e.target;
        setEmployeeInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    useEffect(() => {
        if (success) {
            const redirectTimer = setTimeout(() => {
                window.location.href = "/company/profile";
            }, 2500);

            return () => clearTimeout(redirectTimer);
        }
    }, [success]);

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (<>
        <div className=' text-center text-2xl font-bold text-primary_blue pt-10'>Employee Details</div>
        <div className=' flex justify-evenly pt-4 max-md:flex-col max-md:gap-4'>
            <div className=' flex flex-col max-sm:px-4 gap-2'>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col gap-1 text-xs mt-4'>Employee Name
                        <input
                            type='text'
                            name='employee_name'
                            onChange={HandleEmployeeInfo}
                            value={employeeInfo.employee_name}
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs mt-4 ml-4 max-sm:ml-0'>Employee Position
                        <input
                            type='text'
                            name='employee_position'
                            onChange={HandleEmployeeInfo}
                            value={employeeInfo.employee_position}
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                </div>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col  gap-1 text-xs mt-4'>Employee Email
                        <input
                            type='text'
                            name='employee_email'
                            onChange={HandleEmployeeInfo}
                            value={employeeInfo.employee_email}
                            className='signup-input border border-black-950 w-64 h-8 ml-2' />
                    </label>
                    <label className='flex flex-col  gap-1 text-xs mt-4 ml-4 max-sm:ml-0'>Phone
                        <div className='flex gap-3'>
                            <input
                                type='text'
                                value="+91"
                                className='signup-input border border-black-950 w-10 h-8 ml-2' />
                            <input
                                type='number'
                                name='employee_phone_number'
                                onChange={HandleEmployeeInfo}
                                value={employeeInfo.employee_phone_number}
                                className='signup-input border border-black-950 w-60  h-8 ' />
                        </div>
                    </label>

                </div>
                <div className=' flex max-sm:flex-col'>
                    <label className='flex flex-col  gap-1 text-xs mt-4'>Department of working
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
                    <button onClick={handleEmployeeSubmit} className='ml-4 bg-primary_blue text-text_white_primary_color self-end px-3 py-1 rounded-lg'> Add Employee</button>

                </div>
                <button onClick={() => { setExcelModal(true) }} className='bg-primary_blue text-text_white_primary_color mt-14 p-3 rounded-lg hover:bg-text_black_primary_color'>Upload Employee from SpreadSheet</button>
            </div>
            <div className=' flex flex-col gap-3 max-h-[400px]  p-5 rounded-2xl bg-white  overflow-y-scroll'>
                {employeeData && employeeData.map((employee) => (
                    <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                        <div>{employee.employee_name}</div>
                        <div>{employee.employee_position}</div>
                    </div>
                ))}
                {/* <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div>
                <div className=' flex flex-col h-min px-5 rounded-lg bg-gray-400 '>
                    <div>Employee Name</div>
                    <div>Employee Position</div>
                </div> */}
            </div>
        </div>
        <div className=' flex justify-center'>
            <button className="continue-btn ml-[200px] px-5 py-2 mt-5 " onClick={() => setSuccess(true)}>Continue &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color='white' /></button>
        </div>
        {success &&
            <div className='success-bg-main absolute w-full h-full top-0 flex justify-center items-center'>
                <div className="success-box flex flex-col items-center w-6/12 h-3/6 bg-white rounded-lg max-sm:w-10/12">
                    <div className=' mt-10'>
                        <img src={successicon} alt="" />
                    </div>
                    <div className=' text-3xl font-semibold text-sky-900 mt-5'>Profile created!</div>
                    <div className=' text-1xl font-semibold text-sky-900 mt-5'>Get ready for exciting job opportunities ahead</div>
                </div>
            </div>
        }
        {excelmodal &&
            <div className='success-bg-main absolute w-full h-full top-0 flex justify-center items-center' onClick={() => { setExcelModal(false) }}>
                <form onSubmit={UploadExcel} onClick={stopPropagation} className="success-box flex flex-col justify-between  w-6/12 h-3/6 bg-white rounded-lg max-sm:w-10/12 p-3">
                    <div className='text-xl font-semibold text-center'>Upload Employee Data</div>
                    <div className='flex justify-evenly p-4 flex-wrap'>
                        {downloadbtn && < div >
                            <button onClick={DownloadExcel} className='bg-primary_blue text-white p-2 py-10 rounded-lg'>Get the Sample Excel File</button>
                        </div>}
                        <div>
                            <label className='flex flex-col gap-5 border border-black p-10 rounded-lg'>Upload File
                                <input
                                    type='file'
                                    required
                                    onChange={handleChange}
                                    accept=".xlsx,application/vnd.ms-excel"></input>
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='bg-primary_blue p-2 rounded-lg  text-white hover:bg-black transition-colors'>Upload Excel</button>
                </form>
            </div >
        }


    </>
    )
}

export default EmployeeDetailsAdd