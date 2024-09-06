import React, { useState } from 'react';

const SMTPConfig = ({ onSave }) => {
    const [config, setConfig] = useState({ host: '', port: '', user: '', pass: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConfig({ ...config, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(config);
    };

    return (
        <div className="smtp-config">
            <h2>SMTP Configuration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="host" placeholder="SMTP Host" onChange={handleChange} required />
                <input type="number" name="port" placeholder="Port" onChange={handleChange} required />
                <input type="text" name="user" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="pass" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Save Configuration</button>
            </form>
        </div>
    );
};

export default SMTPConfig;
