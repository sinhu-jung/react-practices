import React from 'react';
import PropType from "prop-types"

export default function Email( {no, firstName, lastName, email }) {
    return(
        <li>
            { `${firstName}${lastName}` }
            <br/>
            {email}
        </li>
    );
}

Email.propType = {
    no: PropType.number,
    firstName: PropType.string.isRequired,
    lastName: PropType.string.isRequired,
    emial: PropType.string.isRequired
}