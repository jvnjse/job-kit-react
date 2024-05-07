import React, { useEffect, useState } from "react";
import MakeApiRequest from "../../Functions/AxiosApi";
import config from "../../Functions/config";
import Cookies from "js-cookie";

function EmployerRequest() {

    const access_token = Cookies.get('access_token')
    const headers = {
        'Authorization': `Bearer ${access_token}`
    }
    const [dataRequests, setDataRequests] = useState([])
    const [categories, setCategories] = useState([])

    const fetchData = async () => {
        try {
            const response = await MakeApiRequest('get', `${config.baseUrl}employee/category-change-request/`, headers)
            console.log(response);
            setDataRequests(response)

            const categoryResponse = await MakeApiRequest('get', `${config.baseUrl}administrator/job-category/`, headers);
            console.log(categoryResponse);
            setCategories(categoryResponse)
            
        } catch (error){
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const handleApprove = (id) => {
        MakeApiRequest('post',`${config.baseUrl}administrator/category-change-request/approve/${id}/`,headers)
        .then((response) =>{
            console.log(response);
            fetchData();
        })
    }

    const handleReject = (id) => {
      MakeApiRequest('post',`${config.baseUrl}administrator/category-change-request/reject/${id}/`,headers)
      .then((response) =>{
          console.log(response);
          fetchData();
      })
    }


  return (
    <div className="p-3">
        
      <div>
        <div className=" font-extrabold text-2xl mb-5">
          Employee Category Requests
        </div>
        {dataRequests.length > 0 ? (
        <table className=" text-center border">
          <tr className=" bg-gray-300 font-bold">
            <td>Employer Name</td>
            <td>Current Category</td>
            <td>Requesting Category</td>
            <td>Reason</td>
            <td>Action</td>
          </tr>
          {dataRequests.map((request, index) => (
            <tr key={index} className="border-b border-gray-400">
              <td>{request.employee.full_name}</td>
              <td className="px-5">{request.employee.job_category_name}</td>
              <td className="px-5">{categories.find(category => category.id === request.new_category)?.category_name}</td>
              <td className="text-xs text-left w-1/5 px-5">{request.reason}</td>
              <td className="p-4">
                <button className="signup-btn text-center w-full cursor-pointer mb-4" onClick={() => handleApprove(request.id)}>Approve</button>
                <button className="signup-btn text-center w-full cursor-pointer" onClick={() => handleReject(request.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </table> ):(
            <div className="text-center p-8">No category change requests</div>
         )}
      </div>
        
      <div>
        <div className=" font-extrabold text-2xl mb-5">
          Employee Job Requests
        </div>
        <table className="w-full text-center border">
          <tr className=" bg-gray-300 font-bold">
            <td>No</td>
            <td>Employer Name</td>
            <td>Current Category</td>
            <td>Requesting Category</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td>1</td>
            <td>John Doe</td>
            <td>IT Development</td>
            <td className="text-xs text-left w-1/4">
              Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel
              eu egestas dictum.
            </td>
          </tr>
          <tr className="border-b border-gray-400">
            <td>1</td>
            <td>John Doe</td>
            <td>IT Development</td>
            <td className="text-xs text-left w-1/4">
              Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel
              eu egestas dictum.
            </td>
          </tr>
          <tr className="border-b border-gray-400">
            <td>1</td>
            <td>John Doe</td>
            <td>IT Development</td>
            <td className="text-xs text-left w-1/4">
              Lorem ipsum dolor sit amet consectetur. Blandit aliquet elit vel
              eu egestas dictum.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default EmployerRequest;
