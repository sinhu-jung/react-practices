import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Gallery() {
    return (
        <Fragment>
            <div id='header'>
                <h1><NavLink to={'/'} >Header</NavLink></h1>
            </div>

            <div id='contents'>
                <h2>Gallery</h2>
            </div>

            <div id='navigation' >
                <ul>
                    <li><NavLink to={'/guestbook'} >[Guestbook]</NavLink></li>
                    <li><NavLink to={'/gallery'} >[Gallery]</NavLink></li>
                </ul>
            </div>

            <div id='footer'>
            </div>

        </Fragment>
    );
}