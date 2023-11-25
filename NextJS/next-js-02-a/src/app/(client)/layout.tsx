import React, {ReactNode} from "react";
import Navigation from "@/components/Navigation/Navigation";

const ClientLayout = ({children} : {children : React.ReactNode}) => {
    return (
       <>
       <header >
           <h1>Client Header </h1>
       </header>
           <main>
               <Navigation />
               {children}
           </main>
           <footer>
               <h1>Client Footer </h1>
           </footer>
       </>

    );
};

export default ClientLayout;