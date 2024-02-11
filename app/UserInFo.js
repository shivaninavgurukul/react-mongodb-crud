"use client"

import React, { useState, useEffect } from 'react';
import EditModal from './EditModal.js';
import ShowModal from './ShowModal.js';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showShowModal, setShowShowModal] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getusers');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleShow = (user) => {
        setSelectedUser(user);
        setShowShowModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleCloseShowModal = () => {
        setShowShowModal(false);
    };

    const handleSaveChanges = async (userId, newData) => {
        try {
            const response = await fetch(`http://localhost:5000/updateuser/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            if (response.ok) {
                // Update user data in the list
                const updatedUsers = users.map(user => {
                    if (user._id === userId) {
                        return { ...user, ...newData };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                setShowModal(false);
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
            <h1>User Data</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleShow(user)}>Show</button>
                                <button onClick={() => handleEdit(user)} style={{ marginLeft: '20px' }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedUser && (
                <EditModal
                    isOpen={showEditModal}
                    onClose={handleCloseEditModal}
                    onSave={handleSaveChanges}
                    user={selectedUser}
                />
            )}
            {selectedUser && (
                <ShowModal
                    isOpen={showShowModal}
                    onClose={handleCloseShowModal}
                    user={selectedUser}
                />
            )}
        </>
    );
}

export default App;
