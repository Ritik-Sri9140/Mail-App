import React from 'react';

const Auth = ({ onLogin }) => {
    return (
        <div className="auth">
            <center>
                <h2>Login Mail</h2>
                <button onClick={onLogin}>Log In</button>
            </center>
        </div>
    );
};

export default Auth;
