import React from 'react';

function Contact(props) {
    return(
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td><button className="btn btn-primary">Agregar Proveedor</button></td>
        </tr>
    );
}

export default Contact;