import React from 'react'
import UserNavbar from '../UserNavbar'
import { Link } from 'react-router-dom'

const BusinessPlans = () => {
    return (
        <div>
            <UserNavbar /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title"><center>Basic Business</center></h5>
                                        <p class="card-text"><center>FREE</center></p>
                                        <p class="card-text"><center>Businesses which are not actively seeking Buyers but are open to opportunistic offers</center></p>
                                        <p class="card-text"><center>Basic Business Profile</center></p>
                                        <p class="card-text"><center>No Business Proposals</center></p>
                                        <Link to="/paymentgatwey" class="btn btn-primary">Choose this Plan</Link>
                                    </div>
                                </div></div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title"><center>Premium</center></h5>
                                        <p class="card-text"><center></center></p>
                                        <Link to="/paymentgatwey" class="btn btn-primary">Choose this Plan</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">Want to connect with targeted buyers who can take your business to the next level.</h5>
                                        <p class="card-text">Here you go. Select your plan to connect.</p>
                                        <Link to="/paymentgatwey" class="btn btn-primary">Choose this Plan</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPlans