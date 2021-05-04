import React from 'react';

const Contacts = () => {
  return (
    <section className="container text-center border rounded p-5 mb-5" style={{ backgroundColor: '#f2f2f2' }}>
      <h1>Contact me</h1>
      <hr />
      <div className="row d-flex align-items-center font-weight-bold">

        <div className="col-md-6">
          <img src="images/logo.png" alt="" className="logo-mini" />
          <p className="contact-text">Shariful Pradhan Hridoy <br/> React Developer</p>
          <address>
            <p className="address browser,support,triablo">
              <i className="fa fa-map-marker"></i>
              Narsingdi Sadar, Narsingdi, Dhaka, Bangladesh
            </p>
            <a href="mailto:yourmail@gmail.com" className="mail text-dark">
              <i className="fa fa-envelope"></i>
              sharifulhridoy01@gmail.com
            </a>
          </address>
        </div>

        <div className="col-md-6 p-5" style={{borderLeft:'1px solid #e4dcdc'}}>
          <form action="#">
            <div className="mb-3">
              <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" name="email" id="email" className="form-control" placeholder="E-mail" />
            </div>
            <div className="mb-3">
              <textarea name="message" id="" cols="30" rows="10" className="form-control"
                placeholder="Your message here"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacts;