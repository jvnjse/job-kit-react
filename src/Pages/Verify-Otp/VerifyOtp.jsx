import React, { useState } from 'react'
import "../EmployeeModule/EmployeeDetails/employeedetails1.css"

function VerifyOtp() {

  const [otp, setOtp] = useState('');

  const handleOtpChange = (event) => {
    const newOtp = event.target.value;
    if (newOtp.length <= 6) {
      setOtp(newOtp);
    }
  };


  return (
    <div className=' flex flex-col items-center'>
      <div className='verify-heading font-semibold text-xl text-center mt-6'>Verify Your Email</div>
      <div className='flex flex-col items-center p-5 mt-5 bg-white rounded-md'>
        <div className=' text-base text-center'> Please enter the One-Time Password to verify your account</div>
        <div className=' text-xs text-center mt-2'> One Time Password has been sent to email</div>

        <input
          type="number"
          id="partitioned"
          className='otp-input text-4xl mt-5 rounded-md'
          maxLength="6"
          value={otp}
          onChange={handleOtpChange} />
        {otp.length === 6 ? <button className='otp-submit-btn rounded-lg mt-5 py-2  w-3/6 '>Submit</button> : <button disabled className='disabled-otp-btn rounded-lg mt-5 py-2  w-3/6 '>Submit</button>}

      </div>

    </div>
  )
}

export default VerifyOtp