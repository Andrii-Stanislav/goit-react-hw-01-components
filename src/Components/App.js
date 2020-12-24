import React from 'react';

import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './TransactionHistory/TransactionHistory'

import stats from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';


const App = () => {
  return <>
    <TransactionsHistory transactions={transactions} />
    <FriendList friends={friends} />
    <Statistics stats={stats} />
    <SocialProfile user={user}/>
  </>
};

// SocialProfile
// Statistics
// FriendList

export default App;