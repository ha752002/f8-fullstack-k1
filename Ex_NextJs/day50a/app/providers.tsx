"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {useRouter} from 'next/navigation'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import Toast from "@/components/toast";
import {SessionProvider} from "next-auth/react";
import {SWRConfig} from "swr";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <Toast/>
            <NextThemesProvider {...themeProps}>
                <SessionProvider>
                    <SWRConfig>
                        {children}
                    </SWRConfig>
                </SessionProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}