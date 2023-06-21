// protecting client routes and api routes.
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "@/libs/prismadb";

const serverAuth=async (req: NextApiRequest)=>{
    const session=await getSession({req}); //req parameter holds the jwt token which the getSession can use to get our logged in users

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