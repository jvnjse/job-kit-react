import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MakeApiRequest from '../../../Functions/AxiosApi';
import config from '../../../Functions/config';
import Cookies from 'js-cookie';

function Manage(props) {
    const closetoggleBox = props.closetoggleBox;
    const user_id = Cookies.get('user_id');
    const access_token = Cookies.get('access_token');
    const [categories, setCategories] = useState([]);
    const [employeeData, setEmployeeData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const headers = {
        'Authorization': `Bearer ${access_token}`
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await MakeApiRequest('get', `${config.baseUrl}employee/employee/${user_id}/`, headers);
                setEmployeeData(response);
                const categoryResponse = await MakeApiRequest('get', `${config.baseUrl}administrator/job-category/`, headers);
                setCategories(categoryResponse);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await MakeApiRequest('post', `${config.baseUrl}employee/category-change-request/`, 
                headers,
                 {
                    category_id: selectedCategory,
                    reason: e.target.reason.value
                }
            );
            console.log(response);
            setSuccessMessage('Category change request submitted and pending approval');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div onClick={closetoggleBox} className='px-5'>
            <div className='font-bold mt-5'>Your current Job Search Category </div>
            <div className='px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl'>
                {employeeData.job_category_name}
            </div>
            <div className='font-bold mt-4'>Change your Job Category</div>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-6'>
                    <select name="job_category" className='px-3 py-2 bg-gray-300 w-[200px] border border-gray-950 rounded-xl' onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.category_name}</option>
                        ))}
                    </select>
                    <button type="submit" className='self-end px-2 rounded-xl bg-primary_blue text-text_white_primary_color'>Submit</button>
                </div>
                <textarea name="reason" placeholder='Type the reason for job change' className='p-2 mt-4' />
            </form>
            {successMessage && (
                <div className="text-green-500 font-bold">{successMessage}</div>
            )}
            <div className='font-bold mt-5'>Request for a New Job</div>
            <div className='flex items-end'>
                <textarea type="text" placeholder='Type the reason for job change' className='p-2' />
                <div className='bg-primary_blue text-text_white_primary_color max-w-max px-2 rounded-full'>submit</div>
            </div>
            <div className='font-bold mt-5'>Change Password</div>
            <div className='bg-primary_blue text-text_white_primary_color max-w-max px-2 py-2 rounded-lg mt-2'>Change Password</div>
        </div>
    );
}

export default Manage;

