import React from 'react';
import styles from './Background.module.css';

interface BackgroundProps {}

const Background: React.FC<BackgroundProps> = (props) => {
    return (<div className={styles.Img} style={{backgroundImage: `url(${process.env.PUBLIC_URL}${'/images/bg_desktop.jpg'})`}}></div>);
}

export default Background;