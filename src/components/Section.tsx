import React from 'react';
import styles from './Section.module.css';
import NewsLetterForm from './NewsLetterForm';

const Section = () => {
    return (
        <>
            <h1 className={styles.title}>
                <span>The site </span>
                &nbsp;Is Coming Soon!
            </h1>
            <p className={styles.slogan}>
                Our website is under construction, we are working very hard to give you the best experience with this one.<br/>
                You will love ArtLola as much as we do. It will morph perfectly on your needs!
            </p>
            <NewsLetterForm />
        </>
    )
}

export default Section;