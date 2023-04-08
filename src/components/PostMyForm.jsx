import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import ImageCropper from "./ImageCropper";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostMyForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, setFile] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null);

  // readfile for getting the image from local
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const handleChange = async (e) => {
    if (e.target.files[0]) {
      const file = await readFile(e.target.files[0]);
      setFile(file);
      handleShow();
    }
  };

  // this is for taking the refrence of the current element using useRef
  const inputFile = useRef(null);

  // saving form data to the current page through State.
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const saveData = (e) => {
    e.preventDefault();
    setFormData({ ...formData, image: croppedFile });
    console.log(formData);
  };

  return (
    <section className="post-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
          <div className="col-lg-12">
            <div className="page3_form_section">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page3_form_container">
                    <form className="page3_form" action="" method="POST">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form_field">
                            <input
                              type="text"
                              placeholder="Enter Post Title"
                              name="title"
                              id="title"
                              required
                              onChange={(e) => {
                                let title = e.target.value;
                                setFormData({ ...formData, title: title });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_field">
                            <div className="demoImageContainer">
                              {!croppedFile ? (
                                <img
                                  className="demoImgIcon"
                                  onClick={() => inputFile.current.click()}
                                  modalShow={handleClose}
                                  src="/images/image-icon.png"
                                  alt=""
                                />
                              ) : (
                                <img src={croppedFile} />
                              )}
                            </div>
                            {/* <Button
                              onClick={() => inputFile.current.click()}
                              modalShow={handleClose}
                            >
                              Upload image
                            </Button> */}
                            {/* <img src={croppedFile} alt="" /> */}
                            <input
                              type="file"
                              onChange={handleChange}
                              ref={inputFile}
                              style={{ display: "none" }}
                            />
                            {show ? (
                              <ImageCropper
                                show={show}
                                onHide={handleClose}
                                data={file}
                                setFile={(file, fileName) => {
                                  setCroppedFile(file);
                                  const imageData = new File([file], fileName);
                                  setFormData({
                                    ...formData,
                                    image: imageData,
                                  });
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                        {/* <div className="col-lg-6">
                          <div className="form_field">
                            <img src={croppedFile} alt="" />
                          </div>
                        </div> */}
                        <div className="col-lg-12">
                          <div className="form_field">
                            <CKEditor
                              className="postDescription"
                              editor={ClassicEditor}
                              data={formData.description}
                              onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                setFormData({ ...formData, description: data });
                                console.log({ event, editor, data });
                              }}
                              onBlur={(event, editor) => {
                                console.log("Blur.", editor);
                              }}
                              onFocus={(event, editor) => {
                                console.log("Focus.", editor);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_field">
                            <input
                              type="submit"
                              value={"Submit"}
                              onClick={saveData}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostMyForm;
