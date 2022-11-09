import React from 'react';

import User from '../models/User';

function Home(props: User)
{
    return(
        <div>
            <h1 className="mb-5">Welcome to our Site, {props.displayName}</h1>
            <hr />
        </div>
    )
}

export default Home;