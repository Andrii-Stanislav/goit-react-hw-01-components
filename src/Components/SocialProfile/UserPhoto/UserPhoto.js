import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserPhoto.module.css'

const UserPhoto = ({ avatar, description }) => {
    return <>
        <div className={styles.container}>
            <img className={styles.photo} src={ avatar } alt={description} />
        </div>
    </>
};

UserPhoto.propTypes = {
    avatar: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default UserPhoto;