// protecting client routes and api routes.
import { NextApiRequest , NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prismadb from "@/libs/prismadb";

const serverAuth=async (req: NextApiRequest , res: NextApiResponse)=>{
    const session=await getServerSession(req , res , authOptions); //req parameter holds the jwt token which the getSession can use to get our logged in users

    if(!session?.user?.email){
        throw Error("Not signed in");
    }

    const currentUser=await prismadb.user.findUnique({
        where:{
            email: session.user.email,
        }
    });

    if(!currentUser){
        throw Error("Not signed in");
    }

    return {currentUser};
}

export default serverAuth;