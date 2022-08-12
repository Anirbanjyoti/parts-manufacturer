import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    
    return (
        <div>
            <img src={user?.photoURL} alt='images'></img> 
            <h1><strong>Profile Name:</strong> {user?.displayName}</h1>
            <h1><strong>Profile Email:</strong> {user?.email}</h1>
        </div>
    );
};

export default MyProfile;