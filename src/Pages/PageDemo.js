import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import CottageIcon from '@mui/icons-material/Cottage';
import WeatherAPI from './Tabs/Weather/WeatherAPI';
import styles from './PageDemo.module.css';

function PageDemo() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('weather');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                <button 
                    className={styles.menuButton} 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    ☰
                </button>
            </header>

            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'weather' ? styles.active : ''}`}
                    onClick={() => {
                        setActiveTab('weather');
                        setIsSidebarOpen(false);
                    }}
                >
                    Weather
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'github' ? styles.active : ''}`}
                    onClick={() => {
                        setActiveTab('github');
                        setIsSidebarOpen(false);
                    }}
                >
                    GitHub
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'nodejs' ? styles.active : ''}`}
                    onClick={() => {
                        setActiveTab('nodejs');
                        setIsSidebarOpen(false);
                    }}
                >
                    Buttons
                </button>
            </aside>

            <main className={styles.content}>
                {activeTab === 'weather' && <WeatherAPI />}
                {activeTab === 'github' && (
                    <div>
                        <h2>GitHub Repositories</h2>
                        <p>Display GitHub repositories here...</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default PageDemo;