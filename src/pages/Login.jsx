import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Login({loggedin,setLoggedin}) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    })
  async function handleSubmit(values) {
    // e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/user/login",form);
      console.log(res);
      setForm({
        email: "",
        password: ""
      });
      if(res.data.status){

        navigate("/");
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("User",JSON.stringify(res.data.User))
        setLoggedin(true)
      }
    }catch(e){
      console.log(e);
    }
  }

  const formik = useFormik({
      initialValues: {
      email: "",
      password: ""
      },
      validationSchema,
      onSubmit: (values)=>{
        handleSubmit(values);
      }
    })

  return (
    <>
      <>
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Login</h1>
                  <p className="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                    quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                    dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                    quaerat ipsum dolorem.
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
                <li className="current">Login</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* End Google Maps */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">  
              <div className="col-lg-12">
                <form
                  onSubmit={formik.handleSubmit}
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row gy-4">
                    <div className="col-md-12 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                      <div className='text-danger'>*{formik.errors.email}</div>
                    ) : null}
                    </div>
                    <div className="col-md-12 ">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Your Password"
                        required=""
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? (
                    <div className='text-danger'>*{formik.errors.password}</div>
                  ) : null}
                    </div>
                    
                    
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit" onClick={handleSubmit}>Send Message</button>
                    </div>
                    <div className="col-md-12 text-center">
                      <p>Don't Have An Account <Link to={"/register"}>Register</Link></p>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </>

    </>
  )
}

export default Login
