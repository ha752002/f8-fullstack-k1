'use client'
import Link from 'next/link'
import {useParams, usePathname, useRouter} from 'next/navigation'
import {i18n} from '@/i18n.config'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger, Selection
} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

export default function LocaleSwitcher() {
    const pathName = usePathname()
    const router = useRouter()
    const getSelectedLocale = () => {
        return pathName.split('/')[1]
    }
    console.log(getSelectedLocale())
    const redirectedPathName = (locale: string) => {
        const segments = pathName.split('/')
        segments[1] = locale
        const newUrl = segments.join('/')
        localStorage.setItem("language" ,locale);
        return router.push(newUrl)
    }
    // console.log(`locale`,i18n.locales)

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {getSelectedLocale().toString().toUpperCase()}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={true}
                selectionMode="single"
                selectedKeys={getSelectedLocale()}
                onSelectionChange={(key: any) => {
                    if(key.currentKey != getSelectedLocale()){
                        redirectedPathName(key.currentKey)
                    }
                }}
            >
                {i18n.locales.map((locale) => {
                    return <DropdownItem key={locale}>{locale.toUpperCase()}</DropdownItem>
                })}
            </DropdownMenu>
        </Dropdown>
    )
}
