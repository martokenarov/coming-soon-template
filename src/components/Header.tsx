import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <h1 className={styles.header}>
            <img width={200} height={160} src={`${process.env.PUBLIC_URL}${'/images/coming-soon.png'}`}/>
        </h1>
    );
}

export default Header;