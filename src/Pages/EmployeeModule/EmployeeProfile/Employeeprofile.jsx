import React, { useState } from 'react'
import SidePanel from './SidePanel'
import Profile from './Profile';
import Appliedjob from './Applied';
import Saved from './Saved';
import Manage from './Manage';
import Nav from '../Nav/Nav';

function Employeeprofile() {


    const [activeComponent, setActiveComponent] = useState("profile");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };
    function closetoggleBox() {
        setIsOpen(false);
    };


    return (<>
        <Nav />
        <div className='flex'>
            <SidePanel handleLinkClick={handleLinkClick} toggleBox={toggleBox} isOpen={isOpen} />
            <div className=' flex-1 h-screen overflow-hidden overflow-y-scroll '>
                {activeComponent === 'profile' && <Profile closetoggleBox={closetoggleBox} />}
                {activeComponent === 'applied' && <Appliedjob closetoggleBox={closetoggleBox} />}
                {activeComponent === 'saved' && <Saved closetoggleBox={closetoggleBox} />}
                {activeComponent === 'manage' && <Manage closetoggleBox={closetoggleBox} />}
            </div>
        </div>
    </>
    )
}

export default Employeeprofile