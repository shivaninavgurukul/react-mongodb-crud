"use client"
import React, { useState, useEffect } from 'react';
import "./product.css";
import EditModal from './producteditmodal';
import ShowModal from './productshowmodal';
import AddModal from './product_add_data';
import Link from 'next/link';


function Productdata() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showShowModal, setShowShowModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5005/getproducts'); // Update the URL to your product data endpoint
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowEditModal(true);
    };

    const handleShow = (product) => {
        setSelectedProduct(product);
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
            const response = await fetch('http://localhost:5005/createproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            });
            if (response.ok) {
                const newProduct = await response.json();
                setProducts(prevProducts => [...prevProducts, newProduct]); // Add the new product to the end of the list
                setShowNewModal(false);
            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };



    const handleSaveChanges = async (productId, newData) => {
        try {
            const response = await fetch(`http://localhost:5005/updateproduct/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            if (response.ok) {
                // Update product data in the list
                const updatedProducts = products.map(product => {
                    if (product._id === productId) {
                        return { ...product, ...newData };
                    }
                    return product;
                });
                setProducts(updatedProducts);
                setShowEditModal(false);
            } else {
                console.error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
            <h1>Product Data</h1>
            <button onClick={handleNew}>New</button><br /><br />
            <Link href="/userdata"><button>Userdata</button></Link>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Number</th>
                        <th>In Stock Count</th>
                        <th>Product Image</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Manufacturer</th>
                        <th>Manufactured Date</th>
                        <th>Expiry Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.number}</td>
                            <td>{product.instock_count}</td>
                            <td>{product.product_image}</td>
                            <td>{product.price}</td>
                            <td>{product.created_at}</td>
                            <td>{product.Manufacturer}</td>
                            <td>{product.Manufactured_date}</td>
                            <td>{product.expriy_date}</td>
                            <td>
                                <button onClick={() => handleShow(product)}>Show</button>
                                <button onClick={() => handleEdit(product)} style={{ marginLeft: '20px' }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProduct && (
                <EditModal
                    isOpen={showEditModal}
                    onClose={handleCloseEditModal}
                    onSave={handleSaveChanges}
                    product={selectedProduct}
                />
            )}
            {selectedProduct && (
                <ShowModal
                    isOpen={showShowModal}
                    onClose={handleCloseShowModal}
                    product={selectedProduct}
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

export default Productdata;
