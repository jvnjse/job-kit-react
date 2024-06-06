import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MakeApiRequest from "../../../../Functions/AxiosApi";
import "../../EmployeeDetails/employeedetails1.css";
import Experience from "./Experience";
import Cookies from "js-cookie";
import config from "../../../../Functions/config";

function Education() {
  const user_id = Cookies.get("user_id");
  const access_token = Cookies.get("access_token");
  const [experienceview, setExperienceview] = useState(true);
  const [file, setFile] = useState();
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [educationdata, setEducationdata] = useState();
  const [companyListdata, setCompanyListdata] = useState();
  const [educationinfo, setEducationInfo] = useState({
    user_id: user_id,
    course_name: "",
    from_date: "",
    to_date: "",
    organization_name: "",
    education_document: null,
  });

  const [errors, setErrors] = useState({
    course_name: "",
    from_date: "",
    to_date: "",
    organization_name: "",
    education_document: "",
  });

  function HandleExperienceDetails() {
    setExperienceview(false);
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setErrors((prevErrors) => ({
      ...prevErrors,
      education_document: file ? "" : "Education document is required.",
    }));
  };

  function HandlePesronalInfo(e) {
    const { name, value } = e.target;
    setEducationInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  }

  const validateField = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "course_name":
        if (!value.trim()) {
          errorMessage = "Course name is required.";
        }
        break;
      case "from_date":
        if (!value.trim()) {
          errorMessage = "From date is required.";
        }
        break;
      case "to_date":
        if (!value.trim()) {
          errorMessage = "To date is required.";
        }
        break;
      case "organization_name":
        if (!value.trim()) {
          errorMessage = "Institution name is required.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      course_name: "",
      from_date: "",
      to_date: "",
      organization_name: "",
      education_document: "",
    };

    if (!educationinfo.course_name.trim()) {
      newErrors.course_name = "Course name is required.";
      isValid = false;
    }
    if (!educationinfo.from_date.trim()) {
      newErrors.from_date = "From date is required.";
      isValid = false;
    }
    if (!educationinfo.to_date.trim()) {
      newErrors.to_date = "To date is required.";
      isValid = false;
    }
    if (!inputValue.trim()) {
      newErrors.organization_name = "Institution name is required.";
      isValid = false;
    }
    if (!file) {
      newErrors.education_document = "Education document is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  console.log(headers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      for (let key in educationinfo) {
        formData.append(key, educationinfo[key]);
      }
      formData.append("education_document", file);
      formData.append("organization_name", inputValue);

      MakeApiRequest(
        "POST",
        `${config.baseUrl}employee/employee/education/`,
        headers,
        formData
      )
        .then((response) => {
          MakeApiRequest(
            "get",
            `${config.baseUrl}employee/employee/education/?user_id=${user_id}`,
            headers
          )
            .then((response) => {
              console.log(response);
              setEducationdata(response);
              setEducationInfo({
                course_name: "",
                from_date: "",
                to_date: "",
                organization_name: "",
                education_document: null,
              });
              setInputValue("");
              setFile(null);
              document.getElementById("experience_education_document").value =
                "";
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    MakeApiRequest(
      "get",
      `${config.baseUrl}employee/employee/education/?user_id=${user_id}`,
      headers
    )
      .then((response) => {
        console.log(response);
        setEducationdata(response);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
    MakeApiRequest("get", `${config.baseUrl}company/organizations/`, headers)
      .then((response) => {
        console.log(response);
        setCompanyListdata(response);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowSuggestions(false);
    validateField("organization_name", value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuggestions(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.organization_name);
    setShowSuggestions(false);
    validateField("organization_name", suggestion.organization_name);
  };

  const filteredSuggestions =
    companyListdata &&
    companyListdata.filter((suggestion) =>
      suggestion.organization_name
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );

  return (
    <div>
      {experienceview ? (
        <>
          <div className=" text-center text-2xl font-bold">Education</div>
          <div className="flex justify-evenly max-sm:flex-col-reverse">
            <div className="flex flex-col border-r-2 flex-1 items-center max-sm:items-start max-sm:pl-16">
              {educationdata &&
                educationdata.map((education, index) => (
                  <div className=" text-left" key={index}>
                    <div className=" mt-5">{education.course_name}</div>
                    <div className=" text-sm">
                      {education.organization_name}
                    </div>
                    <div className="flex gap-3">
                      <div className=" text-xs">{education.from_date}</div>
                      <div className=" text-xs">{education.to_date}</div>
                    </div>
                  </div>
                ))}
              {/* <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div>
                        <div className=' text-left'>
                            <div className=' mt-5'>Course Name</div>
                            <div className=' text-sm'>Institution Name</div>
                            <div className='flex gap-3'>
                                <div className=' text-xs'>Course Name</div>
                                <div className=' text-xs'>Course Name</div>
                            </div>
                        </div> */}
            </div>
            <div className="flex flex-1 flex-col">
              <div className=" text-start pr-36 font-bold text-blue-800 ml-10">
                Add Education
              </div>
              <div>
                <label className="flex flex-col gap-1 text-xs pl-10">
                  Course
                  <input
                    type="text"
                    className="signup-input border border-black-950 w-64 h-8 ml-2"
                    name="course_name"
                    value={educationinfo.course_name}
                    onChange={HandlePesronalInfo}
                    required
                  />
                  {errors.course_name && (
                    <span className="error-message text-red-700">
                      {errors.course_name}
                    </span>
                  )}
                </label>
                <label className="flex flex-col gap-1 text-xs pl-10 relative">
                  Institution Name
                  <input
                    type="text"
                    className="signup-input border border-black-950 w-64 h-8 ml-2"
                    name="organization_id"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.organization_name && (
                    <span className="error-message text-red-700">
                      {errors.organization_name}
                    </span>
                  )}
                  {showSuggestions && inputValue && (
                    <ul className="absolute top-14 bg-[#e2d2f8]  w-64 ml-2">
                      {filteredSuggestions &&
                        filteredSuggestions.map((suggestion) => (
                          <li
                            className="px-3 py-1"
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion.organization_name}
                          </li>
                        ))}
                    </ul>
                  )}
                </label>
                <div className="flex">
                  <label className="flex flex-col gap-1 text-xs pl-10">
                    From
                    <input
                      type="date"
                      className="signup-input border border-black-950  w-32 h-8 ml-2"
                      name="from_date"
                      value={educationinfo.from_date}
                      onChange={HandlePesronalInfo}
                      required
                    />
                    {errors.from_date && (
                      <span className="error-message text-red-700">
                        {errors.from_date}
                      </span>
                    )}
                  </label>
                  <label className="flex flex-col gap-1 text-xs pl-10">
                    To
                    <input
                      type="date"
                      className="signup-input border border-black-950  w-32 h-8 ml-2"
                      name="to_date"
                      value={educationinfo.to_date}
                      onChange={HandlePesronalInfo}
                      required
                    />
                    {errors.to_date && (
                      <span className="error-message text-red-700">
                        {errors.to_date}
                      </span>
                    )}
                  </label>
                </div>
                <input
                  type="file"
                  className="education-choose-file mt-10 ml-5 sm:w-auto w-[300px]"
                  accept="image/jpeg, image/png"
                  name="education_document"
                  id="experience_education_document"
                  onChange={handleFileChange}
                  required
                />
                {errors.education_document && (
                  <span className="error-message text-red-700 block px-6 w-fit mt-1">
                    {errors.education_document}
                  </span>
                )}
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="add-education-btn float-right mt-10 sm:mr-64 px-6 py-1 mr-40"
                >
                  Add Education
                </button>
              </div>
            </div>
          </div>

          <div
            className="continue-btn w-36 float-right px-5 py-2 mt-16 mr-36"
            onClick={HandleExperienceDetails}
          >
            Next <FontAwesomeIcon icon={faArrowRight} color="white" />
          </div>
        </>
      ) : (
        <>
          <Experience />
        </>
      )}
    </div>
  );
}

export default Education;
