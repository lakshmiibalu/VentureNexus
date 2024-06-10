import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const AdvisorRegistration = () => {
    const [userData, setUserData] = useState({
        name: '',
        emailid: '',
        password: '',
        confirmPassword: '',
        contactno: '',
        address: '',
        state: '',
        city: '',
        country: '',
        pincode: '',
        investmentRange: '',
        availableCapital: '',
        industryType: ''
    });
    
    
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };
    
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
    
        alert("Profile Added");
        // Optionally reset the form after submission
        setUserData({
            name: '',
            emailid: '',
            password: '',
            confirmPassword: '',
            contactno: '',
            address: '',
            state: '',
            city: '',
            country: '',
            pincode: '',
            investmentRange: '',
            availableCapital: '',
            industryType: ''
        });
    };
    
    
    return (
        <div>
            <UserNavbar/>
            <div className="container">
                <br />
                <br />
                <h2 className="text-center">Advisor Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input type="text" className="form-control" name="name" value={userData.name} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Enter official email</label>
                                <input type="email" className="form-control" name="emailid" value={userData.emailid} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Mobile Number </label>
                                <input type="text" className="form-control" name="password" value={userData.password} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label></label>
                                <input type="text" className="form-control" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Mobile:</label>
                                <input type="text" className="form-control" name="contactno" value={userData.contactno} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Address:</label>
                                <textarea className="form-control" name="address" value={userData.address} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>State:</label>
                                <input type="text" className="form-control" name="state" value={userData.state} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>City:</label>
                                <input type="text" className="form-control" name="city" value={userData.city} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Country:</label>
                                <input type="text" className="form-control" name="country" value={userData.country} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Pincode:</label>
                                <input type="text" className="form-control" name="pincode" value={userData.pincode} onChange={handleChange} placeholder="pin code" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Investment Range:</label>
                                <select className="form-control" name="investmentRange" value={userData.investmentRange} onChange={handleChange} required>
                                    <option value="">Select Investment Range</option>
                                    <option value="Range 1">Range 1</option>
                                    <option value="Range 2">Range 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Available Capital:</label>
                                <select className="form-control" name="availableCapital" value={userData.availableCapital} onChange={handleChange} required>
                                    <option value="">Select Available Capital</option>
                                    <option value="Capital 1">Capital 1</option>
                                    <option value="Capital 2">Capital 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Industry Type (Interested In):</label>
                                <input type="text" className="form-control" name="industryType" value={userData.industryType} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <br />
                    <center>
                        <button type="submit" className="btn btn-primary" >Add Profile</button>
                    </center>
                    
                </form>
            </div>
        </div>
    );
    };

export default AdvisorRegistration