import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock, FaEdit, FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';
import { Footer } from '../Footer/Footer';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Sample data for the profile
  const [profile, setProfile] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    password: '******',
  });

  const [isEditing, setIsEditing] = useState(false); // To toggle between edit mode
  const [formData, setFormData] = useState({ ...profile });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    // Fake a successful update (you can replace this with an API call)
    setProfile({ ...formData });
    setSuccessMessage('Profile updated successfully!');
    setIsEditing(false); // Disable editing mode
    setError(null); // Clear any existing error
  };

  return (
    <>
      <div className="container my-4">
        {/* Home Button */}
        <div className="d-flex justify-content-start mb-3">
          <Link to="/" className="btn btn-light btn-sm">
            <FaHome /> Home
          </Link>
        </div>

        <div className="card profile-card shadow-lg bg-warning-subtle">
          <div className="card-header text-center">
            <h3>Profile Dashboard</h3>
          </div>
          <div className="card-body">
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username">
                  <FaUserAlt /> Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">
                  <FaLock /> Password
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <button
                    type="button"
                    className="btn password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {isEditing && (
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
              )}

              <button
                type="button"
                className="btn btn-primary ms-2"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <FaEdit /> : 'Edit Profile'}
              </button>
            </form>

            {/* Reset Password Link */}
            <div className="mt-3">
              <Link to="/forgetpassword" className="text-decoration-none text-primary">
                Reset Password
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
