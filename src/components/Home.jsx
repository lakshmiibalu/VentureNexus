import React from 'react';
import './Home.css'; // Custom styles for the home component
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="https://cdn.dorik.com/65b8a0980c950f00116993f2/videos/q9e2jm-xnR2a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h5 className="card-title">JOIN GLOBAL MARKET PLACE</h5>
          <Link className="btn btn-success" to='/'>Mentorship</Link>
          <div className="row justify-content-center mt-3">
            <div className="col-12 d-flex justify-content-center">
              <Link to="/sell" className="card-link text-white mx-2" style={{ textDecoration: 'none' }}>Sell&Buy</Link>
              <Link to="/franchise" className="card-link text-white mx-2" style={{ textDecoration: 'none' }}>Franchise</Link>
              <Link to="/invest" className="card-link text-white mx-2" style={{ textDecoration: 'none' }}>Invest</Link>
              <div className="dropdown mx-2">
                <Link className="text-white" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: 'none' }}>
                  + Add Profile
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/login">Business</Link></li>
                  <li><Link className="dropdown-item" to="/login">Investor</Link></li>
                  <li><Link className="dropdown-item" to="login">Franchise</Link></li>
                  <li><Link className="dropdown-item" to="/login">Advisor</Link></li>
                </ul>
              </div>

            </div>
          </div><br />
          <div className="col-12 d-flex justify-content-center">
            <Link to="/">
              <img src="https://img.icons8.com/?size=100&id=apeVVtmsp9hB&format=png&color=228BE6" alt="My Profile" style={{ background:'white', width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }} />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><div class="card w-75 mb-3">
        <div class="card-body">
          <h6 className="card-title">CONNECTING GLOBAL BUSINESS</h6>
          <p class="card-text">VentureNexus is a global platform allowing businesses and investors from across the globe to connect for strategic partnerships. The platform serves as an online marketplace enabling mergers, acquisitions, investments and joint ventures.</p>

        </div>

      </div>
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://cdn.dorik.com/665de53777c94c001ec06fb2/images/photo-1556761175-b413da4baf72-Zizp2.jpeg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Driving Growth Through Connections</h5>
                <p class="card-text">By streamlining the process, VentureNexus makes it easier for companies and investors worldwide to connect and explore partnership opportunities that can drive business growth and expansion..</p>
                <p class="card-text">The platform offers tools and services tailored for buyers and sellers across industries to find, evaluate and engage with potential matches effectively.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container" >

          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">Connecting businesses globally</h1>
                      <p class="card-text">VentureNexus provides a comprehensive platform for business listings, finding buyers and investors, selling stakes, raising funds, and facilitating mergers and acquisitions globally.</p>

                    </div>
                    <img src="https://cdn.dorik.com/665de53777c94c001ec06fb2/images/photo-1545987796-200677ee1011-m1sCF.jpeg" class="card-img-bottom" alt="..." style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex">

                  <div class="card text-center mb-3" >
                    <div class="card-body">
                      <h1 class="card-title text-primary" >List </h1><h1 class="card-title " >Business </h1>

                    </div>
                  </div>
                  <div class="card text-center mb-3" >
                    <div class="card-body">
                      <h1 class="card-title">Find </h1><h1 class="card-title text-primary" >Partners </h1>

                    </div>
                  </div>
                  <div class="card text-center mb-3" >
                    <div class="card-body">
                      <h1 class="card-title text-primary">Raise </h1><h1 class="card-title">Capital </h1>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mb-2 bg-dark text-light">
        
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div class="card mb-3 body bg-secondary text-light">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://cdn.dorik.com/665defa977c94c001ec09cb1/images/photo-1511376979163-f804dff7ad7b-KJjw4.jpeg" class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <center>
                    <div class="card-body  text-light">
                      <h3 class="card-title"><br /><br /><br /><br />Bringing Businesses and Investors Together in One Global Platform</h3>
                      <p class="card-text"><br /><br /> Business Today is a global platform that enables businesses to list their companies for sale, connect with investors and buyers, find trusted advisors, and secure financing from lenders. We make it easy for growing companies and brands to access the resources they need to scale.</p>
                    
                    </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mb-2 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <h5>Contact</h5>
              <br></br>
              <p class="card-text"></p>
              <ul>
                <li class="list-group-item  text-white"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75230/location-icon-clipart-xl.png" alt="Bootstrap" width="50" height="50" />&nbsp;</li><br></br>

                <li class="list-group-item  text-white"><img src="https://cdn.pixabay.com/photo/2021/10/29/21/40/phone-icon-6753051_1280.png" alt="Bootstrap" width="50" height="50" />&nbsp;</li><br></br>

                <li class="list-group-item  text-white"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Bootstrap" width="50" height="50" />&nbsp; </li>

              </ul>

            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Useful Links</h5>
              <br></br>

              <ul>
                <a class="nav-link active" aria-current="page" href="#"><font color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a><br></br>
                <a class="nav-link" href="#"><font color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a><br></br>
                <a class="nav-link" href="#"><font color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a><br></br>
                <a class="nav-link" href="#"><font color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a><br></br>
                <a class="nav-link" href="#"><font color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a>

              </ul>

            </div>
            <div className="col col-12 col-sm-6 col-md- col-lg-4 col-xl-4 col-xxl-4">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow us on</h5>
              <li class="list-group-item bg-dark text-white"> <Link to=""><img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" alt="Bootstrap" width="40" height="40" /></Link>
                &nbsp;&nbsp;&nbsp;<Link to=""><img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_1280.png" alt="Bootstrap" width="40" height="40" /></Link>
                &nbsp;&nbsp;&nbsp;<Link to=""></Link><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Bootstrap" width="40" height="40" />
                &nbsp;&nbsp;&nbsp;<Link to=""></Link><img src="https://cdn.pixabay.com/photo/2015/09/14/22/59/google-plus-940316_1280.png" alt="Bootstrap" width="40" height="40" />
              </li>
            </div>
            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center> ©2023  All rights reserved</center></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
