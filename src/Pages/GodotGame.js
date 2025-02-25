import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import CottageIcon from '@mui/icons-material/Cottage';
import styles from './PageDemo.module.css';

function GodotGame() {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <Icon
                    onClick={returnHome}
                    className={styles.homeIcon}
                >
                    <CottageIcon />
                </Icon>
            </header>

            <main className={styles.content}>
                <h1> COMING SOON! </h1>
            </main>
        </div>
    )
}

export default GodotGame;