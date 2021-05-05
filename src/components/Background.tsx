import React from 'react';
import styles from './Background.module.css';

type BackgroundProps = {}

const Background: React.FC<BackgroundProps> = ({children}) => {
    return (
        <>
            <div className={styles.Img} style={{backgroundImage: `url(${process.env.PUBLIC_URL}${'/images/bg_desktop.jpg'})`}}>
                {children}
            </div>
            <div className={styles.overlay} style={{background: 'rgba(0,0,0,0.5)', backgroundImage:`url(${process.env.PUBLIC_URL}${'/images/overlay.png'}) repeat`}}></div>
        </>
    );
}

export default Background;