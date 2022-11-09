import React, { useEffect } from 'react';

function About()
{
    useEffect(()=>{
        document.title = "About Us";
    }, []);
    return(
        <div>
            <h1 className="mb-5">About Us</h1>
            <hr />
        </div>
    )
}

export default About;