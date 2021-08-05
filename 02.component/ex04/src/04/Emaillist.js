import React from 'react';
import Email from './Email';

export default function Emaillist( { emails } ){
    return(
        <ul className={ 'Emaillist' }>
            { 
                emails.map( items => 
                        <Email key={ items.no } firstName={ items.firstName } lastName={ items.lastName } email={ items.email }/>
                )
            }
        </ul>
    );
}