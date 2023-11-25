import React from 'react';
import Navigation from "@/components/Navigation";

export const metadata = {
    title: "Trang Quan Tri",

};

const AdminLayout = ({children}) => {
    return (
        <div>
            <header>
                <h1>Admin</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
};

export default AdminLayout;