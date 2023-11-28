import {ReactNode} from "react";

const Layout = ({children}:{children : ReactNode}) => {
    return (
        <div>
            <p>Layout 1</p>
            {children}
        </div>
    );
};

export default Layout;