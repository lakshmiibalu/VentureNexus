import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from './UserNavbar'

const InvestInBusiness = () => {
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
                                        <label htmlFor=""><strong>Investor Type</strong></label>
                                        <div class="form-check">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">

                                            </label>
                                        </div>
                                    </div>
                                    <div></div>
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
                                        <label htmlFor=""><strong>Investment Size</strong></label>
                                        
                                        <input type="range" class="form-range" id="customRange1" />
                                    </div>

                                </div></div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" >
                                <div class="card" >
                                    {/* <img src="https://content.jdmagicbox.com/comp/def_content/mechanical-contractors/1dad98167b-mechanical-contractors-2-fzk6n.jpg" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }} /> */}
                                    <div class="card-body" style={{ height: '200px', objectFit: 'cover' }}>
                                        <Link to='/' class="card-title"><strong> Director, FMCG, Individual Buyer , Kochi, India</strong></Link>
                                        <p class="card-text">Individual Buyer in Kochi Looking to Buyout Businesses Upto INR 8 crore</p>
                                        <Link to="#" class="btn btn-warning">Send Proposal</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
                                <div class="card" style={{ height: '200px', objectFit: 'cover' }}>
                                    {/* <img src="https://teknoppy.com/wp-content/themes/teknoppy/images/Social-Media-Marketing.svg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }}/> */}
                                    <div class="card-body">
                                        <Link to='/' class="card-title"><strong>Specialist, IT, Individual Buyer , Kottayam, India</strong></Link>
                                        <p class="card-text">Individual Buyer in Kottayam Looking to Buyout Technology and IT Service Businesses Upto INR 50 lakh.</p>
                                        
                                        <Link to="#" class="btn btn-warning">Send Proposal</Link>
                                        <Link to="/communication" class="btn btn-info">Connect</Link>
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

export default InvestInBusiness