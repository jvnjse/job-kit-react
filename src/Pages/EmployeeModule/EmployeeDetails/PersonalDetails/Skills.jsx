import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import successicon from "../../../../Assets/Images/success.png"
import MakeApiRequest from '../../../../Functions/AxiosApi';
import Cookies from "js-cookie";
import config from '../../../../Functions/config';


function Skills() {
    const user_id = Cookies.get('user_id')
    const [tags, setTags] = useState([]);
    const [success, setSuccess] = useState(false)
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (success) {
            const redirectTimer = setTimeout(() => {
                window.location.href = "/employee/employee-profile";
            }, 5000);

            return () => clearTimeout(redirectTimer);
        }
    }, [success]);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ',' || event.key === " ") {
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

    const handleTagRemove = (tagIndex) => {
        const updatedTags = tags.filter((_, index) => index !== tagIndex);
        setTags(updatedTags);
    };


    const headers = {
        "Content-Type": "application/json",
    }
    const data = { "skills": tags }
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        MakeApiRequest('POST', `${config.baseUrl}employees/${user_id}/skills/`, headers, data)
            .then(response => {
                console.log(response)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (<>
        <form onSubmit={handleSubmit} className=' flex flex-col items-center '>
            <div className=' text-center text-2xl font-bold'>Skills</div>
            <div className=''>
                <div className="tag-input-container w-[300px] text-base font-semibold">
                    Add Skills you have
                    <div className="tag-list px-2 py-2 ml-4">
                        {tags.map((tag, index) => (
                            <div key={index} className="tag text-sm font-thin">
                                {tag}
                                <button
                                    className="tag-remove-button"
                                    onClick={() => handleTagRemove(index)}
                                >
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
            <button type='submit' className="continue-btn  px-5 py-2 float-right">Continue &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color='white' />
            </button>
        </form>
        {success &&
            <div className='success-bg-main absolute w-full h-full top-0 flex justify-center items-center '>
                <div className="success-box flex flex-col items-center w-6/12 h-3/6 bg-white rounded-lg max-sm:w-10/12">
                    <div className=' mt-10'>
                        <img src={successicon} alt="" />
                    </div>
                    <div className=' text-3xl font-semibold text-sky-900 mt-5'>Profile created!</div>
                    <div className=' text-1xl font-semibold text-sky-900 mt-5 max-sm:px-5 text-center'>Get ready for exciting job opportunities ahead</div>
                </div>
            </div>
        }</>
    )
}

export default Skills