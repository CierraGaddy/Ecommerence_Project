import React, { useState } from "react"; // Import React and useState for managing form data

function Contact() {
  // State variables to store user input for name, email, and comment
  const [name, setName] = useState(""); // Name field
  const [email, setEmail] = useState(""); // Email field
  const [comment, setComment] = useState(""); // Comment box
  const [error, setError] = useState(""); // Error message if fields are empty

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing when form is submitted

    // Basic validation: If any field is empty, show an error message
    if (!name || !email || !comment) {
      setError("All fields are required!"); // Display error
      return; // Stop form submission
    }

    // If all fields are filled, clear error message and proceed
    setError("");
    console.log("Form submitted"); // For now, just logs submission (can be replaced with actual backend logic)
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h1>Contact Us</h1>

        {/* Show error message if there's an issue */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Form that runs handleSubmit when submitted */}
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <label>Name:</label>
          <input
            type="text"
            value={name} // Links input value to state
            onChange={(e) => setName(e.target.value)} // Updates state when user types
          />

          {/* Email input field */}
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Comment textarea */}
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact; // Exporting the component so it can be used elsewhere
