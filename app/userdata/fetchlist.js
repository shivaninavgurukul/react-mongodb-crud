// "use client"

// import React, { useState, useEffect } from 'react';
// import EditModal from './EditModal.js';
// import ShowModal from './ShowModal.js';
// import AddModal from "./add_data_modal.js";

// function App() {
//     const [users, setUsers] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showShowModal, setShowShowModal] = useState(false);
//     const [showNewModal, setShowNewModal] = useState(false);




//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5005/getusers');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setShowEditModal(true);
//     };

//     const handleShow = (user) => {
//         setSelectedUser(user);
//         setShowShowModal(true);
//     };

//     const handleNew = (user) => {
//         setSelectedUser(user);
//         setShowNewModal(true);

//     }

//     const handleCloseNewModal = () => {
//         setShowNewModal(false);
//     };


//     const handleCloseEditModal = () => {
//         setShowEditModal(false);
//     };

//     const handleCloseShowModal = () => {
//         setShowShowModal(false);
//     };

//     const handleCreateUser = async (newUserData) => {
//         try {
//             const response = await fetch('http://localhost:5005/createuser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUserData),
//             });
//             if (response.ok) {
//                 const newUser = await response.json();
//                 setUsers(prevUsers => {
//                     if (prevUsers.length >= 4) {
//                         return [...prevUsers.slice(1), newUser]; // Replace the oldest user with the new user
//                     } else {
//                         return [...prevUsers, newUser]; // Add the new user to the end of the list
//                     }
//                 });
//                 setShowNewModal(false);
//             } else {
//                 console.error('Failed to create user');
//             }
//         } catch (error) {
//             console.error('Error creating user:', error);
//         }
//     };



//     const handleSaveChanges = async (userId, newData) => {
//         try {
//             const response = await fetch(`http://localhost:5005/updateuser/${userId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newData),
//             });
//             if (response.ok) {
//                 // Update user data in the list
//                 const updatedUsers = users.map(user => {
//                     if (user._id === userId) {
//                         return { ...user, ...newData };
//                     }
//                     return user;
//                 });
//                 setUsers(updatedUsers);
//                 setShowModal(false);
//             } else {
//                 console.error('Failed to update user');
//             }
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     return (
//         <>
//             <h1>User Data</h1>
//             <button onClick={() => handleNew(true)}>New</button>
//             <table className="user-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Password</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.password}</td>
//                             <td>
//                                 <button onClick={() => handleShow(user)}>Show</button>
//                                 <button onClick={() => handleEdit(user)} style={{ marginLeft: '20px' }}>Edit</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {selectedUser && (
//                 <EditModal
//                     isOpen={showEditModal}
//                     onClose={handleCloseEditModal}
//                     onSave={handleSaveChanges}
//                     user={selectedUser}
//                 />
//             )}
//             {selectedUser && (
//                 <ShowModal
//                     isOpen={showShowModal}
//                     onClose={handleCloseShowModal} // Corrected function name
//                     user={selectedUser}
//                 />
//             )}

//             {selectedUser && (
//                 <AddModal
//                     isOpen={showNewModal}
//                     onClose={handleCloseShowModal}
//                     onSave={handleCreateUser}
//                     user={selectedUser}
//                 />
//             )}

//         </>
//     );
// }

// export default App;



"use client"

import React, { useState, useEffect } from 'react';
import EditModal from './EditModal.js';
import ShowModal from './ShowModal.js';
import AddModal from "./add_data_modal.js";


function Userdata() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showShowModal, setShowShowModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5005/getusers');
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

    const handleNew = () => {
        setShowNewModal(true);
    };

    const handleCloseNewModal = () => {
        setShowNewModal(false);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleCloseShowModal = () => {
        setShowShowModal(false);
    };

    const handleCreateUser = async (newUserData) => {
        try {
            const response = await fetch('http://localhost:5005/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            });
            if (response.ok) {
                const newUser = await response.json();
                setUsers(prevUsers => [...prevUsers, newUser]); // Add the new user to the end of the list
                setShowNewModal(false);
            } else {
                console.error('Failed to create user');
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };


    const handleSaveChanges = async (userId, newData) => {
        try {
            const response = await fetch(`http://localhost:5005/updateuser/${userId}`, {
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
                setShowEditModal(false);
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
            <button onClick={handleNew}>New</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
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
            <AddModal
                isOpen={showNewModal}
                onClose={handleCloseNewModal}
                onSave={handleCreateUser}
            />
        </>
    );
}

export default Userdata;
