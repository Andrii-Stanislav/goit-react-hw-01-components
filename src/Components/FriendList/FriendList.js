import React from 'react';
import PropTypes from 'prop-types';


import FriendItem from './FriendItem/FriendItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={ styles.list }>
        {friends.map(( friend ) => ( <FriendItem
            avatar={ friend.avatar } name={ friend.name } isOnline={ friend.isOnline } key={ friend.id }
            >
            </FriendItem>
        ))}
    </ul>
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;