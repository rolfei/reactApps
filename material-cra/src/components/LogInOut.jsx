import React from 'react';

const LogInOut = (props) => {
    const { email, uri } = props;
    const isLoggedIn = Boolean(email);

    const message = isLoggedIn ? 'sign out' : 'sign in';
    const path = isLoggedIn ? '/logout' : '/login';

    return (<a href={uri + path}>{message}</a>);
};

export default LogInOut;