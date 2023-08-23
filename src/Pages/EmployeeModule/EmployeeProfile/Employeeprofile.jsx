import React, { useState } from 'react'
import SidePanel from './SidePanel'
import Profile from './Profile';
import Appliedjob from './Applied';
import Saved from './Saved';
import Manage from './Manage';

function Employeeprofile() {


    const [activeComponent, setActiveComponent] = useState("profile");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);
    };



    return (
        <div className='flex'>
            <SidePanel handleLinkClick={handleLinkClick} />
            <div className=' flex-1 h-screen overflow-hidden overflow-y-scroll '>
                {activeComponent === 'profile' && <Profile />}
                {activeComponent === 'applied' && <Appliedjob />}
                {activeComponent === 'saved' && <Saved />}
                {activeComponent === 'manage' && <Manage />}
            </div>
        </div>
    )
}

export default Employeeprofile