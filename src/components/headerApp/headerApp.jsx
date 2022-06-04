import React from 'react';
import styles from './style.module.css';

const HeaderApp = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Library of books</div>
        </header>
    );
};

export default HeaderApp;
