import React, { useEffect, useState } from 'react'
import "../EmployeeModule/EmployeeDetails/employeedetails1.css"
import MakeApiRequest from '../../Functions/AxiosApi';
import Cookies from "js-cookie";
import config from '../../Functions/config';



function VerifyOtpCompany() {

  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(600);
  const headers = {
    'Content-Type': 'application/json'
  }
  const data = {
    "otp_code": otp
  }
  const HandleOtp = () => {
    console.log("first")
    MakeApiRequest('POST', `${config.baseUrl}authentication/verify-otp/`, headers, data)
      .then((response) => {
        console.log(response)
        Cookies.set("user_id", response.user_id, { expires: 5 })
        Cookies.set("access_token", response.access_token, { expires: 5 });
        window.location.href = "/company/company-details";

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleOtpChange = (event) => {
    const newOtp = event.target.value;
    if (newOtp.length <= 6) {
      setOtp(newOtp);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

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
        <div className='text-xs self-end text-red-400 pr-10'>otp will get invalid in {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
        {otp.length === 6 ?
          <button className='otp-submit-btn rounded-lg mt-5 py-2  w-3/6 ' onClick={() => { HandleOtp() }}>Submit</button>
          :
          <button disabled className='disabled-otp-btn rounded-lg mt-5 py-2  w-3/6 '>Submit</button>}

      </div>



    </div>
  )
}

export default VerifyOtpCompany