import { format } from 'date-fns/esm';
import React from 'react';
import icon from './../../assets/1234347.png'
import { FaUserAlt, FaShareAltSquare } from 'react-icons/fa'


const Request = () => {
    return (
        <div style={{ minHeight: "600px" }}>
            <div className='container mt-3'>
                <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>

                    <div className="form-outline col-md-3 w-20">
                        <input
                            type="search" id="form1" className="form-control w-20 mt-1" placeholder='Search by age' required />
                    </div>
                    <div className='col-md-3 w-20'>
                        <select className='form-control w-20 mt-1' defaultValue={`choose`} required>
                            <option value="choose" disabled>Choose your blood group</option>
                            <option value='all'>All</option>
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='O+'>O+</option>
                            <option value='0-'>0-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                        </select>
                    </div>
                    <div className='col-md-3 w-20'>
                        <button className='btn w-100 mt-1 btn btn-dark'>FILTER</button>
                    </div>
                </div>
            </div>
            <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img src={icon} alt="" height='50px' />
                                <div className="ms-3">
                                    <h4>Blood Request</h4>
                                    <h5><span className='fw-bold'>Fullfilled</span>: <span className="">Samorita Hospital Ltd, Bangladesh</span></h5>
                                </div>
                            </div>
                            <div>
                                <span style={{ color: 'gray' }}>
                                    {format(new Date(), 'PP')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.853163174084!2d90.3829998149814!3d23.752615084588317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a514c7d865%3A0xd3461d0dab3c46f9!2z4Ka24Kau4Kaw4Ka_4Kak4Ka-IOCmueCmvuCmuOCmquCmvuCmpOCmvuCmsiDgprLgpr_gpoM!5e0!3m2!1sen!2sbd!4v1653048743026!5m2!1sen!2sbd" width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center w-50">
                                <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                                <div className="ms-3">
                                    <h2>Shaiful Islam</h2>
                                    <h5>017324234xxxx</h5>
                                </div>
                            </div>
                            <div className="w-50 d-flex justify-content-end align-items-center">
                                <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                    </div>
                </div>
            </div>
            <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img src={icon} alt="" height='50px' />
                                <div className="ms-3">
                                    <h4>Blood Request</h4>
                                    <h5><span className='fw-bold'>Fullfilled</span>: <span className="">Islami Bank Central Hospital, Kakrail, VIP Road, Dhaka</span></h5>
                                </div>
                            </div>
                            <div>
                                <span style={{ color: 'gray' }}>
                                    {format(new Date(), 'PP')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.27498534456!2d90.40749491429668!3d23.737571495184746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f4de15d5eb%3A0x35df10409c6ffeef!2sIslami%20Bank%20Central%20Hospital%2C%20Kakrail!5e0!3m2!1sen!2sbd!4v1653048807445!5m2!1sen!2sbd" width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center w-50">
                                <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                                <div className="ms-3">
                                    <h2>Shaiful Islam</h2>
                                    <h5>017324234xxxx</h5>
                                </div>
                            </div>
                            <div className="w-50 d-flex justify-content-end align-items-center">
                                <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                    </div>
                </div>
            </div>
            <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img src={icon} alt="" height='50px' />
                                <div className="ms-3">
                                    <h4>Blood Request</h4>
                                    <h5><span className='fw-bold'>Fullfilled</span>: <span className="">The Barakah General Hospital Limited</span></h5>
                                </div>
                            </div>
                            <div>
                                <span style={{ color: 'gray' }}>
                                    {format(new Date(), 'PP')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58436.34670063341!2d90.37466386932668!3d23.73768980965851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8670e9ba103%3A0xb6b35c09f04c84dd!2sThe%20Barakah%20General%20Hospital%20Limited!5e0!3m2!1sen!2sbd!4v1653049149471!5m2!1sen!2sbd" width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center w-50">
                                <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                                <div className="ms-3">
                                    <h2>Shaiful Islam</h2>
                                    <h5>017324234xxxx</h5>
                                </div>
                            </div>
                            <div className="w-50 d-flex justify-content-end align-items-center">
                                <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                    </div>
                </div>
            </div>
            <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img src={icon} alt="" height='50px' />
                                <div className="ms-3">
                                    <h4>Blood Request</h4>
                                    <h5><span className='fw-bold'>Fullfilled</span>: <span className="">Al-Baraka Model Hospital</span></h5>
                                </div>
                            </div>
                            <div>
                                <span style={{ color: 'gray' }}>
                                    {format(new Date(), 'PP')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58436.34670063341!2d90.37466386932668!3d23.73768980965851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b917426b19d9%3A0x2d9e7720adc5b470!2sAl-Baraka%20Model%20Hospital!5e0!3m2!1sen!2sbd!4v1653049341197!5m2!1sen!2sbd" width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center w-50">
                                <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                                <div className="ms-3">
                                    <h2>Shaiful Islam</h2>
                                    <h5>017324234xxxx</h5>
                                </div>
                            </div>
                            <div className="w-50 d-flex justify-content-end align-items-center">
                                <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                    </div>
                </div>
            </div>
            <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img src={icon} alt="" height='50px' />
                                <div className="ms-3">
                                    <h4>Blood Request</h4>
                                    <h5><span className='fw-bold'>Fullfilled</span>: <span className="">BIRDEM General Hospital</span></h5>
                                </div>
                            </div>
                            <div>
                                <span style={{ color: 'gray' }}>
                                    {format(new Date(), 'PP')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.474486260124!2d90.38817197084425!3d23.738917874624782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8eb2cd9b849%3A0x7c213c924dd2d324!2sBIRDEM%20General%20Hospital!5e0!3m2!1sen!2sbd!4v1653049465146!5m2!1sen!2sbd" width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center w-50">
                                <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                                <div className="ms-3">
                                    <h2>Shaiful Islam</h2>
                                    <h5>017324234xxxx</h5>
                                </div>
                            </div>
                            <div className="w-50 d-flex justify-content-end align-items-center">
                                <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;