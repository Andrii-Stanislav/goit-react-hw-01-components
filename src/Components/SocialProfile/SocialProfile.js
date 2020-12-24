import React from 'react';

import {name, tag, location, avatar, stats} from './user.json';

import UserPhoto from './UserPhoto/UserPhoto';
import SocialStats from './SocialStats/SocialStats';
import UserDescription from './UserDescription/UserDescription';

import styles from './SocialProfile.module.css';

const SocialProfile = () => {
    return (
        <div className={styles.container}>
            <UserPhoto avatar={avatar} description={name} />
            <UserDescription name={name} tag={tag} location={location} />
            <SocialStats followers={stats.followers} views={stats.views} likes={stats.likes} />
        </div>
    )
};

export default SocialProfile;