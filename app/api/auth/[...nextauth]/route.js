
import User from "@/models/user";
import { Connectdb } from "@/utils/ConnectDb";
import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions ={
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks:{
        async signIn({user,account}){
            
                await Connectdb()
               try {
                const currentUser = await User.findOne({email:user.email})
                if(!currentUser){
                    const Name = user.name.replace(/\s+/g, "")
                    const Username = user.name.replace(/\s+/g, "")
                   const newUser= new User({
                    email:user.email,
                    name:Name,
                    username:Username,
                   })
                   
                   await newUser.save()
                  return true
                  } 
                  return true
               } catch (error) {
                console.log("Error while saving");
                return false
               }
        },
       
        async session({session, user, token}){
            await Connectdb()
            const dbuser = await User.findOne({email:session.user.email})
            session.user._id=dbuser?.id
    session.user.name = dbuser?.name
    session.user.username = dbuser?.username
    return session
        }
    },
    secret:process.env.NEXTAUTH_SECRET,
}
const handler = nextAuth(authOptions)
export {handler as GET, handler as POST}