import React, { useState } from 'react'
import UserNavbar from './UserNavbar';

const BusinessRegistration = () => {
    const [userData, setUserData] = useState({
        name: '',
        companyname: '',
        mobileno: '',
        officialemail: '',
        business: '',
        date: '',
        state: '',
        employees: '',
        entitytype: '',
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
            companyname: '',
            mobileno: '',
            officialemail: '',
            business: '',
            date: '',
            state: '',
            employees: '',
            entitytype: '',
            pincode: '',
            investmentRange: '',
            availableCapital: '',
            industryType: ''
        });
    };
    

    return (
        <div>
            <UserNavbar />
            <div className="container">
                <br />
                <h2 className="text-center">Business Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" name="name" value={userData.name} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="email" className="form-control" name="companyname" value={userData.companyname} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Mobile No.</label>
                                <input type="text" className="form-control" name="mobileno" value={userData.mobileno} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Official Email</label>
                                <input type="text" className="form-control" name="officialemail" value={userData.officialemail} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <h4>Business Details</h4>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>What's Your business about?</label>
                                <input type="text" className="form-control" name="business" value={userData.business} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>When was the business established?</label>
                                <input type='text' className="form-control" name="date" value={userData.date} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Where is the business located(headquaters)?</label>
                                <input type="text" className="form-control" name="state" value={userData.state} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>How many permanent employees does the business have?</label>
                                <input type="text" className="form-control" name="employees" value={userData.employees} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Select business legal entity type</label>
                                <select className="form-control" name="entitytype" value={userData.entitytype} onChange={handleChange} required>
                                    <option value=""></option>
                                    <option value="Range 1">General Patnership</option>
                                    <option value="Range 2">Sole Proprietorship / Sole Trader</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label></label>
                                <input type="text" className="form-control" name="pincode" value={userData.pincode} onChange={handleChange} placeholder="" required />
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
                   <label htmlFor=""><h4>Select Your Plan</h4></label> 
                    <div class="form-check">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Basic Plan
                        </label>
                    </div>
                    <div class="form-check ">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                           Preminum
                        </label>
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
export default BusinessRegistration