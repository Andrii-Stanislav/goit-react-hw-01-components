import React from 'react';

import SocialProfile from './Components/SocialProfile/SocialProfile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionsHistory from './Components/TransactionHistory/TransactionHistory'

import stats from './Components/Statistics/statistical-data.json';
import friends from './Components/FriendList/friends.json';
import transactions from './Components/TransactionHistory/transactions.json'


const App = () => {
  return <>
    <TransactionsHistory transactions={ transactions }></TransactionsHistory>

    <FriendList friends={ friends } ></FriendList>

    <Statistics stats={ stats }> </Statistics>

    <SocialProfile> </SocialProfile>
  </>
};

// SocialProfile
// Statistics
// FriendList

export default App;