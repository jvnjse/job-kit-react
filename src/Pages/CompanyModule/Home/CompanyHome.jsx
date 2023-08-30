import React, { useRef, useState } from 'react'
import Nav from '../../EmployeeModule/Nav/Nav'
import Search from './Search'
import EmployeeFilter from './EmployeeFilter'
import Employees from './Employees'
import EmployeeContext from '../../../Contexts/EmployeeContext'
import { useNavigate } from 'react-router-dom'
import EmployeeDescription from './EmployeeDescription'

function CompanyHome() {
    const [employeedetailmodal, setemployeeDetailModal] = useState(false);
    const navigate = useNavigate();

    const doubleClickTimeout = useRef(null);

    const handleemployeeBoxDoubleClick = () => {
        navigate('/company/employeedetails');
    };

    const handleemployeeBoxClick = () => {
        setemployeeDetailModal(true);
    };

    const closemodal = () => {
        setemployeeDetailModal(false);
    };

    const handleBoxClick = () => {
        if (window.innerWidth < 1000) {
            navigate('/company/employeedetails');
        } else {
            if (doubleClickTimeout.current) {
                clearTimeout(doubleClickTimeout.current);
                handleemployeeBoxDoubleClick();
            } else {
                doubleClickTimeout.current = setTimeout(() => {
                    doubleClickTimeout.current = null;
                    handleemployeeBoxClick();
                }, 300);
            }
        }
    };
    return (
        <EmployeeContext.Provider
            value={{
                handleBoxClick
            }}>
            <div>
                <div className=' flex flex-col'>
                    <Nav />
                    <Search />
                </div>
                <div className=' flex'>
                    <EmployeeFilter />
                    <Employees />
                </div>
                {employeedetailmodal && (
                    <div className="flex justify-center" onClick={closemodal}>
                        <div className="absolute top-0 bg-neutral-700/70 w-full flex justify-center">
                            {/* <employeeDescription />jshbjhbhjsbjb */}
                            <EmployeeDescription />
                        </div>

                    </div>
                )}
            </div>
        </EmployeeContext.Provider>
    )
}

export default CompanyHome