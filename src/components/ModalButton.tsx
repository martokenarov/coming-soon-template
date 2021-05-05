import React from 'react'
import styles from './ModalButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type ModalButtonProps = {
    onClick: () => void;
}

const ModalButton:React.FC<ModalButtonProps> = ({onClick}) => {
    return (
        <div className={styles['modal-toggle']} onClick={onClick}>
            <FontAwesomeIcon className={styles['icon']} icon={faArrowRight} size="lg" />
		</div>
    )
}

export default ModalButton;