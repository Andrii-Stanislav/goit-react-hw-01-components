import React from 'react';
import PropTypes from 'prop-types';

import randomColor from './randomColor';

import styles from './StatsItem.module.css'

const StatsItem = ({stat}) => {
    return (
        <li className={styles.item} style={{backgroundColor: randomColor()}}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
    )
};

StatsItem.propTypes = {
    stat: PropTypes.object.isRequired,
}

export default StatsItem;

