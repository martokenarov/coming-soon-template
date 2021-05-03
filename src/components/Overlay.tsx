import React from 'react'
import styles from './Overlay.module.css';

interface OverlayProps {}

const Overlay: React.FC<OverlayProps> = (props) => {
    return (<div className={styles.overlay}></div>)
}

export default Overlay;