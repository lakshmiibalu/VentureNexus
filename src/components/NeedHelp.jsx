import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const NeedHelp = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [faqRating, setFaqRating] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent. We will get back to you soon.');
        // Add your form submission logic here
    };

    const handleFaqRating = (faqId, rating) => {
        setFaqRating({ ...faqRating, [faqId]: rating });
    };

    return (
        <div>
            <UserNavbar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Need Help?</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for help topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* Display search suggestions */}
                    {searchQuery && (
                        <div className="list-group mt-1">
                            <button className="list-group-item list-group-item-action">What is seller financing??</button>
                            <button className="list-group-item list-group-item-action">How to contact support?</button>
                            <button className="list-group-item list-group-item-action">Can I delete a message already sent on VentureNexus?</button>
                            {/* Add more suggestions */}
                        </div>
                    )}
                </div>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeading1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                What is seller financing?
                            </button>
                        </h2>
                        <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Seller financing is a common way to finance small business acquisitions. It involves the seller providing a loan to the buyer to purchase the business, in which the seller will receive the payments in installments following a substantial down payment. Many business owners offer this option to buyers to help bring in more buyers and complete a transaction. However, seller financing agreements should be reviewed by a lawyer and should distinctly outline the corrective actions that would enable the seller to pursue any available legal remedies in the event of a payment default.
                                <div className="mt-2">
                                    <span>Was this helpful?</span>
                                    <button onClick={() => handleFaqRating(1, 'yes')} className="btn btn-sm btn-success ms-2">Yes</button>
                                    <button onClick={() => handleFaqRating(1, 'no')} className="btn btn-sm btn-danger ms-2">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                How can I contact support?
                            </button>
                        </h2>
                        <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                You can contact support by filling out the contact form below or by using our live chat feature available on this page.
                                <div className="mt-2">
                                    <span>Was this helpful?</span>
                                    <button onClick={() => handleFaqRating(2, 'yes')} className="btn btn-sm btn-success ms-2">Yes</button>
                                    <button onClick={() => handleFaqRating(2, 'no')} className="btn btn-sm btn-danger ms-2">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeading3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                                Can I delete a message already sent on VentureNexus?
                            </button>
                        </h2>
                        <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, you can delete messages sent by you. Visit the inbox page of the introduced member, identify the message that you want to delete, and click on the red "X" icon on the top right corner of the message. Confirm the deletion by clicking on the "Delete message" prompt.
                                <div className="mt-2">
                                    <span>Was this helpful?</span>
                                    <button onClick={() => handleFaqRating(3, 'yes')} className="btn btn-sm btn-success ms-2">Yes</button>
                                    <button onClick={() => handleFaqRating(3, 'no')} className="btn btn-sm btn-danger ms-2">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add more FAQs as needed */}
                </div>
                <div className="mt-5">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="mt-5">
                    <h2>Helpful Resources</h2>
                    <ul>
                        <li><Link to="#!">User Guide</Link></li>
                        <li><Link to="#!">Video Tutorials</Link></li>
                        <li><Link to="#!">Community Forums</Link></li>
                        <li><Link to="#!">Support Documentation</Link></li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h2>Recent Articles</h2>
                    <ul>
                        <li><Link to="#!">New Features in the Latest Update</Link></li>
                        <li><Link to="#!">How to Maximize Your Use of the Platform</Link></li>
                        <li><Link to="#!">Tips and Tricks for Advanced Users</Link></li>
                    </ul>
                </div>
                {/* Add your live chat widget integration here */}
            </div>

        </div>

    );
};

export default NeedHelp;

