import React, {useState, useEffect} from 'react';
import Header from './Header';
import Section from './Section';
import ModalButton from './ModalButton';
import Modal from './Modal';
import styles from './Main.module.css';

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>{
        // scroll to top if Modal is open in mobile browser 
        if (isOpen && window.outerWidth <= 480) {
            window.scrollTo(0, 0);
        }
    }, [isOpen]);

    const onClickButton = () => {
        // console.log('Show info');
        setIsOpen(true);
    };

    const modalCallback = () => {
        // console.log('Close modal');
        setIsOpen(false);
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.inner}>
                    <Header />
                    <Section />
                    <ModalButton onClick={onClickButton}/>
                </div>
            </div>
            <Modal isOpen={isOpen} callback={modalCallback}/>
        </>
    );
}

export default Main;