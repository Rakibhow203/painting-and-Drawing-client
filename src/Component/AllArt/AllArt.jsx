import React, { useState } from 'react';

const AllArt = () => {
    const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    // Check for lowercase letter
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      setError('Password must contain at least one lowercase letter');
      return;
    }

    // Check length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');      
      return;
    }

    // If all conditions are met, show success message
    setSuccess('Password is valid!');
  };



  
  return (
   <div className="App">
      <h1>Password Verification</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
};

export default AllArt;