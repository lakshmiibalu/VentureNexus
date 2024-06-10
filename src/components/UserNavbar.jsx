import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
    return (
        <div>
            <nav className="navbar nav-underline navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard"><strong>VentureNexus</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/dashboard">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sell">Buy&Sell</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/invest">Investors & Buyers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/franchise">Franchise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help">Need Help?</Link>
                            </li>
                            
                            
                            <li className="nav-item">
                                {/* Highlighted KnownUs Button */}
                                <button type="button" className="nav-link btn btn-info text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#knownUsModal">
                                    A Walk In Through Us
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown mx-2">
                        <Link className="text-black" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: 'none' }}>
                            + Add Profile
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/businessregister">Business</Link></li>
                            <li><Link className="dropdown-item" to="/investorregister">Investor</Link></li>
                            <li><Link className="dropdown-item" to="/franchiseregister">Franchise</Link></li>
                            <li><Link className="dropdown-item" to="/advisorregister">Advisor</Link></li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <Link>
                            <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#mailModal">
                                <img src="https://img.icons8.com/?size=100&id=baRhMh2wmjbT&format=png&color=000000" alt="Mail" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                            </button>
                        </Link>
                        <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#notificationModal">
                            <img src="https://img.icons8.com/?size=100&id=LF602lAhk08H&format=png&color=000000" alt="Notification" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        </button>
                        <Link to="/profile">
                            <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" alt="My Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        </Link>
                        <Link type="button" to="/" className="btn btn-outline-dark">Logout</Link>
                    </div>
                </div>
            </nav>

            {/* Notification Modal */}
            <div className="modal fade" id="notificationModal" tabIndex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="notificationModalLabel">Notifications</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Notifications content goes here */}
                            <ul className="list-group">
                                <li className="list-group-item">Notification 1</li>
                                <li className="list-group-item">Notification 2</li>
                                <li className="list-group-item">Notification 3</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mail Modal */}
            <div className="modal fade" id="mailModal" tabIndex="-1" aria-labelledby="mailModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mailModalLabel">Messages</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Message content goes here */}
                            <ul className="list-group">
                                <li className="list-group-item">Message 1</li>
                                <li className="list-group-item">Message 2</li>
                                <li className="list-group-item">Message 3</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* KnownUs Video Modal */}
            <div className="modal fade" id="knownUsModal" tabIndex="-1" aria-labelledby="knownUsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="knownUsModalLabel">Know Us</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;
