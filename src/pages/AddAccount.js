import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserNav from "../components/UserNav";


function AddUser() {
    //form state
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

  // Generate user ID when form loads
  useEffect(() => {
    const newId = "USR" + Math.floor(Math.random() * 1000000);
    setFormData((prev) => ({ ...prev, userId: newId }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill in all fields!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User added successfully!");
    navigate("/userlist");
  };

  return (
    <div>
      {/* ✅ Navigation Buttons */}
       <UserNav />

      {/* ✅ Form Section */}
      <div className="add-user-container">
        <h2>Create New User</h2>

        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User ID:</label>
            <input type="text" value={formData.userId} readOnly />
          </div>

          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="role-dropdown"
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
              <option value="Support">Support</option>
              <option value="HR">HR</option>
            </select>
          </div>

          {/* ✅ Button with unique class */}
          <button type="submit" className="create-btn purple-btn">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
