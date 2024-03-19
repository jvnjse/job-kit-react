import React, { useEffect, useState } from 'react'
import "../../../EmployeeModule/EmployeeDetails/employeedetails1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUpload } from '@fortawesome/free-solid-svg-icons'
import EmployeeDetailsAdd from "./EmployeeDetailsAdd"
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import config from '../../../../Functions/config'
import MakeApiRequest from '../../../../Functions/AxiosApi'
import Cookies from "js-cookie";


function CompanyDetails() {
    const user_id = Cookies.get('user_id')
    const access_token = Cookies.get('access_token')
    const [file, setFile] = useState();
    const [details, setDetails] = useState(true);
    const [selectedCompanyType, setSelectedCompanyType] = useState(null);
    const [selectedCompanyDepartment, setSelectedCompanyDepartment] = useState(null);
    const [companyTypes, setCompanyTypes] = useState([]);
    const [companyDepartments, setCompanyDepartments] = useState([]);
    const [rows, setRows] = useState([{ companyType: null, companyDepartments: null }]);

    useEffect(() => {
        setCompanyTypes([{ label: 'Type A' }, { label: 'Type B', value: 'type_b' }, { label: 'Type C', value: 'type_c' }]);
        setCompanyDepartments([{ label: 'HR', value: 'hr' }, { label: 'Finance', value: 'finance' }, { label: 'Finance', value: 'finance' }, { label: 'Finance', value: 'finance' }]);
    }, []);
    function HandleNextDetails() {
        setDetails(false)

    }
    console.log(selectedCompanyType)
    console.log(selectedCompanyDepartment)

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const createOption = (inputValue) => ({
        label: inputValue,
        value: inputValue,
    });

    const addNewRow = () => {
        setRows([...rows, { companyType: null, companyDepartments: null }]);
    };
    const handleCompanyTypeChange = (selectedOption, rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].companyType = selectedOption;
        setRows(updatedRows);
    };

    const handleCompanyDepartmentsChange = (selectedOptions, rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].companyDepartments = selectedOptions;
        setRows(updatedRows);
    };

    console.log(rows)

    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    const SubmitSecDep = () => {
        const userData = {
            user_id: user_id,
            sectors: [],
            departments: [],
        };

        rows.forEach(row => {
            if (row.companyType && row.companyDepartments) {
                const sectorName = row.companyType.label;
                const departmentNames = row.companyDepartments.map(dep => dep.label);

                if (!userData.sectors.includes(sectorName)) {
                    userData.sectors.push(sectorName);
                }

                departmentNames.forEach(departmentName => {
                    userData.departments.push({
                        sector_name: sectorName,
                        department_name: departmentName,
                    });
                });
            }
        });
        MakeApiRequest('post', `${config.baseUrl}company/update-sectors-and-departments/`, headers, userData)
            .then(response => {
                console.log(response)
                HandleNextDetails()
            })
            .catch(error => {
            });

    }
    return (<>
        {details ?
            <div>
                <div className=' text-center text-2xl font-semibold text-primary_blue'>Company Sectors and Departments</div>
                <div className=' flex justify-evenly pt-4 max-sm:flex-col-reverse max-sm:px-5'>
                    <div>
                        <div className='flex flex-col'>
                            {rows.map((row, index) => (
                                <div className='flex w-full gap-5'>
                                    <label className='flex flex-col gap-1 text-xs mt-4'>
                                        Company Type
                                        <Creatable
                                            value={row.companyType}
                                            onChange={(selectedOption) => handleCompanyTypeChange(selectedOption, index)}
                                            options={companyTypes}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-1 text-xs mt-4'>
                                        Company Departments
                                        <Creatable
                                            value={row.companyDepartments}
                                            onChange={(selectedOptions) => handleCompanyDepartmentsChange(selectedOptions, index)}
                                            options={companyDepartments}
                                            isMulti
                                        />
                                    </label>
                                </div>
                            ))}
                            <button className='bg-primary_blue text-white w-10 rounded-lg self-end mt-3' onClick={addNewRow}>+</button>

                        </div>
                        {/* <label className='flex flex-col  gap-1 text-xs mt-4'>Business Activity
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-16 ml-2' />
                        </label> */}
                        {/* <label className='flex flex-col  gap-1 text-xs mt-4'>Company Website
                            <input
                                type='text'
                                className='signup-input border border-black-950 w-64 h-8 ml-2' />
                        </label> */}
                        <div className="continue-btn float-right px-5 py-2 mt-6 " onClick={SubmitSecDep}>Continue <FontAwesomeIcon icon={faArrowRight} className='text-blue-50' color='#ffffff' /></div>
                    </div>
                    {/* <div>
                        <label className=' flex  flex-col  items-start rounded-xl bg-gray-200 px-10 py-10 max-sm:p-0'>
                            Choose a Valid File for Verification
                            <div>
                                <FontAwesomeIcon className='text-6xl' icon={faUpload} />
                            </div>
                            <div className=' mt-5'>
                                <input
                                    type="file"
                                    title=""
                                    className='choose-file-box-company-information'
                                    id=""
                                    accept="application/pdf" onChange={handleChange} />
                            </div>
                        </label>
                    </div> */}
                </div>
            </div> :
            <div >
                <EmployeeDetailsAdd />
            </div>
        }
    </>
    )
}

export default CompanyDetails