// import React from 'react';

// function ShowModal({ isOpen, onClose, user }) {
//     const { name, email } = user;

//     return (
//         <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
//                         <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
//                     </div>
//                     <div className="modal-body">
//                         <ul>
//                             <li><strong>Name:</strong> {name}</li>
//                             <li><strong>Email:</strong> {email}</li>
//                         </ul>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ShowModal;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

function ShowModal({ isOpen, onClose, user }) {
    const { name, email,password } = user;

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li><strong>Name:</strong> {name}</li>
                            <li><strong>Email:</strong> {email}</li>
                            <li><strong>Password:</strong> {password}</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowModal;
