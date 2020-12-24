import React from 'react';
import PropTypes from 'prop-types';

import StatsItem from './StatsItem/StatsItem';

import styles from './Statistics.module.css'

const Statistics = ({ title='Upload stats', stats}) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
                {stats.map((oneStat) => (<StatsItem
                    key={oneStat.id}
                    stat={oneStat} />))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;
