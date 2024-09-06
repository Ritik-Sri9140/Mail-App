import React from 'react';

const SentEmails = ({ emails }) => {
    return (
        <div className="sent-emails">
            <h2>Sent Emails</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>
                        <strong>To:</strong> {email.to} <br />
                        <strong>Subject:</strong> {email.subject} <br />
                        <p>{email.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SentEmails;
