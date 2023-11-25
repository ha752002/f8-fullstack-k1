"use client"
import React, {useEffect, useState} from 'react';
import {getDictionary} from "@/lib/dictionary";
import {useTheme} from "next-themes";

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    console.log(theme)
    return (
        <div>
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : "light")}>{theme === 'light' ? 'Dark' : "Light"} Mode
            </button>
        </div>
    );
};

export default DarkMode;