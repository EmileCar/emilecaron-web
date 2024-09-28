import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActivityContext } from '../../contexts/ActivityContext';
import './HeaderTitle.css';

const HeaderTitle: React.FC = () => {
    const { icon, activityState, toggleActivity } = useContext(ActivityContext);

    return (
        <div className="header__logo--container">
            <div onClick={toggleActivity} className={`activity__container fade-img ${activityState ? activityState : ""}`}>
                {icon as React.ReactNode}
            </div>
            <Link to="/" className="layered-grid">
                <h1>Emile Caron</h1>
            </Link>
        </div>
    );
};

export default HeaderTitle;