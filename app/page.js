// import React from 'react'
// // import App from './Form.js';
// import App from "./product.js";;
// // import Loginform from './loginform'
// export default function page() {
//   return (
//     <div>
//       {/* <Loginform/> */}
//       <App/>
//     </div>
//   )
// }

"use client"
// import React, { useState, useEffect } from 'react';
// import Loginform from './loginform.js';
// import Productdata from './product.js';
// import Userdata from './userdata/fetchlist.js';

// function App() {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

//   const handleLogin = async (userData) => {
//     try {
//       const response = await fetch('http://localhost:5005/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
//       if (response.ok) {
//         const user = await response.json();
//         setLoggedInUser(user);
//         setIsUserAuthenticated(true);
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   const handleLogout = () => {
//     setIsUserAuthenticated(false);
//     setLoggedInUser(null);
// };


//   return (
//     <div>
//       {!isUserAuthenticated ? (
//         <Loginform onLogin={handleLogin} />
//       ) : (
//         <>
//           <h1>Welcome, {loggedInUser.name}!</h1>
//           <button onClick={handleLogout} style={{marginLeft:'1742px'}}>Back</button>
//           <Userdata/>
//           <Productdata />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Loginform from './loginformdata/loginform.js';
import Productdata from './product.js';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const handleLogin = async (userData) => {
    try {
      const response = await fetch('http://localhost:5005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const user = await response.json();
        setLoggedInUser(user);
        setIsUserAuthenticated(true);
        router.push('/productdata');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = () => {
    setIsUserAuthenticated(false);
    setLoggedInUser(null);
  };

  return (
    <div>
      {!isUserAuthenticated ? (
        <Loginform onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome, {loggedInUser.name}!</h1>
          <button onClick={handleLogout} style={{ marginLeft: '1742px' }}>Back</button>
          <Productdata />
        </>
      )}
    </div>
  );
}

export default Home;
