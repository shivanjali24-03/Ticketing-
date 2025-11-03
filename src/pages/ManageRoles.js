import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";


function ManageRoles() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedRole, setEditedRole] = useState("");

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Delete user
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((u) => u.userId !== userId);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  // Start editing a role
  const handleEdit = (user) => {
    setEditingUser(user.userId);
    setEditedRole(user.role);
  };

  // Save edited role
  const handleSave = (userId) => {
    const updatedUsers = users.map((u) =>
      u.userId === userId ? { ...u, role: editedRole } : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditingUser(null);
  };

  return (
    <div>
      <UserNav />

      <div className="manage-container">
        <h2>Manage User Roles</h2>

        {users.length === 0 ? (
          <p className="no-users">No users available.</p>
        ) : (
          <div className="table-wrapper">
            <table className="user-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.userId}>
                    <td>{u.userId}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      {editingUser === u.userId ? (
                        <select
                          value={editedRole}
                          onChange={(e) => setEditedRole(e.target.value)}
                        >
                          <option value="Admin">Admin</option>
                          <option value="Manager">Manager</option>
                          <option value="User">User</option>
                        </select>
                      ) : (
                        u.role
                      )}
                    </td>
                    <td>
                      {editingUser === u.userId ? (
                        <>
                          <button
                            className="btn-save"
                            onClick={() => handleSave(u.userId)}
                          >
                            Save
                          </button>
                          <button
                            className="btn-cancel"
                            onClick={() => setEditingUser(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn-edit"
                            onClick={() => handleEdit(u)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn-delete"
                            onClick={() => handleDelete(u.userId)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageRoles;
