import React from 'react';
import Header from './Header';
import Section from './Section';
import styles from './Main.module.css';

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.inner}>
                <Header />
                <Section />
            </div>
        </div>
    );
}

export default Main;