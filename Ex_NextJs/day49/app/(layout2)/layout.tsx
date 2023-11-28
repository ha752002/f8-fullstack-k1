import {ReactNode} from "react";

const Layout = ({children}:{children : ReactNode}) => {
    return (
        <div>
            <p>Layout 2</p>
            {children}
        </div>
    );
};

export default Layout;