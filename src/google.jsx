import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse, "heiiiii");
        const userDetails = jwt_decode(credentialResponse.credential);
        // console.log(userDetails, "milila user details");
        const payload = {
          name: userDetails.name,
          email: userDetails.email,
          avatar: userDetails.picture,
        };
        let response = await axios.post(
          "http://localhost:3333/api/user",
          payload
        );
        console.log(response);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default google;
