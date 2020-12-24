import React from 'react';
import PropTypes from 'prop-types';

import UserPhoto from './UserPhoto/UserPhoto';
import SocialStats from './SocialStats/SocialStats';
import UserDescription from './UserDescription/UserDescription';

import styles from './SocialProfile.module.css';

const SocialProfile = ({ user }) => {
    const { name, tag, location, avatar, stats } = user;

    return (
        <div className={styles.container}>
            <UserPhoto avatar={avatar} description={name} />
            <UserDescription name={name} tag={tag} location={location} />
            <SocialStats followers={stats.followers} views={stats.views} likes={stats.likes} />
        </div>
    )
};

SocialProfile.propTypes = {
    user: PropTypes.object.isRequired,
}

export default SocialProfile;