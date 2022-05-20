import React from 'react';

const Donate = () => {
    return (
        <div style={{ minHeight: '600px' }} className="d-flex justify-content-center align-items-center">
            <div className="login-container">
                <form>
                    <label className="form-label " htmlFor="form2Example1">Name</label>
                    <input type="text" placeholder="Enter your name" id="form2Example1" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required />
                    <div className="input-group mb-3 my-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                        <select className="form-select" id="inputGroupSelect01" required defaultValue={`choose`}>
                            <option value="choose" disabled>Choose your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div className="input-group mb-3 my-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Blood Group</label>
                        <select className="form-select" id="inputGroupSelect01" required defaultValue={`choose`}>
                            <option value="choose" disabled>Choose your blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="0-">0-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <label className="form-label " htmlFor="form2Example2">Email Address</label>
                    <input type="email" placeholder="Enter your email" id="form2Example2" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required />
                    <label className="form-label " htmlFor="form2Example3">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone" id="form2Example3" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required />
                    <label className="form-label " htmlFor="form2Example4">Age</label>
                    <input type="number" placeholder="Enter your age" id="form2Example4" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required />
                    <label className="form-label " htmlFor="form2Example5">Area</label>
                    <input type="text" placeholder="Enter your area" id="form2Example5" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required />
                    <button style={{ width: '100%' }} className="btn btn-dark d-block mt-3">Donate Now</button>
                </form>
            </div>
        </div>
    );
};

export default Donate;