import React, { useEffect } from 'react';

function Services()
{
    useEffect(()=>{
        document.title = "Our Services";
    }, []);

    return(
        <div>
            <h1 className="mb-5">Our Services</h1>
            <hr />
        </div>
    )
}

export default Services;