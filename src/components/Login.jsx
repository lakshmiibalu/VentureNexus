import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('Password does not match');
        } else {
            alert('Registration successful');
        }
    };
    

    return (
        <div>
            <div>
                <center>
                    <div className="background" style={{ backgroundImage: 'url()', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="mobile-container bg-light" style={{ padding: '20px', borderRadius: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
                            <div>
                                <div className="login">
                                    <div className="card">
                                        <div className="container">
                                            <div className="row g-3">
                                                <div className="card-body">

                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Login
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">

                                                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                                                        <div className="row g-3">
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                                                <input type="text" className="form-control" />
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <label htmlFor="" className="form-label">PASSWORD</label>
                                                                                <input type="password" className="form-control" name="password" />
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <Link className="btn btn-primary" to='/dashboard'>LOGIN</Link>
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <center><div className="dropdown">


                                                                                </div></center><br></br>
                                                                                <center><Link to="/" className="nav-link">Back</Link></center>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Register
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    
                                                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                                                        <div className="row g-3">
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                                                <input 
                                                                                    type="text" 
                                                                                    className="form-control" 
                                                                                    value={email}
                                                                                    onChange={(e) => setEmail(e.target.value)} 
                                                                                />
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <label htmlFor="" className="form-label">PASSWORD</label>
                                                                                <input 
                                                                                    type="password" 
                                                                                    className="form-control" 
                                                                                    name="password" 
                                                                                    value={password}
                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                                                                <input 
                                                                                    type="password" 
                                                                                    className="form-control" 
                                                                                    name="confirm password" 
                                                                                    value={confirmPassword}
                                                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                                <Link to='/login' 
                                                                                    className="btn btn-primary" 
                                                                                    onClick={handleRegister}
                                                                                >
                                                                                    Register
                                                                                </Link>
                                                                            </div>
                                                                            <center><Link to="/" className="nav-link">Back </Link></center>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Login;
