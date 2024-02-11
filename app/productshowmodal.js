import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function ShowModal({ isOpen, onClose, product }) {
    const { name, description, number, instock_count, product_image, price, created_at, Manufacturer, Manufactured_date, expriy_date } = product;

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li><strong>Name:</strong> {name}</li>
                            <li><strong>Description:</strong> {description}</li>
                            <li><strong>Number:</strong> {number}</li>
                            <li><strong>Instock Count:</strong> {instock_count}</li>
                            <li><strong>Product Image:</strong> {product_image}</li>
                            <li><strong>Price:</strong> {price}</li>
                            <li><strong>Created At:</strong> {created_at}</li>
                            <li><strong>Manufacturer:</strong> {Manufacturer}</li>
                            <li><strong>Manufactured Date:</strong> {Manufactured_date}</li>
                            <li><strong>Expiry Date:</strong> {expriy_date}</li>
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
