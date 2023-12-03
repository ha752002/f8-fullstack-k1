"use client"
import {Button} from "@nextui-org/button";
import {signIn, signOut, useSession} from "next-auth/react";
import FormRegister from "@/components/form-register";
import {useRouter} from "next/navigation";

const AuthMenu = () => {
    const {data, status} = useSession();
    const router = useRouter();
    if(status === "loading"){
        return <>
            <p>...loading</p>
        </>
    }
    if(data){
        return <>
            <p>Logged in with user: {data.user?.email}</p>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </>
    }
    return (
       <>
           <Button color={"secondary"} onClick={() => signIn()}>Login</Button>
           <Button color={'primary'} onClick={() => {
               router.push("/register");
           }}>Register</Button>
       </>
    );
};

export default AuthMenu;