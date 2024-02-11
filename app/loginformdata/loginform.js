// import React from 'react'

// export default function Loginform() {
//     return (
//         <div>
//             <h1>This is React WebApp </h1>
//             <form>
//                 <div class="mb-3">
//                     <label  class="form-label">Name</label>
//                     <input type="text"  id="exampleInputName"  />

//                 </div>
//                 <div class="mb-3">
//                     <label  class="form-label">Email address</label>
//                     <input type="email" id="email"  />

//                 </div>
//                 <div class="mb-3">
//                     <label class="form-label">Password</label>
//                     <input type="password" id="password" />
//                 </div>
//                 <button type="login" class="btn btn-primary">Login</button>
//             </form>
//         </div>
//     )
// }


"use client"
import React, { useState } from 'react';

function Loginform({ onLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert('Please enter name, email, and password');
            return;
        }

        const userData = { name, email, password };
        onLogin(userData);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input
                        type="text"
                        id="exampleInputName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Loginform;

