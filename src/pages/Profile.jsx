import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Profile() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    profilePassword: "",
    contact: "",
    description: "",
    address: ""

  });

   const navigate = useNavigate();
   const [image,setImage] = useState(null)

    async function handleGetProfile(){
    try{
      const res = await axios.get("http://localhost:3000/user/view",
        {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
      console.log(res,JSON.parse(localStorage.getItem("User")))
      setForm(res.data);
    }catch(err){
      console.log(err);
    }
  }

   useEffect(()=>{
    handleGetProfile();
  },[])

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",form.name);
    formData.append("email",form.email)
    formData.append("username",form.username);
    formData.append("password",form.password);
    formData.append("profilePassword",form.profilePassword);
    formData.append("contact",form.contact);
    formData.append("description",form.description);
    formData.append("address",form.address);
    formData.append("image",image);
    try{
      const res = await axios.put(`http://localhost:3000/user/update-profile/${JSON.parse(localStorage.getItem("User"))._id}`,formData,{
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
                                    Profile
                                    <br />
                                </h1>
                                <p className="mb-0">
                                    See your Profile details here.
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
                                Profile
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
                                        <label className='w-25'>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required=""
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            required=""
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                                        />
                                    </div>
                                    {/* <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter Your Password"
                                            required=""
                                            value={form.password}
                                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        />
                                    </div> */}
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Profile Password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="profilePassword"
                                            placeholder="Enter Your Profile Password"
                                            required=""
                                            value={form.profilePassword}
                                            onChange={(e) => setForm({ ...form, profilePassword: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Contact: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="number"
                                            placeholder="Enter Your contact"
                                            required=""
                                            value={form.contact}
                                            onChange={(e) => setForm({ ...form, contact: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Description: </label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            placeholder="Enter Description"
                                            required=""
                                            value={form.description}
                                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Address: </label>
                                        <textarea
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter Your Address"
                                            required=""
                                            value={form.address}
                                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Image: </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            placeholder="Enter Your Profile Image"
                                            required=""
                                           onChange={(e)=>setImage(e.target.files[0])}
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

export default Profile
