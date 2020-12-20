import React from 'react';

function Contact(props) {
    return(
        <div>
            <h2>Contact Info:</h2>
            <div> Name: {props.contact.name}</div>
            <div>Phone: {props.contact.phone}</div>
        </div>
    )
}

export default Contact;