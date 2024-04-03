import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import successicon from '../../../../Assets/Images/success.png';
import MakeApiRequest from '../../../../Functions/AxiosApi';
import Cookies from 'js-cookie';
import config from '../../../../Functions/config';
import Select from 'react-select';

function Skills() {
  const user_id = Cookies.get('user_id');
  const access_token = Cookies.get('access_token');
  const [tags, setTags] = useState([]);
  const [success, setSuccess] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [jobCategories, setJobCategories] = useState([]);

  const headers = {
    'Authorization': `Bearer ${access_token}`,
    "Content-Type": "application/json",
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await MakeApiRequest('get', `${config.baseUrl}administrator/job-category/`);
        setJobCategories(response1);
        console.log(response1, 'categories');
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const options = jobCategories.map(category => ({
    value: category.id,
    label: category.category_name,
  }));

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = event => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();

      const newTag = inputValue.trim();
      if (newTag !== '') {
        const existingTag = tags.find(tag => tag.toLowerCase() === newTag.toLowerCase());

        if (!existingTag) {
          setTags([...tags, newTag]);
        }

        setInputValue('');
      }
    }
  };

  const handleTagRemove = tagIndex => {
    const updatedTags = tags.filter((_, index) => index !== tagIndex);
    setTags(updatedTags);
  };

  const handleCategoryChange = selectedOption => {
    setSelectedCategory(selectedOption);
  };

  const handleResumeChange = event => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Upload resume
    if (resumeFile) {
      const resumeFormData = new FormData();
      resumeFormData.append('resume', resumeFile);

      try {
        await MakeApiRequest('POST', `${config.baseUrl}employee/upload-resume/`, { ...headers, 'Content-Type': 'multipart/form-data' }, resumeFormData);
      } catch (error) {
        console.error('Error uploading resume:', error);
      }
    }

    // Add job category
    if (selectedCategory) {
      const categoryData = { category_id: selectedCategory.value };

      try {
        await MakeApiRequest('POST', `${config.baseUrl}employee/create-job-category/`, headers, categoryData);
      } catch (error) {
        console.error('Error adding job category:', error);
      }
    }

    // Add skills
    const data = { skills: tags };
    try {
      const response = await MakeApiRequest('POST', `${config.baseUrl}employee/employees/${user_id}/skills/`, headers, data);
      console.log(response);
      setSuccess(true);
      
      
    } catch (error) {
      console.error('Error adding skills:', error);
    }
  };

  if (success) {
    const redirectTimer = setTimeout(() => {
        window.location.href = "/employee/employee-profile";
    }, 5000);
    return () => clearTimeout(redirectTimer);
}

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Skills */}
        <div className="text-center text-2xl font-bold">Skills</div>
        <div className="">
          <div className="tag-input-container w-[300px] text-base font-semibold">
            Add Skills you have
            <div className="tag-list px-2 py-2 ml-4">
              {tags.map((tag, index) => (
                <div key={index} className="tag text-sm font-thin">
                  {tag}
                  <button className="tag-remove-button" onClick={() => handleTagRemove(index)}>
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                className="tag-input font-thin"
                value={inputValue}
                placeholder="Enter a Skill"
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
              />
            </div>
          </div>
        </div>
        {/* Job Category */}
        <div className="text-center mt-5 text-2xl font-bold">Job Category</div>
        <div className="w-[300px] text-base font-semibold flex flex-col gap-1 mt-3">
          Select your job Category
          <Select
            className="mt-4"
            isClearable
            options={options}
            placeholder="Select a category"
            onChange={handleCategoryChange}
          />
        </div>
        {/* Upload Resume */}
        <div className="text-center mt-5 text-2xl font-bold">Upload Resume</div>
        <div className="w-[300px] text-base font-semibold flex flex-col gap-1 mt-3">
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        </div>
        {/* Submit Button */}
        <button type="submit" className="continue-btn px-5 py-2 float-right">
          Continue <FontAwesomeIcon icon={faArrowRight} color="white" />
        </button>
      </form>
      {/* Success Message */}
      {success && (
        <div className="success-bg-main absolute w-full h-full top-0 flex justify-center items-center">
          <div className="success-box flex flex-col items-center w-6/12 h-3/6 bg-white rounded-lg max-sm:w-10/12">
            <div className="mt-10">
              <img src={successicon} alt="" />
            </div>
            <div className="text-3xl font-semibold text-sky-900 mt-5">Profile created!</div>
            <div className="text-1xl font-semibold text-sky-900 mt-5 max-sm:px-5 text-center">
              Get ready for exciting job opportunities ahead
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;
