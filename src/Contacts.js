import React from 'react';
import Contact from './Contact.js';

function Contacts({contacts}) {
    return(
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            {contacts.map((contact) =>
                <Contact contact = {contact}/>
            )}
        </table>
    );
}



export default Contacts;