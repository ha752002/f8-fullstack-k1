import React from 'react';
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";

const Home = async ({params: {lang}}: {params: {lang: Locale}}) => {
    const {page} = await getDictionary(lang)
    return (
        <div>
            {page.home.title}
        </div>
    );
};

export default Home;