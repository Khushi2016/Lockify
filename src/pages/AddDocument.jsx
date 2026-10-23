import axios from 'axios';
import React, { useState } from 'react'
import * as Yup from 'yup';

function AddDocument() {
  const [form,setForm] = useState({
    title: "",
    description: ""
  })
  const [image,setImage] = useState(null);

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();

    formData.append("title",form.title);
    formData.append("description",form.description)
    formData.append("image",image);
     try{
      const res = await axios.post("http://localhost:3000/document/create",formData,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res);
      setForm({
       title: "",
       description: ""
      })
      setImage(null);
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
            Add Document
            <br />
          </h1>
          <p className="mb-0">
            Upload and organize your important documents in one place. Add a title and description to easily identify and manage your documents whenever you need them.
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
          Add Document
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
                <label className='w-25'>File :</label>
                <input
                  type="file"
                  name="name"
                  className="form-control"
                  placeholder="Your FIle"
                  required=""
                  onChange={(e)=>setImage(e.target.files[0])}
                />
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <label className='w-25'>Title : </label>
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  placeholder="Your Title"
                  required=""
                  value={form.title}
                  onChange={(e)=>setForm({...form,title: e.target.value})}
                />
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <label className='w-25'>Description : </label>
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="Enter Description"
                  required=""
                  value={form.description}
                  onChange={(e)=>setForm({...form,description: e.target.value})}
                />
              </div>
              
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit"onClick={handleSubmit}> Submit </button>
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

export default AddDocument
