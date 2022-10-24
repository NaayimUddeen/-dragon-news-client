import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

// Redirect them to the /login page, but save the current location they were
// trying to go to when they were redirected. This allows us to send them
// along to that page after they login, which is a nicer user experience
// than dropping them off on the home page.

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return<Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivetRoute;