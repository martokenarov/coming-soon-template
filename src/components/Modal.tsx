import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';

type ModalProps = {
    isOpen: Boolean;
    callback: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
    const {isOpen, callback} = props;

    return isOpen ? (
        <div className={styles['modal']}>
            <div className={styles['modal-inner']}>
                <div className={styles['modal-toggle']} onClick={callback}>
                    <FontAwesomeIcon className={styles['icon']} icon={faTimes} size="lg" />
                </div> 
                <section className="content">
                <h1 className="title">About <span>Selene</span></h1>
                <div className="row">
                    <div className="one-half">
                        <p>Sed congue blandit augue, at malesuada nisl pulvinar et. Fusce varius magna eget magna maximus venenatis.</p>
                        <p>Nulla facilisi. Pellentesque ac finibus diam. Suspendisse potenti. Nullam id nibh at velit placerat ornare non non lorem.</p>
                        <p>Morbi vulputate sed turpis sed mollis. Ut eget lectus eros. Donec mollis et orci eu vulputate.</p>
                    </div>
                    <div className="one-half">
                        <h2><i className="fas fa-phone"></i> Phone</h2>
                        <h2><i className="fas fa-envelope"></i> Email</h2>
                        <p>
                            <a href="mailto:email@sitename.com">email@sitename.com</a>
                        </p>
                            <h2><i className="fas fa-map"></i> Address</h2>
                        <p>
                            200 Aquarium Way Long Beach, CA 90803, United States
                        </p>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    ) : <></>;
}

export default Modal;