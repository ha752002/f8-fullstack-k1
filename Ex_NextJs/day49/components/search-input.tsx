"use client"
import React, {useRef} from 'react';
import {Input} from "@nextui-org/input";
import {Kbd} from "@nextui-org/kbd";
import {SearchIcon} from "@nextui-org/shared-icons";
import {useRouter} from "next/navigation";

const SearchInput = () => {
    const search = useRef<HTMLInputElement>(null);
    const router = useRouter();
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(search.current?.value)
            router.push('/?q=' + search.current?.value)
        }}>
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                endContent={
                    <Kbd className="hidden lg:inline-block" keys={["command"]}>
                        HB
                    </Kbd>
                }
                ref={search}

                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
                name={'q'}
            />
        </form>
    );
};

export default SearchInput;