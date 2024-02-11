import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function AddModal({ isOpen, onClose, onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [number, setNumber] = useState('');
    const [instockCount, setInstockCount] = useState('');
    const [productImage, setProductImage] = useState('');
    const [price, setPrice] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturedDate, setManufacturedDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleSave = () => {
        onSave({
            name,
            description,
            number,
            instock_count: instockCount,
            product_image: productImage,
            price,
            created_at: createdAt,
            Manufacturer: manufacturer,
            Manufactured_date: manufacturedDate,
            expriy_date: expiryDate,
        });
        setName('');
        setDescription('');
        setNumber('');
        setInstockCount('');
        setProductImage('');
        setPrice('');
        setCreatedAt('');
        setManufacturer('');
        setManufacturedDate('');
        setExpiryDate('');
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                    <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Number</label>
                            <input type="text" className="form-control" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="instockCount" className="form-label">In Stock Count</label>
                            <input type="text" className="form-control" id="instockCount" value={instockCount} onChange={(e) => setInstockCount(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productImage" className="form-label">Product Image</label>
                            <input type="text" className="form-control" id="productImage" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="createdAt" className="form-label">Created At</label>
                            <input type="text" className="form-control" id="createdAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                            <input type="text" className="form-control" id="manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="manufacturedDate" className="form-label">Manufactured Date</label>
                            <input type="text" className="form-control" id="manufacturedDate" value={manufacturedDate} onChange={(e) => setManufacturedDate(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                            <input type="text" className="form-control" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;
