import React from "react";

const Hero = () => {
  return (
    <>
      <div className="home-pg-hero-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 myPadding">
              <div className="myCards-left">
                <div className="myCard post-one">
                  <div className="image-overlay"></div>
                  <div className="card-image">
                    <img src="/images/guitar.jpg" alt="" />
                  </div>
                  <div className="card-bottom">
                    <p className="card-category">Music</p>
                    <h1>
                      What Your Music Preference Says About You and Your
                      Personality.
                    </h1>
                    <ul>
                      <li className="post-user-image">
                        <img src="/images/profile.jpg" alt="" />
                      </li>
                      <li className="post-user-name">Babu Nahak</li>
                      <li className="post-date">Dec 29,2014</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 myPadding">
              <div className="myCards-right">
                <div className="myCard post-two">
                  <div className="image-overlay"></div>
                  <div className="card-image">
                    <img src="/images/pomodoro.jpeg" alt="" />
                  </div>
                  <div className="card-bottom">
                    <p className="card-category">Music</p>
                    <h1>The Pomodoro Technique Really Works.</h1>
                    <ul>
                      <li className="post-user-image">
                        <img src="/images/profile.jpg" alt="" />
                      </li>
                      <li className="post-user-name">Babu Nahak</li>
                      <li className="post-date">Dec 29,2014</li>
                    </ul>
                  </div>
                </div>
                <div className="myCard post-two d-md-none d-lg-block display-mob">
                  <div className="image-overlay"></div>
                  <div className="card-image">
                    <img src="/images/old-days.jpg" alt="" />
                  </div>
                  <div className="card-bottom">
                    <p className="card-category">Music</p>
                    <h1>Throwback To The Good Old Days.</h1>
                    <ul>
                      <li className="post-user-image">
                        <img src="/images/profile.jpg" alt="" />
                      </li>
                      <li className="post-user-name">Babu Nahak</li>
                      <li className="post-date">Dec 29,2014</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
