import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function ViewPassword() {
  const [form, setForm] = useState({
    
  });
  const [submitted,setSubmitted] = useState(false);
  const [profilePassword,setProfilePassword] = useState("");

  const location=useLocation();
  const navigate = useNavigate();
  console.log(location.state.website);

  useEffect(()=>{
    if(location.state.website){
      setForm(location.state.website);
    }
  },[location.state])

//    const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try{
        const password = JSON.parse(localStorage.getItem("User")).profilePassword;
     if(profilePassword === password){
        setSubmitted(true)
     }
    //   navigate("/all-website");
    }catch(e){
      console.log(e);
    }
    
  }
    return (
        <>
        <div className="page-title" data-aos="fade">
  <div className="heading">
    <div className="container">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <h1>
           View Password
            <br />
          </h1>
          <p className="mb-0">
            Securely save your website credentials in one place. Add a website name, username, and password to easily manage your accounts whenever you need them.
          </p>
        </div>
      </div>
    </div>
  </div>
  <nav className="breadcrumbs">
    <div className="container">
      <ol>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="current">
          View Password
          <br />
        </li>
      </ol>
    </div>
  </nav>
</div>
<section id="contact" className="contact section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4  d-flex justify-content-center">
        <div className="col-lg-8">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row gy-4">
              
              
              <div className="col-md-12 d-flex align-items-center">
                <label className='w-25'>Profile Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="profilepassword"
                  placeholder="Enter Your profile Password"
                  required=""
                  value={profilePassword}
                  onChange={(e)=>setProfilePassword(e.target.value)}
                />
              </div>
              
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit" onClick={handleSubmit}> Submit </button>
              </div>
            </div>
          </form>
        </div>
        {submitted ? <h2 style={{textAlign: "center"}}>{form.password}</h2> : <></>}
        {/* End Contact Form */}
      </div>
    </div>
  </section>
        </>
    )
}

export default ViewPassword
