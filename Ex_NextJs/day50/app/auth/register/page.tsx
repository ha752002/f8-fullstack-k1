"use client"
import React, {useRef} from 'react';
import {Input} from "@nextui-org/input";
import {login, register} from "@/services/auth-service";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

const Register = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    return (
        <>
            <form ref={formRef}>
                <Input
                    type="text"
                    name="name"
                    label="Name"
                    variant="bordered"
                    className="max-w-xs"
                />
                <Input
                    type="text"
                    name="username"
                    label="Username"
                    variant="bordered"
                    className="max-w-xs"
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    variant="bordered"
                    className="max-w-xs"
                />
            </form>
            <Button color="primary" onPress={async () => {
                const username = (formRef?.current?.elements.namedItem("username")! as HTMLInputElement).value
                const password = (formRef?.current?.elements.namedItem("password")! as HTMLInputElement).value
                const name = (formRef?.current?.elements.namedItem("name")! as HTMLInputElement).value
                const response = await register({name, username, password})
                if(response.status === 200){
                    await signIn()
                }
            }}>
                Register
            </Button>
        </>
    );
};

export default Register;