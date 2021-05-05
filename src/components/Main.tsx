import React, {useState} from 'react';
import Header from './Header';
import Section from './Section';
import ModalButton from './ModalButton';
import Modal from './Modal';
import styles from './Main.module.css';

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={styles.main}>
                <div className={styles.inner}>
                    <Header />
                    <Section />
                    <ModalButton onClick={() => {
                        console.log('Show info');
                        setIsOpen(true);
                    }}/>
                </div>
            </div>
            <Modal isOpen={isOpen} callback={() => {
                console.log('Close modal');
                setIsOpen(false);
            }}/>
        </>
    );
}

export default Main;