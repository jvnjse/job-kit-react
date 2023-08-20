import React from 'react'
import "./home.css"

function Search() {
    return (
        <div className='search-job-box flex  justify-center items-center gap-5 px-10 py-16'>
            <div>
                <input type="text" name="" id="" className=' w-72 h-7 rounded-3xl text-xs  py-1 px-2' placeholder='Search Job Titles' />
            </div>
            <div>
                <select name="" id="" className=' rounded-3xl text-xs py-1 px-2 text-text_black_secondary_color' >
                    <option value="" className=' text-text_black_secondary_color'>select a category</option>
                    <option value="wwww" className=' text-text_black_secondary_color'>category 1</option>
                    <option value="wwww" className=' text-text_black_secondary_color'>category 2</option>
                    <option value="wwww" className=' text-text_black_secondary_color'>category 3</option>
                    <option value="wwww" className=' text-text_black_secondary_color'>category 4</option>
                </select>
            </div>
            <div className=' bg-transparent text-primary_white border-primary_white border rounded-s-2xl text-xs py-1 px-2'>Find Jobs</div>
        </div>
    )
}

export default Search