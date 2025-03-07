import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

export async function POST(request) {
  console.log("login api");
  const { email, password } = await request.json();
  try {
    // find user from database by email
    await connectDb();
    const user = await User.findOne({
      email: email,
    });

    if (user == null) {
      throw new Error("user not found !!");
    }

    // validate password
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("invalid password !!");
    }

    // generate token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // create nextresonse cookie
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user
    })
    response.cookies.set("authToken", token, {
       expiresIn: "1d", 
       httpOnly: true,
      });

    console.log(user);
    console.log(token);

    // return NextResponse.json({
    //   message: "success",
    // });
    return response;

  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false
    }, {
      status: 500,
    })
  }
}