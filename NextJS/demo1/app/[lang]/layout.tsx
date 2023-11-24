import React from "react";
import {Locale} from "@/i18n.config";

const AppLayout = ({children, params}:{ children: React.ReactNode, params: {lang: Locale}}) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default AppLayout;