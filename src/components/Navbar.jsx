import React from "react";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <header className="mainHeader" style={{ backgroundColor: props.color }}>
        <div className="container">
          <div className="row header-margin">
            <div className="col-lg-3 d-lg-block d-md-none d-sm-none">
              <div className="nav-social">
                <TfiFacebook />
                <TfiTwitterAlt />
                <ImInstagram />
              </div>
            </div>
            <div className="col-2 col-md-3 d-lg-none">
              <div className="mobileMenu">
                {/* <!-- Button trigger modal --> */}
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <img src="/images/menu.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-8 col-md-6 col-lg-6">
              <div className="nav-logo">
                <Link className="a-tag" to={"/"}>
                  <img
                    src="https://preview.colorlib.com/theme/philosophy/images/logo.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-2 col-md-3 col-lg-2">
              <div className="nav-search">
                <p>Search</p>
                <GoSearch className="search-logo" />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="nav-user">
                <img src="/images/user.png" alt="" onClick={props.handleShow}/>
                <h6>hi Babu</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-menu">
                <ul>
                  <Link className="a-tag" to={"/"}>
                    <li>Home</li>
                  </Link>
                  <li>Blog</li>
                  <li>Contact</li>
                  <Link className="a-tag" to={"/create_post"}>
                    <li>Create Post</li>
                  </Link>
                  <li>Category</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
