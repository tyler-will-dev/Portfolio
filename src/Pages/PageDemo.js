import React, {useState} from 'react';
import Icon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';

function PageDemo() {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const returnHome = () => {
       navigate('/');
    }

    return (
        <div className="test-page">
            <Icon
                onClick={returnHome}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    cursor: 'pointer',
                    transform: hover ? 'scale(1.2)' : 'scale(1)',
                    color: hover ? '#f0c14b' : 'inherit',
                    transition: 'transform 0.2s, color 0.2s',
                }}
            >
                <CottageIcon />
            </Icon>

            <h1>Welcome to the Test Page!</h1>
            <p>Placing contents of a demo/project</p>
        </div>
    );
}

export default PageDemo;
