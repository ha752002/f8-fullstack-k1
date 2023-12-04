import React from "react";
import Header from "./components/Header";
import {Locale} from "@/i18n.config";

const AppLayout = ({children, params}:{ children: React.ReactNode, params: {lang: Locale}}) => {
    return (
        <>
            {/*<Header lang={params.lang}/>*/}
            <main>{children}</main>
            <footer><h1> FOOTER ADMIN</h1></footer>
        </>
    );
};

export default AppLayout;