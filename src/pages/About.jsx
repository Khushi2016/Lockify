import React from 'react'
import About2 from "../assets/assets/img/about-2.jpg"
function About() {
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>
                  About Us
                  <br />
                </h1>
                <p className="mb-0">
                  Lockify is a secure password manager designed to help you
                  store, organize, and manage your passwords safely in one
                  convenient place.
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
                About Us
                <br />
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="about-us" className="section about ">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img src={About2} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h3>Your Digital Security Starts With One Secure Vault</h3>
              <p className="fst-italic">
                Remembering dozens of passwords should not mean compromising
                your online security. Lockify gives you a simple and secure
                way to manage all your credentials.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Keep your passwords securely organized in one protected vault.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Create strong and unique passwords to improve the security of your online accounts.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Access and manage your credentials easily while keeping your sensitive information protected.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-lockify">
        <div className="container">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8" data-aos="fade-up">
              <div className="section-title">
                <h2>WHY LOCKIFY?</h2>
                <p>Security Should Be Simple</p>
              </div>

              <p>
                In today's digital world, managing multiple passwords can
                become difficult and risky. Lockify helps you simplify password
                management by giving you one secure place to store and organize
                your important credentials.
              </p>
            </div>

          </div>

          <div className="row gy-4 mt-3">

            {/* Security */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="about-security-card">
                <i className="bi bi-shield-lock" />

                <h4>Security First</h4>

                <p>
                  Your credentials are treated as sensitive information and
                  organized inside a secure password vault.
                </p>
              </div>
            </div>

            {/* Simplicity */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="about-security-card">
                <i className="bi bi-lightning-charge" />

                <h4>Simple & Fast</h4>

                <p>
                  Easily add, search, update, and manage your passwords from
                  one convenient dashboard.
                </p>
              </div>
            </div>

            {/* Password Strength */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="about-security-card">
                <i className="bi bi-key-fill" />

                <h4>Stronger Passwords</h4>

                <p>
                  Generate and manage strong passwords to help improve the
                  protection of your online accounts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default About
