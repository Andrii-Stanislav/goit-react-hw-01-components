import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionsItem.module.css';


const TransactionsItem = ({ type, amount, currency }) => {
    return <tr className={styles.row}>
        <td className={styles.data}>{type}</td>
        <td className={styles.data}>{amount}</td>
        <td className={styles.data}>{currency}</td>
    </tr>
};

TransactionsItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionsItem;