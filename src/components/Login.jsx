import { Navigate } from "react-router-dom";
import '../js/scripts.js';

const Login = ({ auth, handleLogin, userManager }) => {
  return (
    <div>
      {auth === null && <div>Loading...</div>}
      {auth === false && (
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
                      <div class="masthead-subheading">Welcome To Our Store!</div>
                      <div class="masthead-heading text-uppercase">Nice To See You</div>
                      {/*replaced button tag with a tag need to see how this affects styling*/}
                      <a button type="button" class="btn btn-primary btn-xl text-uppercase" 
                        onClick={() => {
                          // Perform the authorization request, including the code challenge
                          handleLogin();
                        }}>Login</a>
                  </div>
              </header>
              {/* Services*/}
              <section class="page-section" id="services">
                  <div class="container">
                      <div class="text-center">
                          <h2 class="section-heading text-uppercase">Services</h2>
                          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                      <div class="row text-center">
                          <div class="col-md-4">
                              <span class="fa-stack fa-4x">
                                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 class="my-3">E-Commerce</h4>
                              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                          <div class="col-md-4">
                              <span class="fa-stack fa-4x">
                                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 class="my-3">Responsive Design</h4>
                              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                          <div class="col-md-4">
                              <span class="fa-stack fa-4x">
                                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 class="my-3">Web Security</h4>
                              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                      </div>
                  </div>
              </section>
              {/* About*/}
              <section class="page-section" id="about">
                  <div class="container">
                      <div class="text-center">
                          <h2 class="section-heading text-uppercase">About</h2>
                          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                      <ul class="timeline">
                          <li>
                              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assetsGL/assets/img/about/1.jpg" alt="..." /></div>
                              <div class="timeline-panel">
                                  <div class="timeline-heading">
                                      <h4>2009-2011</h4>
                                      <h4 class="subheading">Our Humble Beginnings</h4>
                                  </div>
                                  <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                              </div>
                          </li>
                          <li class="timeline-inverted">
                              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assetsGL/assets/img/about/2.jpg" alt="..." /></div>
                              <div class="timeline-panel">
                                  <div class="timeline-heading">
                                      <h4>March 2011</h4>
                                      <h4 class="subheading">An Agency is Born</h4>
                                  </div>
                                  <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                              </div>
                          </li>
                          <li>
                              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assetsGL/assets/img/about/3.jpg" alt="..." /></div>
                              <div class="timeline-panel">
                                  <div class="timeline-heading">
                                      <h4>December 2015</h4>
                                      <h4 class="subheading">Transition to Full Service</h4>
                                  </div>
                                  <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                              </div>
                          </li>
                          <li class="timeline-inverted">
                              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assetsGL/assets/img/about/4.jpg" alt="..." /></div>
                              <div class="timeline-panel">
                                  <div class="timeline-heading">
                                      <h4>July 2020</h4>
                                      <h4 class="subheading">Phase Two Expansion</h4>
                                  </div>
                                  <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                              </div>
                          </li>
                          <li class="timeline-inverted">
                              <div class="timeline-image">
                                  <h4>
                                      Be Part
                                      <br />
                                      Of Our
                                      <br />
                                      Story!
                                  </h4>
                              </div>
                          </li>
                      </ul>
                  </div>
              </section>
              {/* Footer*/}
              <footer class="footer py-4">
                  <div class="container">
                      <div class="row align-items-center">
                          <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
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
      )}
      {auth && <Navigate to="/callback" />}
    </div>
  );
};

export default Login;
