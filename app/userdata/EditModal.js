
// "use client"
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css'


// function EditModal({ isOpen, onClose, onSave, user }) {
//     const [name, setName] = useState(user.name);
//     const [email, setEmail] = useState(user.email);

//     const handleSave = () => {
//         onSave(user._id, { name, email });
//         onClose();
//     };

//     return (
//         <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
//                         <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="mb-3">
//                             <label htmlFor="name" className="form-label">Name</label>
//                             <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">Email</label>
//                             <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//                         <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default EditModal;
















"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


function EditModal({ isOpen, onClose, onSave, user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const handleSave = () => {
        onSave(user._id, { name, email,password });
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;
