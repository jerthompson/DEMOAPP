import React, { useState } from "react";
import '../js/scripts.js';


const Profile = ({userInfo}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {setModal(!modal)};

  return (
    <div>
        <body id="page-top">
            {/* Navigation*/}
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top"><img src="assetsGL/assets/img/NAPA Bolt_Single Color_Yellow Logo_RGBdigital.svg" alt="..." /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Masthead*/}
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">Welcome, <b>{userInfo.name}</b>!</div>
                    <div class="masthead-heading text-uppercase">Nice To See You, Again</div>
                    {/*replaced button tag with a tag need to see how this affects styling*/}
                    <a type="button" className="btn btn-primary btn-xl text-uppeSrcase"  onClick={toggleModal}>
                    View Profile
                    </a>
                </div>
                </header>  
                {modal && (  
                    //{/* profileModal */}
                    <div class="portfolio-modal modal flex-container fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal1-content flex-container">
                                <div class="close-modal" ><img src="assetsGL/assets/img/close-icon.svg" alt="Close modal" onClick={toggleModal}/></div>
                                <div class="container-fluid flex-container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-9 flex-container">
                                            <div class="modal-body">   
                                                {/* profile details */}
                                                <h2 class="text-uppercase">User Profile</h2>
                                                <p>{userInfo.name}<br></br>{userInfo.email}</p>
                                                <div className="allUserInfo flex-container">
                                                    {Object.keys(userInfo).map(key => (
                                                    <div key={key}>
                                                        <strong>{key}:</strong> {JSON.stringify(userInfo[key])}
                                                    </div>
                                                    ))}
                                            </div>
                                            {/*<img class="img-fluid d-block mx-auto" src="assetsGL/assets/img/portfolio/1.jpg" alt="..." /> */}
                                            
                                            {/* User Details will go here in a two scructured boxes inside the modal one with it pronted and if I am able the 
                                            content as presented in json*/}
                                        </div>    
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                )}
            
            
            {/* Footer*/}
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start">Copyright &copy; Demo 2025</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Bootstrap core JS*/}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS*/}
            <script src="\js\scripts.js"></script>
        </body>
    </div>
  );
};

export default Profile;