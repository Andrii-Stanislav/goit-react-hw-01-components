import React from 'react';
import PropTypes from 'prop-types';

import styles from './SocialStats.module.css';

const SocialStats = ({followers, views, likes}) => {
    return (
        <ul className={styles.container}>
            <li className={styles.item}>
                <span className={styles.itemText}>Followers </span>
                <span className={styles.itemNumber}>{followers}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemText}>Views </span>
                <span className={styles.itemNumber}>{views}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemText}>Likes </span>
                <span className={styles.itemNumber}>{likes}</span>
            </li>
        </ul>
        )
    
};


SocialStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default SocialStats;