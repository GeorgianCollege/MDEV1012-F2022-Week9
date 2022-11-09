import React from 'react';
import { Link } from 'react-router-dom';

import User from '../models/User';

function Home(props: User)
{
    return(
        <div>
            <h1 className="mb-5">Welcome to our Site, {props.displayName}</h1>
            <hr />

            <Link to={"/about"}>
                <button id="heroButton" className="btn btn-primary btn-lg">Learn more About Us! <i className="fa-solid fa-people-arrows fa-lg"></i></button>
            </Link>
        </div>
    )
}

export default Home;