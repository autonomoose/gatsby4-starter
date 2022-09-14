import React from 'react';

export const Authenticator = props => {
    return (<div data-testid='authenticator'>{props.children}</div>);
}

export const useAuthenticator = props => {
    const user = {
        username: 'testusr',
    }
    return ({ user });
}


