import React from 'react';
import PropType, { number, string } from "prop-types"
import Email from './Email';

export default function Emaillist({ keyword, emails }){
    return(
        <ul className={ 'Emaillist' }>
            { 
                emails
                .filter(item => item.firstName.indexOf(keyword) != -1 || item.lastName.indexOf(keyword) != -1 || item.email.indexOf(keyword) != -1)
                .map( items => 
                        <Email key={ items.no } firstName={ items.firstName } lastName={ items.lastName } email={ items.email }/>
                )
            }
        </ul>
    );
}

Emaillist.propType = {
    emails: PropType.arrayOf(PropType.shape(Email.propType))
}