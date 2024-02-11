// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "your_mongodb_connection_string";
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // Example connection
// // client.connect(err => {
// //   if (err) throw err;
// //   console.log("Connected to MongoDB");
// //   // Now you can perform operations with the database
// // });


// const express = require('express');
// const cors=require('cors')
// // const bodyParser = require('body-parser');
// // const app = express();

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// app.use(express.json())
// app.use(cors());
// var database;

// app.post('/Form', (req, res) => {
//     const { name, email } = req.body;
  
//     // Validate and process the login data
//     // Insert data into MongoDB
//     const collection = client.db("TestingApp").collection("User");
    
//     collection.insertOne({ name, email }, (err, result) => {
//       if (err) throw err;
//       console.log("Data inserted into MongoDB");
//       res.send("Login data submitted successfully");
//     });
//   });

// app.listen(7000, () => {
//     MongoClient.connect("mongodb://127.0.0.1:27017",{useNewUrlParser:true},(error,result)=>{
//         if(error) throw error
        
//             database=result.db("TestingApp")
//             console.log("Server is Running .....")
//     })
// })


"use client"
import React, { useEffect, useState } from 'react';
import { connectDatabase, getCollectionData } from '../backend/model.js';

function YourPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const client = await connectDatabase();
            const newData = await getCollectionData('users');
            setData(newData);
            client.close();
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Your Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            {/* Add more columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default YourPage;

