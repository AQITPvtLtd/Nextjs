import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

// get request function

//export function GET(request) {

// const users = [{
//     name: 'abhishek',
//     phone: '9205',
//     course: 'java',
// },
// {
//     name: 'abhi',
//     phone: '1234',
//     course: 'python',
// },
// {
//     name: 'ansh',
//     phone: '5678',
//     course: 'web',
// },
// {
//     name: 'sunny',
//     phone: '9123',
//     course: 'dm',
// },
// ];


export async function GET(request) {
    let users = [];
    try {
        await connectDb();
        users = await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to get users",
            success: false,
        });
    }

    return NextResponse.json(users);
}

// post request function
// data post
// create user
export async function POST(request) {

    // fetch user details from request

    const { name, email, password, about, profileURL } = await request.json();

    console.log({ name, email, password, about, profileURL });

    // create user object with user model

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    });
    try {
        // save the object to database
        user.password = bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT)
        );

        console.log(user);
        await connectDb();
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            status: 201,
        });
        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to create user !!",
            status: false,
        }, {
            status: 500,
        });
    }




    //const body=request.body;
    //console.log(body);
    //console.log(request.method);
    //console.log(request.cookies);
    //console.log(request.headers);
    //console.log(request.nextUrl.pathname);
    //console.log(request.nextUrl.seachParams);

    // const jsonData = await request.json();
    //const textData = await request.json();
    //console.log(jsonData);
    //console.log(textData);

    //     return NextResponse.json({
    //         message: "posting user data",
    //     });
}

// delete request function
// export function DELETE(request) {
//     console.log("delete api called");
//     return NextResponse.json(
//         {
//             message: "delete successful",
//             status: true,
//         },
//         { status: 201, statusText: "hey chaged text" }
//     );
// }

// export default function PUT() {
// }
