import React, { useState } from 'react';
import "./home.css";

function Search() {
    const [showResults, setShowResults] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchClick = () => {
        setShowResults(false);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            {showResults ? (
                <div className='search-job-box flex justify-center items-center gap-5 px-10 py-16 max-sm:flex-col'>
                    <div>
                        <div>
                            <input
                                type="text"
                                className='w-72 h-7 rounded-3xl text-xs py-1 px-2'
                                placeholder='Search Job Titles'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className=' flex justify-center items-center gap-5'>
                        <div>
                            <select
                                className='rounded-3xl text-xs py-1 px-2 text-text_black_secondary_color'
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">select a category</option>
                                <option value="category1">category 1</option>
                                <option value="category2">category 2</option>
                                <option value="category3">category 3</option>
                                <option value="category4">category 4</option>
                            </select>
                        </div>
                        <div
                            className='bg-transparent text-primary_white border-primary_white border rounded-s-2xl text-xs py-1 px-2'
                            onClick={handleSearchClick}
                        >
                            Find Jobs
                        </div>
                    </div>
                </div>
            ) : (
                <div className=" flex justify-center mt-3">
                    <span className=" bg-background_grey_color px-2 rounded-md">{inputValue}</span>
                </div>
            )}
        </div>
    );
}

export default Search;
