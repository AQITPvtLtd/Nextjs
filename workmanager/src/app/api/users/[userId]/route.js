import { User } from "@/models/user";
import { NextResponse } from "next/server";
// export function DELETE(request,{params}) {
//     console.log(params);
//     const {userId} = params;
//     console.log("User id ",userId);
//     return NextResponse.json(
//         {
//             message: "testing delete",
//         },);
// }

//get single user

// export const GET=()=>{

// }

export async function GET(request,{params}) {
    const {userId} = params;
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
}

//delete user
export async function DELETE(request, { params }) {
    const { userId } = params;
    try {
        await User.deleteOne({
            _id: userId,
        });
        return NextResponse.json({
            message: "User deleted !!",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
                message: "Error in deleting user !!",
                success: false,
            });
    }
}

//update user

export async function PUT(request, { params }) {
    const { userId } = params;
    const {name, password, about, profileURL} = await request.json();
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL;
        //add more information

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({
            message: "failed to update user !!",
            success: false,
        });      
    }
}

