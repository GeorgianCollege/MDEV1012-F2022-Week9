import React, { ChangeEvent, useState } from 'react';

function Contact()
{
    const [fullName, setFullName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    function onChangeFullName(e: ChangeEvent<HTMLInputElement>)
    {
        setFullName(e.target.value);
        console.log(fullName);
    }

    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>)
    {
        setContactNumber(e.target.value);
        console.log(contactNumber);
    }

    function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>)
    {
        setEmailAddress(e.target.value);
        console.log(emailAddress);
    }

    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>)
    {
        setMessage(e.target.value);
        console.log(message);
    }

    function onContactFormSubmit(e: any)
    {
        e.preventDefault();

        console.log(fullName);
        console.log(contactNumber);
        console.log(emailAddress);
        console.log(message);
    }

    return(
        <div>
            <h1 className="mb-5">Contact Us</h1>
            <hr />

            <div className="row">
                <div className="col-md-6">
                <form onSubmit={onContactFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName"
                    placeholder="Enter your Full Name" onBlur={onChangeFullName} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="contactNumber" name="contactNumber" 
                    placeholder="Enter your Contact Number" onBlur={onChangeContactNumber} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailAddress" name="emailAddress"
                    placeholder="Enter your Email Address" onBlur={onChangeEmailAddress} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" 
                placeholder="enter your message here..." onBlur={onChangeMessage}></textarea>
                </div>

                <button id="submitButton" type="submit" className="btn btn-primary btn-lg me-3">Submit</button>
                <button id="resetButton" type="reset" className="btn btn-warning btn-lg">Reset</button>
            </form>
            
                </div>
            </div>
        </div>
    )
}

export default Contact;