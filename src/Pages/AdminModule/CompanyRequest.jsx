import config from "../../Functions/config";
import MakeApiRequest from "../../Functions/AxiosApi";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CompanyRequest() {
    const [categoryRequestData, setCategoryRequestData] = useState([]);
  
    const access_token = Cookies.get("access_token");
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
  
    useEffect(() => {
      getCategoryRequest();
    }, []);
  
    const getCategoryRequest = () => {
      MakeApiRequest(
        "get",
        `${config.baseUrl}administrator/company-category-requests/`,
        headers
      ).then((response) => {
        setCategoryRequestData(response);
      });
    };
  
    const handleAction = (category_id, action) => {
      MakeApiRequest(
        "put",
        `${config.baseUrl}administrator/approve-reject-category/${category_id}/`,
        headers,
        { action }
      ).then((response) => {
        getCategoryRequest();
      });
    };
  
    return (
      <div className="p-3 flex flex-col items-center">
        <div>
          <div className="font-extrabold text-2xl mb-5">
            Company Category Requests
          </div>
          {categoryRequestData.length === 0 ? (
            <p>No requests found.</p>
          ) : (
            <table className="text-center border">
              <thead>
                <tr className="bg-gray-300 font-bold">
                  <th>Company Name</th>
                  <th>Category Request</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categoryRequestData.map((request, index) => (
                  <tr key={index} className="border-b border-gray-400">
                    <td className="px-32 text-4xl font-semibold">{request.company_name}</td>
                    <td className="px-32 font-semibold">{request.category_name}</td>
                    <td className="p-2">
                      <button className="signup-btn text-center w-full cursor-pointer mb-4" onClick={() => handleAction(request.category_id, "approve")}>Approve</button>
                      <button className="signup-btn text-center w-full cursor-pointer" onClick={() => handleAction(request.category_id, "reject")}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
  
  export default CompanyRequest;