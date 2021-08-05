import React from 'react';

export default function Email( { firstName, lastName, email }) {
    return(
        <li>
            { `${firstName}${lastName}` }
            <br/>
            {email}
        </li>
    );
}