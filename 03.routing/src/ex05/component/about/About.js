import React from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Me from './Me';
import Location from './Location';

export default function About() {
    return (
        <SiteLayout>
            <Route component={ Navigation } />
            <Route path={ '/about/me' } component={ Me } />
            <Route path={ '/about/location' } component={ Location } />
        </SiteLayout>
    );
}