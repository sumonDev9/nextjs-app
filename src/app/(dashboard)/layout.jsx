import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* sidebar */}
                <div className='col-span-3'>
                <ul>
                    <li>Home</li>
                </ul>
                </div>
                {/* content */}
                <div className='col-span-9'>
                {children} 
                </div>
            </div>
          
        </div>
    );
};

export default DashBoardLayout;