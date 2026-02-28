import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const Transaction = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { game } = location.state || {};

    const [formData, setFormData] = useState({
        email: '',
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        address: '',
        city: '',
        zipCode: '',
        country: ''
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    if (!game) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-light">No game selected</h2>
                <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Format card number with spaces
        if (name === 'cardNumber') {
            const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
            setFormData({ ...formData, [name]: formatted.substring(0, 19) });
        }
        // Format expiry date
        else if (name === 'expiryDate') {
            const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
            setFormData({ ...formData, [name]: formatted.substring(0, 5) });
        }
        // Limit CVV to 3 digits
        else if (name === 'cvv') {
            setFormData({ ...formData, [name]: value.replace(/\D/g, '').substring(0, 3) });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // EmailJS configuration
        const serviceId = 'service_59oh6lq';
        const templateId = 'template_mef388r';
        const publicKey = 'Hi0EA2FB8JSVdCbCN';

        const templateParams = {
            to_email: formData.email,
            customer_name: formData.cardholderName,
            game_title: game.title,
            game_price: game.price,
            transaction_date: new Date().toLocaleDateString(),
            card_last_four: formData.cardNumber.slice(-4),
            billing_address: `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setShowSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 5000);
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Transaction completed, but email confirmation failed. Please contact support.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-success text-white">
                            <div className="card-body text-center p-5">
                                <i className="bi bi-check-circle" style={{ fontSize: '4rem' }}></i>
                                <h2 className="mt-3">Payment Successful!</h2>
                                <p className="lead">Thank you for your purchase of {game.title}</p>
                                <p>A confirmation email has been sent to {formData.email}</p>
                                <p className="text-white-50">Redirecting to home page...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {/* Order Summary */}
                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-light">
                        <div className="card-header">
                            <h5>Order Summary</h5>
                        </div>
                        <div className="card-body">
                            <img src={game.image} alt={game.title} className="img-fluid rounded mb-3" />
                            <h6>{game.title}</h6>
                            <p className="text-secondary small">{game.description}</p>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Price:</span>
                                <span className="fw-bold">{game.price}</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Tax:</span>
                                <span>$0.00</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span className="h5">Total:</span>
                                <span className="h5 text-warning">{game.price}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <div className="col-md-8">
                    <div className="card bg-dark text-light">
                        <div className="card-header">
                            <h5>Payment Information</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Contact Information */}
                                <h6 className="mb-3">Contact Information</h6>
                                <div className="mb-3">
                                    <label className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <hr className="my-4" />

                                {/* Payment Details */}
                                <h6 className="mb-3">Payment Details</h6>
                                <div className="mb-3">
                                    <label className="form-label">Cardholder Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cardholderName"
                                        value={formData.cardholderName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Card Number *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Expiry Date *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">CVV *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="123"
                                        />
                                    </div>
                                </div>

                                <hr className="my-4" />

                                {/* Billing Address */}
                                <h6 className="mb-3">Billing Address</h6>
                                <div className="mb-3">
                                    <label className="form-label">Street Address *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="123 Main Street"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">City *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">ZIP Code *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Country *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="United States"
                                    />
                                </div>

                                <div className="alert alert-warning mt-4" role="alert">
                                    <small><strong>Demo Notice:</strong> This is a demonstration checkout. No actual payment will be processed.</small>
                                </div>

                                <div className="d-grid gap-2 mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? 'Processing...' : `Pay ${game.price}`}
                                    </button>
                                    <Link to={`/game/${game.title.toLowerCase().replace(/\s+/g, '')}`} className="btn btn-outline-light">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
