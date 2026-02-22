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
                    className={`${styles.tabButton} ${activeTab === 'data' ? styles.active : ''}`}
                    onClick={() => {
                        setActiveTab('data');
                        setIsSidebarOpen(false);
                    }}
                >
                    Data
                </button>
            </aside>

            <main className={styles.content}>
                {activeTab === 'weather' && <WeatherAPI />}
                {activeTab === 'github' && (
                    <div>
                        <h2>GitHub Repositories</h2>
                        <p>Coming soon...</p>
                    </div>
                )}
                {activeTab === 'data' && (
                    <div className={styles.dashboardContainer}>
                        <h2>Data Dashboards</h2>
                        
                        {/* ThreatLens Project Card */}
                        <div className={styles.projectCard}>
                            <div className={styles.projectHeader}>
                                <h3>🛡️ ThreatLens: Automated Threat Intelligence</h3>
                                <a 
                                    href="https://github.com/tyler-will-dev/ThreatLens-Automated-ETL" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.githubButton}
                                >
                                    View Source Code ↗
                                </a>
                            </div>
                            <p className={styles.projectDescription}>
                                An end-to-end automated ETL pipeline and cross-filtered Business Intelligence dashboard designed to monitor active malware threats against internal assets.
                            </p>
                            <div className={styles.techTags}>
                                <span className={styles.tag}>Python</span>
                                <span className={styles.tag}>PostgreSQL</span>
                                <span className={styles.tag}>Power BI</span>
                                <span className={styles.tag}>SQL</span>
                            </div>
                        </div>

                    </div>
                )}
            </main>
        </div>
    );
}

export default PageDemo;