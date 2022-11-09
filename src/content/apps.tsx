import React, { useEffect } from 'react';

function Apps()
{
    useEffect(()=>{
        document.title = "Our Apps!";
    }, []);
    
    return(
        <div>
            <h1 className="mb-5">Our Apps</h1>
            <hr />
        </div>
    )
}

export default Apps;