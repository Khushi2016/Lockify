import React, { useEffect, useState } from 'react'
import Course1 from "../assets/assets/img/course-1.jpg"
import Trainer12 from "../assets/assets/img/trainers/trainer-1-2.jpg"
import Course2 from "../assets/assets/img/course-2.jpg"
import Trainer22 from "../assets/assets/img/trainers/trainer-2-2.jpg"
import Course3 from "../assets/assets/img/course-3.jpg"
import Trainer32 from "../assets/assets/img/trainers/trainer-3-2.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllWebsite() {
  const [websites,setWebsites] = useState([])
  const [logo,setLogo] = useState(null)
  const navigate = useNavigate();

  // async function handleGetWebsites(){
  //   try{
  //     const res = await axios.get("http://localhost:3000/website/",{
  //       headers:{
  //         Authorization: `Bearer ${localStorage.getItem("token")}`
  //       }
  //     });

      
  // // console.log(response.data.data)
  // // setLogo(response.data.data.url)
  //     console.log(res)
  //     setWebsites(res.data);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }


  
async function handleGetWebsites() {
  try {
    const res = await axios.get("http://localhost:3000/website/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const websitesData = res.data;
    setWebsites(websitesData);

    const websitesWithLogos = await Promise.all(
      websitesData.map(async (website) => {
        try {
          const response = await axios.get(
            `https://api.logo.dev/v2/brands/logo?domain=${website.website_name}.com`,
            {
              headers: {
                Authorization: "Bearer sk_A8QvJnXQRmC1V-Nj-GTegQ"
              }
            }
          );

          return {
            ...website,
            url: response.data.data.url
          };
        } catch (err) {
          console.log(
            `Logo not found for ${website.website_name}`,
            err
          );

          return {
            ...website,
            url: null
          };
        }
      })
    );

    setWebsites(websitesWithLogos);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  handleGetWebsites();
}, []);




  async function handleDeleteWebsite(e,delId){
    e.preventDefault();
    try{
      const res = await axios.delete(`http://localhost:3000/website/delete/${delId}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res)
      handleGetWebsites();
    }catch(err){
      console.log(err);
    }
  }


  async function handleGetLogos(){
    console.log("hello")
     for(let i = 0;i <websites.length;i++){

        const response = await axios.get(
    `https://api.logo.dev/v2/brands/logo?domain=${websites[i].website_name}.com`,{
      headers: {Authorization: "Bearer sk_A8QvJnXQRmC1V-Nj-GTegQ" 
      }
    })
    console.log(response.data.data.url,websites[i])
    setWebsites(websites.map((item,ind)=> ind == i ? {...item,url: response.data.data.url} : item));
      }

  }
  useEffect( ()=>{
    handleGetWebsites();
    handleGetLogos();
   
  },[])

  console.log(websites)
    return (
        <>
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>
                    All Websites
                    <br />
                  </h1>
                  <p className="mb-0">
                    Manage and view all your saved websites in one place. Easily access website details, update your information, or delete websites whenever needed.
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
                  All Websites
                  <br />
                </li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="courses" className="courses section">
            <div className="container">
              <div className="row">

              {websites.map((website)=>(
                
                <>
                 <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch "
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="course-item p-3 mb-2 d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={website.url}
                      className="img-fluid"
                      alt="..."
                      style={{height: "100px",width: "100px"}}
                    />
                    {/* <i className={`fa-brands fa-square-${website.website_name.toLowerCase()}`} style={{color: "rgb(223, 232, 248)",fontSize: "80px",textAlign: "center"}}></i> */}
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="category">{website.username}</p>
                        {/* <p className="price">$169</p> */}
                      </div>
                      <h3>
                        <a href="course-details.html">{website.website_name}</a>
                      </h3>
                      {/* <p className="description">
                        {website.password}
                      </p> */}

                      <div className="website-actions">
                        <button className="update-btn" onClick={()=>navigate("/update-website",{state:{website}})}>Update</button>
                        <button className="delete-btn" onClick={(e)=>handleDeleteWebsite(e,website._id)}>Delete</button>
                        <button className="update-btn" onClick={()=>navigate("/view-password",{state:{website}})}>View</button>
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
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img
                            src={Trainer32}
                            className="img-fluid"
                            alt=""
                          />
                          <a href="" className="trainer-link">
                            Brandon
                          </a>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bi bi-person user-icon" />
                          &nbsp;20 &nbsp;&nbsp;
                          <i className="bi bi-heart heart-icon" />
                          &nbsp;85
                        </div>
                      </div>
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

export default AllWebsite
