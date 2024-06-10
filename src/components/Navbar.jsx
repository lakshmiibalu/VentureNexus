import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className="bg-dark p-4">
                    <h5 className="text-body-emphasis h4">"Connecting Global Ventures, Catalyzing Success"</h5>

                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">VentureNexus</Link>
                    <div className="d-flex">
                        <Link type="button" to='/login' class="btn btn-outline-light"  >
                            Login
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;



           







