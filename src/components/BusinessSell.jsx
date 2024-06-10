import React from 'react'
import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'

const BusinessSell = () => {
    return (
        <div>
            <UserNavbar /><br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 d-flex">
                        <input type="text" className="form-control me-2" name="business" placeholder="Search Business..." />
                        <button className="btn btn-outline-dark">Search</button>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                <div className="mobile-container bg-light" style={{ padding: '20px', borderRadius: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
                                    <center><h5>Filter By</h5></center>
                                    <div>
                                        <label htmlFor=""><strong>Industries</strong></label>
                                        <div class="form-check">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Hotels & Resturants
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Infrastructure
                                            </label>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Automobile
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                IT
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor=""><strong>Location</strong></label>
                                        <div class="form-check">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">

                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor=""><strong>Transaction Type</strong></label>
                                        <div class="form-check">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">

                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor=""><strong>Investment Size</strong></label>

                                        <input type="range" class="form-range" id="customRange1" />
                                    </div>

                                </div></div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 dflex" >
                                <div class="card"  >
                                    <img src="https://content.jdmagicbox.com/comp/def_content/mechanical-contractors/1dad98167b-mechanical-contractors-2-fzk6n.jpg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">Mechanical Services Business for Sale in Kochi, India
                                        </h5>
                                        <p class="card-text">For sale: Heavy mechanical engineering business working for big companies located in Southern India.</p>
                                        <Link to="#" class="btn btn-warning">Contact Business</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
                                <div class="card" style={{ height: '200px', objectFit: 'cover' }}>
                                    <img src="https://teknoppy.com/wp-content/themes/teknoppy/images/Social-Media-Marketing.svg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">Social Network Website Investment Opportunity in Kochi, India</h5>
                                        <p class="card-text">A matchmaking social network launched just 5 months ago with 25,000+ users seeks investment.</p>
                                        <Link to="#" class="btn btn-warning">Contact Business</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">Want to connect with targeted buyers who can take your business to the next level.</h5>
                                        <p class="card-text">Here you go. Select your plan to connect.</p>
                                        <Link to="/paymentgateway" class="btn btn-primary">Business Plans</Link>
                                    </div>
                                </div>
                                <br />
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">Connect with Mentors</h5>
                                        <p class="card-text">Choose your mentor for better business. </p>
                                        <Link to="" class="btn btn-primary">Connect</Link>
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

export default BusinessSell

