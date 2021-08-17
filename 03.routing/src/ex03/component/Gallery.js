import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import styles from '../assets/scss/component/Gallery.scss'

export default function Gallery() {
    return (
        <Fragment>
            <Header />
            <div className={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
            <Navigation />
            <Footer />
        </Fragment>
    );
}