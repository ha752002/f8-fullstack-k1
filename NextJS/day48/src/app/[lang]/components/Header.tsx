import {Locale} from '@/i18n.config'
import {getDictionary} from '@/lib/dictionary'
import LocaleSwitcherDropBox from './LocaleSwitcherDropBox'
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import DarkMode from "@/app/[lang]/components/DarkMode";

const Header = async ({lang} : {lang: Locale}) => {
    const {navigation} = await getDictionary(lang)

    return (
        <header >
            <nav className='container flex items-center justify-between'>
                <DarkMode/>
                <LocaleSwitcherDropBox/>
            </nav>
        </header>
    )
};

export default Header;
