import React, { useState } from "react";
import Navbar from "../components/Navbar";

const SinglePostPage = () => {
  let [data, saveData] = useState();
  const [post, setPost] = useState({
    title: "Palace of illusion",
    description:
      "This book gives a woman's take on the Mahabharata, the timeless tale among epics of ancient India. Narrated by Panchaali(also known as Draupadi- the wife of the Pandavas), a woman living in a patriarchal world. This novel imprints her life from fiery origin to solitary childhood to bewildered marriage to achieving everything and then losing it all",
    image:
      "https://images.unsplash.com/photo-1598554869714-fffca33c3e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80",
    user: {
      name: "Abhishek Nayak",
    },
    comments: [
      {
        comment: "hello there",
        user: {
          name: "Amit Pallauri",
        },
      },
    ],
  });

  const saveFormData = (e) => {
    e.preventDefault();
    // post.comments.push({ comment: data });
    // console.log(myData);
    const newArr = { ...post };
    newArr.comments.push({ user: { name: "Abhi" }, comment: data });
    setPost(newArr);
  };

  return (
    <>
      <Navbar color={"#000"} />
      <section id="post" className="single-post-sec">
        <div className="container">
          <div className="col-lg-12">
            <div className="single-post-heading">
              <h1>{post.title}</h1>
              <p className="single-post-heading-bottom">
                December 16, 2017
                <span>
                  In <a href="#">Lifestyle</a>, <a href="#">Travel</a>{" "}
                </span>
              </p>
            </div>
            <div className="single-post-banner">
              <img src={post.image} alt="" />
            </div>
            <div className="single-post-body">
              <p className="post-body-top-text">{post.description}</p>
            </div>
            <div className="single-post-user">
              <div className="user-photo">
                <img src="/images/profile.jpg" alt="" />
              </div>
              <div className="user-details">
                <h3>{post.user.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  voluptates aperiam non nesciunt esse architecto quasi quo
                  sapiente si
                </p>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>GooglePlus</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section post="comment" className="single-post-comment-sec">
        <div className="mysize">
          <div className="container">
            <div className="user-comment-heading">
              <h2>{`${post.comments.length} Comments`}</h2>
            </div>
            {post.comments.map((el) => (
              <div className="user-comment-details">
                <div className="comment-user">
                  <img src="../../public/images/profile.jpg" alt="" />
                </div>
                <div className="comment-body">
                  <h4 className="user-name">{el.user.name}</h4>
                  <p className="comment-date">Dec 16, 2017 @ 23.05</p>
                  <p className="comment-text">{el.comment}</p>
                </div>
              </div>
            ))}

            <div className="comment-add">
              <h2> Add Comment</h2>
              <form action="#" method="POST">
                <textarea
                  name="cmt"
                  id="cmt-id"
                  cols="30"
                  rows="10"
                  required
                  onChange={(e) => {
                    var myData = e.target.value;
                    saveData(myData);
                    // saveFormData(myData);
                  }}
                  placeholder="Your Message"
                ></textarea>
                <input type="submit" value={"submit"} onClick={saveFormData} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePostPage;
