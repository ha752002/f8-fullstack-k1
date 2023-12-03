"use client"
import {useRef} from "react";
import {useRouter} from "next/navigation";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {toast} from "react-toastify";


const FormRegister = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    console.log(formRef)

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
                    type="email"
                    name="email"
                    label="Email"
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
                const email = (formRef?.current?.elements.namedItem("email")! as HTMLInputElement).value
                const password = (formRef?.current?.elements.namedItem("password")! as HTMLInputElement).value
                const name = (formRef?.current?.elements.namedItem("name")! as HTMLInputElement).value

                const res = await fetch("/api/auth/register", {
                    method: 'POST',
                    body: JSON.stringify({
                        email, password, name
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
                if (res.ok && data.data) {
                    toast(data.message)
                    return router.push("/api/auth/signin")
                }
                toast(data.error)
            }}>
                Register
            </Button>
        </>
    );
};

export default FormRegister;