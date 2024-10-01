// A script that handles user actions
// =================================

import { User } from "../model/User";
import dbConnect from "./db";

// ===============
// User sess
// ===============
// Login
export const LoginUser = async (formData: {
  username: string;
  password: string;
}) => {
  try {

    console.log(formData.username);
    console.log(formData.password);

    await dbConnect()


    const userExist = await User.find({
        username: formData.username 
    })


    console.log(userExist)

    



    return {
      status: "success",
      payload: "",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};
// Register

// Logout

// User Session
// ===============
// User Prpfile
// ===============

// update profile

//  add friend
//  remove friend
//  pm friend

// ===============
// blog
// ===============

// Create Blog

// delete blog

// like blog
// dislike blog
// comment blog
