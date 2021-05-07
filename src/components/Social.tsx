import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagramSquare, faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.css';

const socials = [
    {title: 'Tweeter', icon: faTwitter, link: '#'},
    {title: 'Facebook', icon: faFacebookF, link: '#'},
    {title: 'Pinterest', icon: faPinterestP, link: '#'},
    {title: 'Instagram', icon: faInstagramSquare, link: '#'},
    {title: 'Vimeo', icon: faVimeoSquare, link: '#'},
];

const Social = () => {
    return (
        <div className={styles['social']}>
            <ul>
                {socials.map(social => 
                    <li>
                        <a href={social.link}>
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Social;