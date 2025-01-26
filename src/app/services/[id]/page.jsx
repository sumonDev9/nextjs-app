import React from 'react';

const ServiceDetailPAge = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>ServiceDetailPage</h1>
            <p>ID: {id}</p>
        </div>
    );
};

export default ServiceDetailPAge;