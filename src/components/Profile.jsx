import React from 'react'
import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'


const Profile = () => {
    return (
        <div>
            <UserNavbar />
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" class="card-img-top" alt="..." style={{ height: '100px', width: '70px' }} />
                                    <div class="card-body">
                                        <Link to="#" class="btn btn-primary">Update</Link>
                                        <h5 class="card-title">Name </h5>
                                        <p class="card-text">Email ID</p>
                                        <p class="card-text">Mobile</p>
                                        <p class="card-text">Address</p>
                                        <h5 class="card-title">Business Details </h5>
                                        <p class="card-text">Company Name</p>
                                        <p class="card-text">Company Mail ID</p>
                                        <p class="card-text">Address</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <center><strong>Recent Activity</strong></center>
                                <br />
                                <div class="card"  >
                                    <img src="https://content.jdmagicbox.com/comp/def_content/mechanical-contractors/1dad98167b-mechanical-contractors-2-fzk6n.jpg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                    <div class="card-body">
                                        <Link class="card-title"><strong>Mechanical Services Business for Sale in Kochi, India</strong>
                                        </Link>
                                        <p class="card-text">For sale: Heavy mechanical engineering business working for big companies located in Southern India.</p>
                                    </div>
                                    <br />
                                </div>
                                <div class="card"  >
                                    <img src="https://content.jdmagicbox.com/comp/def_content/mechanical-contractors/1dad98167b-mechanical-contractors-2-fzk6n.jpg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                    <div class="card-body">
                                        <Link class="card-title"><strong>Mechanical Services Business for Sale in Kochi, India</strong>
                                        </Link>
                                        <p class="card-text">For sale: Heavy mechanical engineering business working for big companies located in Southern India.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Industry Watch
                                        </h5>
                                        <img src="https://imgmedia.lbb.in/media/2019/01/5c4bdc6540bdfd0b21ce0f02_1548475493652.jpg" class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                        <p class="card-text">Nail Salon Franchise Opportunity.</p>
                                    </div>
                                </div><br />
                                <div class="card" >
                                    <div class="card-body">
                                        <Link type="button" to='/forum' class="btn btn-outline-success"  >
                                            Forum
                                        </Link>
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

export default Profile