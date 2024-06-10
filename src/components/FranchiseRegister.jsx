import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const FranchiseRegister = () => {
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
    expand: '',
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
        expand: '',
        industryType: ''
    });
};


return (
    <div>
        <UserNavbar/>
        <div className="container">
            <br />
            <br />
            <h2 className="text-center">Franchise Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Authorized Person Name:</label>
                            <input type="text" className="form-control" name="name" value={userData.name} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Enter official email:</label>
                            <input type="email" className="form-control" name="emailid" value={userData.emailid} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" name="password" value={userData.password} onChange={handleChange} required />
                        </div>
                    </div>
                    
                </div>
                
          <h2>Brand Details</h2>
          
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Brand Name:</label>
                            <input type="text" className="form-control" name="contactno" value={userData.contactno} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Website:</label>
                            <input type='text' className="form-control" name="address" value={userData.address} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>About Your Brand:</label>
                            <input type="text" className="form-control" name="state" value={userData.state} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Mention all products/services your brand provides:</label>
                            <input type="text" className="form-control" name="city" value={userData.city} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>How many outlets do you already have globally?</label>
                            <input type="text" className="form-control" name="country" value={userData.country} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Where is your brand's headquarters located?</label>
                            <input type="text" className="form-control" name="pincode" value={userData.pincode} onChange={handleChange} placeholder="pin code" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>When did your brand start operations?</label>
                            <select className="form-control" name="investmentRange" value={userData.investmentRange} onChange={handleChange} required>
                                <option value="">Select</option>
                                <option value="Range 1">2024</option>
                                <option value="Range 2">2023</option>
                                <option value="Range 2">2022</option>
                                <option value="Range 2">2021</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Mention cities/states/countries you want to expand in</label>
                            <input type="text" className="form-control" name="expand" value={userData.expand} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>What is your expectation from the user who takes up this opportunity?</label>
                            <input type="text" className="form-control" name="industryType" value={userData.industryType} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <br />
                <center>
                    <button type="submit" className="btn btn-primary">Add Profile</button>
                </center>
                
            </form>
        </div>
    </div>
);
};

export default FranchiseRegister