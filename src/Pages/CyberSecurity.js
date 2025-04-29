import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import CottageIcon from '@mui/icons-material/Cottage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import styles from './CyberSecurity.module.css';

function CyberSecurity() {
  const navigate = useNavigate();
  const [showSpoilers, setShowSpoilers] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');

  const returnHome = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/Compiled.md")
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
      .catch((err) => {
        console.error("Failed to load markdown file:", err);
        setMarkdownContent("# Error\nCould not load write-up.");
      });
  }, []);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <Icon onClick={returnHome} className={styles.homeIcon}>
          <CottageIcon />
        </Icon>
      </header>

      <main className={styles.content}>
        <h1>TryHackMe: Compiled</h1>
        <p>
          <strong>Summary:</strong> Reverse engineered a Linux ELF binary to uncover a password hidden behind some clever scanf logic. Used static analysis to map out string comparisons and 
            disassembled the main function to isolate the right payload and bypass incorrect matches.
        </p>
        <p>
          <strong>Skills:</strong> Static Analysis, Reverse Engineering, Linux, objdump, strings, C format string parsing, Ghidra
        </p>

        <button onClick={() => setShowSpoilers(!showSpoilers)}>
          {showSpoilers ? 'Hide Spoilers' : 'Show Full Write-Up'}
        </button>

        {showSpoilers && (
          <div className={styles.markdownContainer}>
            <ReactMarkdown
              children={markdownContent}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            />
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <a
            href="https://github.com/tyler-will-dev/TryHackMe/blob/main/Compiled.md"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}

export default CyberSecurity;