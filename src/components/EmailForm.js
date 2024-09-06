import React, { useState } from 'react';

const EmailForm = ({ smtpConfig, onSend }) => {
    const [email, setEmail] = useState({ to: '', subject: '', body: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail({ ...email, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(email);
        setEmail({ to: '', subject: '', body: '' });
    };

    return (
        <div className="email-form">
            <h2>Send Email</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="to" placeholder="To" value={email.to} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={email.subject} onChange={handleChange} required />
                <textarea name="body" placeholder="Body" value={email.body} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default EmailForm;
