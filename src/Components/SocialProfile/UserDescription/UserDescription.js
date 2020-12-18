import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserDescription.module.css'

const UserDescription = ({ name, tag, location }) => {
    return <>
        <div className={styles.container}>
            <p className={styles.name}>{ name }</p>
            <p className={styles.tag}>@{ tag }</p>
            <p className={styles.tag}>{ location }</p>
        </div>
    </>
};

UserDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};



export default UserDescription;