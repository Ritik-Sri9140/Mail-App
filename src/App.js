import React, { useState } from 'react';
import Auth from './components/Auth';
import SMTPConfig from './components/SMTPConfig';
import EmailForm from './components/EmailForm';
import SentEmails from './components/SentEmails';
import './App.css';

const App = () => {
    const [auth, setAuth] = useState(false);
    const [smtpConfig, setSmtpConfig] = useState(null);
    const [sentEmails, setSentEmails] = useState([]);

    const handleLogin = () => setAuth(true);
    const handleSMTPConfig = (config) => setSmtpConfig(config);
    const handleSendEmail = (email) => {
        setSentEmails([...sentEmails, email]);
    };

    return (
        <div className="app">
            {!auth ? (
                <Auth onLogin={handleLogin} />
            ) : smtpConfig ? (
                <>
                    <SMTPConfig onSave={handleSMTPConfig} />
                    <EmailForm smtpConfig={smtpConfig} onSend={handleSendEmail} />
                    <SentEmails emails={sentEmails} />
                </>
            ) : (
                <SMTPConfig onSave={handleSMTPConfig} />
            )}
        </div>
    );
};

export default App;

