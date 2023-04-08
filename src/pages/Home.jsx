import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import UserModal from "../components/UserModal";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //data fetching for section 2 home page
  const postData = [
    {
      image:
        "https://images.unsplash.com/photo-1679678691006-d8a1484830c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "How much Water You Drink!!!",
      description:
        "Drinking water is water that is used in drink or food preparation; potable water is water that is safe to be used as drinking water. The amount of drinking water required to maintain good health varies, and depends on physical activity level, age, health-related issues, and environmental conditions",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1680363470818-109de6810729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "How Beautiful is Tokio...",
      description:
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1680266194753-0cf288bf7b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Toxic Life nothing..",
      description:
        "Drug addiction, also called substance use disorder, is a disease that affects a person's brain and behavior and leads to an inability to control the use of a legal or illegal drug or medicine. Substances such as alcohol, marijuana and nicotine also are considered drugs. When you're addicted, you may continue using the drug despite the harm it causes.",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Pets are Best...",
      description:
        "Nothing compares to the joy of coming home to a loyal companion. The unconditional love of a pet can do more than keep you company. Pets may also decrease stress, improve heart health, and even help children with their emotional and social skills.An estimated 68% of U.S. households have a pet. But who benefits from an animal? And which type of pet brings health benefits? Over the past 10 years, NIH has partnered with the Mars Corporation’s WALTHAM Centre for Pet Nutrition to answer questions like these by funding research studies.",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1680330386302-64bdc5d35d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Beach Side view is Best...",
      description:
        "Beachside Getaway works with thorough housekeeping companies like DustAway Cleaning Services that will get your rental in tiptop shape. DustAway owner Eric Esquivel said, “It is really vital to the rental to do a deep clean and spring is a good time to do one. Otherwise, the property will fall behind.” Esquivel added, “And do not forget your grill. A deep clean maintains the quality of the grill and is important for fire safety.” Other areas of focus include your linens, like beach towels and bedding, your area rugs and flooring which have a lot of sandy feet traffic, and couch cushions, especially underneath them.",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1680038485864-5fdb952ae30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Long Bars are so high.",
      description:
        "What is the RCC column cost per sq ft in India including its footing, hi guys in this article we know about RCC column cost per square feet in India including its footing, for cost calculation of RCC pillar we require material cost,labour cost and suttering cost.RCC column construction the general grade of concrete is M20 are used in which nominal mix of cement sand and aggregate are in ratio 1:1.5:3 in which cement is one part, sand is 1.5 part and aggregate is 3 part. Steel that are used in RCC column considering 12mm and 16 mm and ring that are used is 8mm.",
      tags: ["Mobile", "Discovery"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1680122575933-d6e81ac79d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",
      title: "Golden old Days",
      description:
        "My junior high English teacher laughed involuntarily when one of my classmates teased, “Don’t you wish you were our age again, Mr Harvey?”He was a polite man but he laughed at her comment for a long time. “This may surprise you,” he said when he was able to speak again, “but no grownup wants to be fourteen again. I’d go back to twenty-five in a heartbeat, but not fourteen.”My fourteen-year-old brain found it interesting that Mr Harvey did have a preferred age, and that it was somewhere between fourteen and his current age (late forties, I guessed). It meant there must be some important quality that disappears after a certain time and then you want it back.",
      tags: ["Mobile", "Discovery"],
    },
  ];
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-size">
            <Navbar color={"#0000"} handleShow={handleShow} />
            <Hero />
          </div>
        </div>
      </section>
      <section className="posts-section" id="posts">
        <div className="container" id="gallery">
          {postData.map((el) => (
            <Link className="a-tag" to={"/single-post"}>
              <Post data={el} />
            </Link>
          ))}
        </div>
      </section>
      {/* modal for post  */}
      <section className="create-post-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="create-post">
                <Link to="/create_post">
                  <button>Create Your Story</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <UserModal show={show} handleClose={handleClose} />
      {/* <!--Mobile Menu Modal Start --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content myModalContent">
            <div className="modal-header myModalHeader">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Site Navigation
              </h1>
              <button
                type="button"
                className="btn-close myBtnClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Post</li>
                <li>Category</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Mobile Menu Modal End --> */}
    </main>
  );
};

export default Home;
