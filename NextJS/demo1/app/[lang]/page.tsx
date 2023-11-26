import React from 'react';
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import {List} from "postcss/lib/list";

const Home = async ({params: {lang}}: { params: { lang: Locale } }) => {
    const {page} = await getDictionary(lang)

    return (
        <>
          <div style={{display: "flex"}}>
              <div style={{width : "30%"}} >
                  <img src={page.home.imageInfo} alt={"TXB"}/>
              </div>
              <div  style={{ width : "70%", paddingLeft : " 20px 60px"}} >
                  <h1 style={{textAlign: "center", fontWeight: "bold" , fontSize: "1.6rem"}}>{page.home.userInfo}</h1>
                  <p style={{margin: "20px 0px 0px 20px" }}> {page.home.fullName}</p>
                  <p  style={{margin: "20px 0px 0px 20px" }}>{page.home.studyAt}</p>
                  <p style={{margin: "20px 0px 0px 20px" }}>{page.home.desc}</p>
              </div>
          </div>
        </>
    );
};

export default Home;