import React from 'react';

function Home(props: {username: string, displayName: string})
{
    return(
        <div>
            <h1 className="mb-5">Welcome to our Site, {props.displayName}</h1>
            <hr />
        </div>
    )
}

export default Home;