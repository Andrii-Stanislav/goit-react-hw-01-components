import React from 'react';
import PropTypes from 'prop-types';

import TransactionsItem from './TransactionsItem/TransactionsItem';

import styles from './TransactionHistory.module.css';

const TransactionsHistory = ({ transactions }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <th className={styles.data}>Type</th>
                    <th className={styles.data}>Amount</th>
                    <th className={styles.data}>Currency</th>
                </tr>
            </thead>
            <tbody >
                {transactions.map(({ id, type, amount, currency }) => (<TransactionsItem
                    key={id}
                    type={type}
                    amount={amount}            
                    currency={currency} />))}
            </tbody>
        </table>
    )
};

TransactionsHistory.prototype = {
    transactions: PropTypes.array.isRequired,
}

export default TransactionsHistory;