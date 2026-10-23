import React, { useEffect, useState } from 'react'
import Course1 from "../assets/assets/img/course-1.jpg"
import Trainer12 from "../assets/assets/img/trainers/trainer-1-2.jpg"
import Course2 from "../assets/assets/img/course-2.jpg"
import Trainer22 from "../assets/assets/img/trainers/trainer-2-2.jpg"
import Course3 from "../assets/assets/img/course-3.jpg"
import Trainer32 from "../assets/assets/img/trainers/trainer-3-2.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllDocument() {
  const [documents,setDocuments] = useState([])
  const navigate = useNavigate();

  async function handleGetDocuments(){
    try{
      const res = await axios.get("http://localhost:3000/document/",{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res)
      setDocuments(res.data);
    }catch(err){
      console.log(err);
    }
  }

  async function handleDeleteDocument(e,delId){
    e.preventDefault();
    try{
      const res = await axios.delete(`http://localhost:3000/document/delete/${delId}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res)
      handleGetDocuments();
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    handleGetDocuments();
  },[])
    return (
        <>
        <div className="page-title" data-aos="fade">
  <div className="heading">
    <div className="container">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <h1>
            All Documents
            <br />
          </h1>
          <p className="mb-0">
            View and manage all your uploaded documents in one place. Easily access your documents, update their details, or delete them whenever needed.
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
          All Documents
          <br />
        </li>
      </ol>
    </div>
  </nav>
</div>
<section id="courses" className="courses section">
    <div className="container">
      <div className="row">

        {documents.map((document)=>(
        <>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          // data-aos="zoom-in"
          // data-aos-delay={100}
        >
          <div className="course-item">
            <img
              src={`http://localhost:3000/uploads/${document.image}`}
              className="img-fluid"
              alt="..."
              style={{height: "300px",width: "100%"}}
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">{document.title}</p>
                {/* <p className="price">$169</p> */}
              </div>
              <h3>
                <a href="course-details.html">{document.description}</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>

              <div className="website-actions">
                <button className="update-btn" onClick={()=>navigate("/update-document",{state:{document}})}>Update</button>
                <button className="delete-btn" onClick={(e)=>handleDeleteDocument(e,document._id)}>Delete</button>
              </div>

            </div>
          </div>
        </div>{" "}
        </>
        ))}

        {/* End Course Item*/}
        {/* <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <div className="course-item">
            <img
              src={Course2}
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">Marketing</p>
                <p className="price">$250</p>
              </div>
              <h3>
                <a href="course-details.html">Search Engine Optimization</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img
                    src={Trainer22}
                    className="img-fluid"
                    alt=""
                  />
                  <a href="" className="trainer-link">
                    Lana
                  </a>
                </div>
                <div className="trainer-rank d-flex align-items-center">
                  <i className="bi bi-person user-icon" />
                  &nbsp;35 &nbsp;&nbsp;
                  <i className="bi bi-heart heart-icon" />
                  &nbsp;42
                </div>
              </div>
            </div>
          </div>
        </div>{" "} */}
        {/* End Course Item*/}
        {/* <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <div className="course-item">
            <img
              src={Course3}
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">Content</p>
                <p className="price">$180</p>
              </div>
              <h3>
                <a href="course-details.html">Copywriting</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
            
            </div>
          </div>
        </div>{" "} */}
        
        {/* End Course Item*/}
      </div>
    </div>
  </section>
        </>
    )
}

export default AllDocument
