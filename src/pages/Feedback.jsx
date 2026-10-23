import axios from 'axios';
import React, { useState } from 'react'
import * as Yup from 'yup';

function Feedback() {
    const [form, setForm] = useState({
        rating: "",
        message: ""
    });

    const validationSchema = Yup.object({
        rating: Yup.string().rating('Invalid email format').required('Email is required'),
        message: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/feedback/create",form,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res);
      setForm({
        rating: "",
        message: ""
      })
    //   localStorage.setItem("token",res.data.token)
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
                                    Feedback
                                    <br />
                                </h1>
                                <p className="mb-0">
                                    Your feedback helps us improve Lockify. Share your experience, suggestions, or ideas and help us make Lockify more secure, simple, and convenient for everyone.
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
                                Feedback
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
                                        <label className='w-25'>Rating:</label>
                                        <input
                                            type="number"
                                            name="rating"
                                            className="form-control"
                                            placeholder="Your rating"
                                            required=""
                                            value={form.rating}
                                            onChange={(e)=>setForm({...form,rating: e.target.value})}
                                        />
                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <label className='w-25'>Comment: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="message"
                                            placeholder="Your suggestions"
                                            required=""
                                            value={form.message}
                                            onChange={(e)=>setForm({...form,message: e.target.value})}
                                        />
                                    </div>


                                    <div className="col-md-12 text-center">

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

export default Feedback
