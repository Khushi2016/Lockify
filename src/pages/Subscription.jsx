
import axios from "axios";
import React from "react";

function Subscription() {
    
  const handlePayment = async (e) => {
    e.preventDefault();

    // if (facilities.length === 0) {
    //   alert("Please select at least one facility");
    //   return;
    // }

    try {
      // 1️⃣ Create Order
      const orderRes = await axios.post(`http://localhost:3000/payment/create-order`, {
        amount: 500,
      });

      const { id: order_id, amount, currency } = orderRes.data.order;

      const options = {
        key: "rzp_test_PvM4GxK9MYlCUc",
        amount,
        currency,
        name: "Lockify",
        description: "Subscription Payment",
        order_id,

        handler: async function (response) {
          try {
            // 2️⃣ Verify Payment
            const verifyRes = await axios.post(
              `http://localhost:3000/payment/verify-payment`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: 500,
                // facilities,
                userId: JSON.parse(localStorage.getItem("User"))._id,
              }
            );

            if (verifyRes.data.status) {
              alert("✅ Payment Successful");
              navigate("/");
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (err) {
            console.error(err);
            alert("Server error during verification");
          }
        },

        prefill: {
          name: "User",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Unable to initiate payment");
    }
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>
                  Subscription
                  <br />
                </h1>

                <p className="mb-0">
                  Unlock a more powerful Lockify experience with premium
                  features designed to keep your passwords, websites, and
                  important documents organized and secure.
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
                Subscription
                <br />
              </li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Subscription Introduction */}
      <section className="section about-lockify">
        <div className="container">

          <div
            className="row justify-content-center text-center"
            data-aos="fade-up"
          >
            <div className="col-lg-8">
              <div className="section-title">
                <h2>LOCKIFY PREMIUM</h2>
                <p>Security Made Easier</p>
              </div>

              <p>
                Keep your digital credentials organized and protected with
                Lockify. Upgrade your experience and get access to features
                that make managing your digital information simpler,
                faster, and more convenient.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row gy-4 mt-3">

            {/* Secure Vault */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="about-security-card text-center">
                <i className="bi bi-shield-lock" />

                <h4>Secure Vault</h4>

                <p>
                  Keep your website credentials organized inside your
                  personal Lockify vault.
                </p>
              </div>
            </div>

            {/* Website Management */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="about-security-card text-center">
                <i className="bi bi-globe2" />

                <h4>Website Management</h4>

                <p>
                  Easily add, view, update, and manage your saved website
                  credentials from one place.
                </p>
              </div>
            </div>

            {/* Document Storage */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="about-security-card text-center">
                <i className="bi bi-file-earmark-lock" />

                <h4>Document Storage</h4>

                <p>
                  Organize your important documents and keep everything
                  accessible from your Lockify account.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subscription Plan */}
      <section className="section">
        <div className="container">

          <div
            className="row justify-content-center"
            data-aos="fade-up"
          >
            <div className="col-lg-6">

              <div className="subscription-card text-center">

                <div className="subscription-icon">
                  <i className="bi bi-stars" />
                </div>

                <h3>Lockify Premium</h3>

                <p>
                  Get access to premium features and manage your digital
                  information with ease.
                </p>

                <div className="subscription-price">
                  <span>₹</span>
                  <h2>499</h2>
                  <span>/ year</span>
                </div>

                <ul className="subscription-features">
                  <li>
                    <i className="bi bi-check-circle" />
                    Secure password management
                  </li>

                  <li>
                    <i className="bi bi-check-circle" />
                    Website credential management
                  </li>

                  <li>
                    <i className="bi bi-check-circle" />
                    Document management
                  </li>

                  <li>
                    <i className="bi bi-check-circle" />
                    Easy access from your dashboard
                  </li>
                </ul>

                <button className="subscription-btn" onClick={handlePayment}>
                  Subscribe Now
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Subscription


// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Subscription() {
//   const [facilities, setFacilities] = useState([]);
//   const navigate = useNavigate();

//   const availableFacilities = [
//     {
//       id: "documents",
//       label:
//         "Securely store and manage all your important documents in one place with easy access and full control over your files.",
//       price: 199,
//     },
//     {
//       id: "website",
//       label:
//         "Store and manage your website usernames and passwords safely, with optional encryption for added security.",
//       price: 149,
//     },
//     {
//       id: "encryption",
//       label:
//         "Protect sensitive data by enabling encryption for your stored documents and credentials, ensuring maximum privacy and security.",
//       price: 99,
//     },
//   ];

//   const totalPrice = facilities.reduce((total, selectedId) => {
//     const facility = availableFacilities.find(f => f.id === selectedId);
//     return total + (facility ? facility.price : 0);
//   }, 0);
  

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setFacilities([...facilities, value]);
//     } else {
//       setFacilities(facilities.filter((f) => f !== value));
//     }
//   };
//   const apiUrl = import.meta.env.VITE_API_URL;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Selected Facilities:", facilities);
//     // handle form submission
//     navigate("/");
//   };
  
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (facilities.length === 0) {
//       alert("Please select at least one facility");
//       return;
//     }

//     try {
//       // 1️⃣ Create Order
//       const orderRes = await axios.post(`${apiUrl}/payments/create-order`, {
//         amount: totalPrice,
//       });

//       const { id: order_id, amount, currency } = orderRes.data.order;

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         amount,
//         currency,
//         name: "Lockify",
//         description: "Subscription Payment",
//         order_id,

//         handler: async function (response) {
//           try {
//             // 2️⃣ Verify Payment
//             const verifyRes = await axios.post(
//               `${apiUrl}/payments/verify-payment`,
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//                 amount: totalPrice,
//                 facilities,
//                 userId: JSON.parse(localStorage.getItem("user"))._id,
//               }
//             );

//             if (verifyRes.data.status) {
//               alert("✅ Payment Successful");
//               navigate("/");
//             } else {
//               alert("❌ Payment Verification Failed");
//             }
//           } catch (err) {
//             console.error(err);
//             alert("Server error during verification");
//           }
//         },

//         prefill: {
//           name: "User",
//           email: "user@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to initiate payment");
//     }
//   };

//   return (
//     <section id="contact" className="contact section">
//       <div className="page-title" data-aos="fade">
//         <div className="heading">
//           <div className="container">
//             <div className="row d-flex justify-content-center text-center">
//               <div className="col-lg-8">
//                 <h1>
//                   Subscriptions
//                   <br />
//                 </h1>
//                 <p className="mb-0">
//                   Odio et unde deleniti. Deserunt numquam exercitationem.
//                   Officiis quo odio sint voluptas consequatur ut a odio
//                   voluptatem. Sit dolorum debitis veritatis natus dolores.
//                   Quasi ratione sint. Sit quaerat ipsum dolorem.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <nav className="breadcrumbs">
//           <div className="container">
//             <ol>
//               <li>
//                 <a href="index.html">Home</a>
//               </li>
//               <li className="current">
//                 Subscription
//                 <br />
//               </li>
//             </ol>
//           </div>
//         </nav>
//       </div>

//       <div className="container p-5" data-aos="fade-up" data-aos-delay={100}>
//         <div className="row gy-4">
//           <div className="col-lg-8 mx-auto card p-4">
//             <h3 className="text-center fw-bold pb-3 form-title">
//               Subscription Facilities
//             </h3>
//             <form
//               className="php-email-form"
//               data-aos="fade-up"
//               data-aos-delay={200}
//               onSubmit={handlePayment}
//             >
//               <div className="row gy-4">
//                 {/* Checkbox list for facilities */}
//                 {availableFacilities.map((facility) => (
//                   <div className="col-md-12" key={facility.id}>
//                     <label>
//                       <input
//                       required
//                         type="checkbox"
//                         value={facility.id}
//                         checked={facilities.includes(facility.id)}
//                         onChange={handleCheckboxChange}
//                       />{" "}
//                       {facility.label}
//                     </label>
//                   </div>
//                 ))}

// {facilities.length > 0 && (
//   <div className="col-md-12">
//     <div className="pricing-summary">
//       <h5>Subscription Summary</h5>

//       <ul>
//         {facilities.map((id) => {
//           const item = availableFacilities.find(f => f.id === id);
//           return (
//             <li key={id}>
//               <span>{item.label.slice(0, 60)}...</span>
//               <strong>₹{item.price}</strong>
//             </li>
//           );
//         })}
//       </ul>

//       <div className="total-price">
//         Total Amount: <span>₹{totalPrice}</span>
//       </div>
//     </div>
//   </div>
// )}



//                 <div className="col-md-12 text-center">
//                   <div className="loading">Loading</div>
//                   <div className="error-message" />
//                   <div className="sent-message">
//                     Your message has been sent. Thank you!
//                   </div>
//                   <button type="submit">Subscribe</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Subscription;