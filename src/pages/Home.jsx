import React from 'react'
import Hero from "../assets/assets/img/hero-bg.jpg"
import About from "../assets/assets/img/about1.jpg"
import Course1 from "../assets/assets/img/course-1.jpg"
import Trainer12 from "../assets/assets/img/trainers/trainer-1-2.jpg"
import Course2 from "../assets/assets/img/course-2.jpg"
import Trainer22 from "../assets/assets/img/trainers/trainer-2-2.jpg"
import Course3 from "../assets/assets/img/course-3.jpg"
import Trainer32 from "../assets/assets/img/trainers/trainer-3-2.jpg"
import Trainer1 from "../assets/assets/img/trainers/trainer-1.jpg"
import Trainer2 from "../assets/assets/img/trainers/trainer-2.jpg"
import Trainer3 from "../assets/assets/img/trainers/trainer-3.jpg"
function Home() {
    return (
        <>

            <>
                <section id="hero" className="hero section dark-background">
                    <img src={Hero} alt="" data-aos="fade-in" />
                    <div className="container">
                        <h2 data-aos="fade-up" data-aos-delay={100}>
                        Your Passwords.
                        <br />
                        Locked. Safe. Always Accessible.
                        </h2>

                        <p data-aos="fade-up" data-aos-delay={200}>
                        Lockify is your secure password manager that keeps all your passwords
                        protected in one encrypted vault.
                        </p>

                        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
                        <a href="#features" className="btn-get-started">
                            Get Started
                        </a>
                        </div>
                    </div>
                </section>
                {/* /Hero Section */}
                {/* About Section */}
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row gy-4">
                            <div
                                className="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <img src={About} className="img-fluid" alt="" />
                            </div>
                            <div
                                className="col-lg-6 order-2 order-lg-1 content"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <h3>Your Digital Security Starts With Lockify</h3>
                                <p className="fst-italic">
                                   Managing multiple passwords should not be stressful or insecure.
                                   Lockify gives you one secure place to store, manage, and protect
                                   all your important credentials.
                                </p>
                               <ul>
                                <li>
                                    <i className="bi bi-check-circle" />
                                    <span>
                                    Store all your passwords securely in one encrypted vault.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle" />
                                    <span>
                                    Generate strong and unique passwords for every account.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle" />
                                    <span>
                                    Access your credentials quickly while keeping your sensitive
                                    information protected.
                                    </span>
                                </li>
                                </ul>
                                <a href="#" className="read-more">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /About Section */}
                {/* Counts Section */}
                <section id="counts" className="section counts light-background">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span className="purecounter">100%</span>
                                <p>Encrypted Storage</p>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span className="purecounter">24/7</span>
                                <p>Secure Access</p>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span className="purecounter">∞</span>
                                <p>Passwords Managed</p>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span className="purecounter">1</span>
                                <p>Secure Vault</p>
                            </div>
                            </div>
                            {/* End Stats Item */}
                        </div>
                    </div>
                </section>
                {/* /Counts Section */}
                {/* Why Us Section */}
                <section id="why-us" className="section why-us">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="why-box">
                                    <h3>Why Choose Lockify?</h3>
                                    <p>
                                        Weak and reused passwords are one of the biggest threats to your
                                        online security. Lockify helps you manage your credentials safely
                                        and gives you the tools needed to create stronger digital security.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn">
                                            <span>Learn More</span> <i className="bi bi-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Why Box */}
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="col-xl-4">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-shield-lock" />
                                            <h4>Secure Password Vault</h4>
                                            <p>
                                                 Store all your passwords securely in one protected and encrypted location.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-key" />
                                            <h4>Strong Password Generator</h4>
                                            <p>
                                                Create strong, unique and difficult-to-guess passwords for all your accounts.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-shield-check" />
                                            <h4>Advanced Security</h4>
                                            <p>
                                                 Keep your sensitive credentials protected with secure authentication and encryption.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Why Us Section */}
                {/* Features Section */}
                <section id="features" className="features section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>FEATURES</h2>
                        <p>Everything You Need to Stay Secure</p>
                    </div>

                    <div className="container">
                        <div className="row gy-4">

                            {/* Secure Vault */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="features-item">
                                    <i className="bi bi-shield-lock feature-icon" />
                                    <h3>Secure Vault</h3>
                                </div>
                            </div>

                            {/* Password Generator */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="features-item">
                                    <i className="bi bi-key feature-icon" />
                                    <h3>Password Generator</h3>
                                </div>
                            </div>

                            {/* Advanced Encryption */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="features-item">
                                    <i className="bi bi-lock-fill feature-icon" />
                                    <h3>Encryption</h3>
                                </div>
                            </div>

                            {/* Show & Hide Passwords */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <div className="features-item">
                                    <i className="bi bi-eye-slash feature-icon" />
                                    <h3>Show & Hide Passwords</h3>
                                </div>
                            </div>

                            {/* Credential Manager */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={500}
                            >
                                <div className="features-item">
                                    <i className="bi bi-clipboard-check feature-icon" />
                                    <h3>Credential Manager</h3>
                                </div>
                            </div>

                            {/* Quick Search */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={600}
                            >
                                <div className="features-item">
                                    <i className="bi bi-search feature-icon" />
                                    <h3>Quick Search</h3>
                                </div>
                            </div>

                            {/* Strength Checker */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={700}
                            >
                                <div className="features-item">
                                    <i className="bi bi-bar-chart-line feature-icon" />
                                    <h3>Strength Checker</h3>
                                </div>
                            </div>

                            {/* Password Organization */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <div className="features-item">
                                    <i className="bi bi-folder feature-icon" />
                                    <h3>Password Organizer</h3>
                                </div>
                            </div>

                            {/* Secure Quick Copy */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={900}
                            >
                                <div className="features-item">
                                    <i className="bi bi-copy feature-icon" />
                                    <h3>Secure Quick Copy</h3>
                                </div>
                            </div>

                            {/* Secure Login */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={1000}
                            >
                                <div className="features-item">
                                    <i className="bi bi-fingerprint feature-icon" />
                                    <h3>Secure Login</h3>
                                </div>
                            </div>

                            {/* Password Updates */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={1100}
                            >
                                <div className="features-item">
                                    <i className="bi bi-arrow-repeat feature-icon" />
                                    <h3>Password Updates</h3>
                                </div>
                            </div>

                            {/* Access Anywhere */}
                            <div
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={1200}
                            >
                                <div className="features-item">
                                    <i className="bi bi-phone feature-icon" />
                                    <h3>Access Anywhere</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* /Features Section */}
                {/* /Features Section */}
                {/* /Features Section */}
                {/* Courses Section */}
               
                {/* /Courses Section */}
                {/* Trainers Index Section */}
                <section id="trainers-index" className="section trainers-index">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="member">
                                    <img
                                        src={Trainer1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                                            veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="member">
                                    <img
                                        src={Trainer2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas
                                            repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="member">
                                    <img
                                        src={Trainer3}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                                            qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Home
