import React, { useState } from "react";

const Profile = () => {
  // State to hold user information (Name, Email, and Address)
  const [user, setUser] = useState({
    name: "John Doe", // Default name
    email: "johndoe@example.com", // Default email
    address: "123 Main Street, NY", // Default address
  });

  // Function to handle input changes
  const handleChange = (e) => {
    // Updates the specific field (name, email, or address) when user types
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <div className="profile-info">
        {/* Name Input */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name} // Displays current name
          onChange={handleChange} // Updates state when typing
        />

        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email} // Displays current email
          onChange={handleChange} // Updates state when typing
        />

        {/* Address Input */}
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={user.address} // Displays current address
          onChange={handleChange} // Updates state when typing
        />

        {/* Save Changes Button (Not functional yet) */}
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile; // Exports the Profile component so it can be used in the app
