import React from 'react';
import styles from './Section.module.css';
import NewsLetterForm from './NewsLetterForm';
import Social from './Social';
import CountDown from './CountDown';

const Section = () => {
    return (
        <>
            <h1 className={styles.title}>
                <span>The site </span>
                &nbsp;Is Coming Soon!
            </h1>
            <p className={styles.slogan}>
                Our website is under construction, we are working very hard to give you the best experience with this one.<br/>
                You will love The Site as much as we do. It will morph perfectly on your needs!
            </p>
            <CountDown date="2021-05-30T10:38:01.889Z" />
            <NewsLetterForm />
            <Social />
        </>
    )
}

export default Section;