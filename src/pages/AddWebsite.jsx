import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function AddWebsite() {
  const [form, setForm] = useState({
    website_name: "",
    username: "",
    password: ""
  });

   const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/website/create",form,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res);
      setForm({
        website_name: "",
        username: "",
        password: ""
      })
      navigate("/all-website");
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
            Add Website
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
          Add Website
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
                <label className='w-25'>Website Name:</label>
                <input
                  type="text"
                  name="website_name"
                  className="form-control"
                  placeholder="Your Website Name"
                  required=""
                  value={form.website_name}
                  onChange={(e)=>setForm({...form,website_name: e.target.value})}
                />
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <label className='w-25'>Username: </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Your Username"
                  required=""
                  value={form.username}
                  onChange={(e)=>setForm({...form,username: e.target.value})}
                />
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <label className='w-25'>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Your Password"
                  required=""
                  value={form.password}
                  onChange={(e)=>setForm({...form,password: e.target.value})}
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
        {/* End Contact Form */}
      </div>
    </div>
  </section>
        </>
    )
}

export default AddWebsite
