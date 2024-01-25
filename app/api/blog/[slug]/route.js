import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();

    const post = await Post.findOne({ userId: slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};

// export default async function handler(request, response) {
//   console.log("****************response****************", response);
//   const {params} = response.query
//   const { slug } = params;
//   console.log("****************api/blog****************");
//   if (req.method === 'GET') {
//     try {
//       connectToDb();

//       const post = await Post.findOne({ slug });
//       return NextResponse.json(post);
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch post!");
//     }
//   } else if(req.method === 'DELETE'){
//     try {
//       connectToDb();

//       await Post.deleteOne({ slug });
//       return NextResponse.json("Post deleted");
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to delete post!");
//     }
//   }
// }
