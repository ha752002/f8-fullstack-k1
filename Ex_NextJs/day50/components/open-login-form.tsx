"use client"
import React from 'react';
import {useSession, signIn, signOut} from "next-auth/react"
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation";

const OpenLoginForm = () => {
    const router = useRouter();
    const returnIfLogged = () => (
        <>
            <Button color={"danger"} onClick={() => signOut()}>Sign out</Button>
        </>
    )
    const {data: session} = useSession()
    if (session) {
        return returnIfLogged()
    }
    return (
       <>
           <Button color="warning" onPress={() => signIn()}>
               Login
           </Button>
           <Button color="primary" onPress={() => {
               router.replace("/auth/register")
           }}>
               Register
           </Button>
       </>
    )
};

export default OpenLoginForm;