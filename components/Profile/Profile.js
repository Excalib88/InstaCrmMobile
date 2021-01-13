import React, {Label} from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../AuthProvider';

const Profile = () => {    
    return (
        <>
            <div className="menu">
                <Link className="menu-item" to="/auth" onClick={logout}>Logout</Link>
            </div>
            <div className="info">
            </div>
        </>
    );
}
    

export default Profile;