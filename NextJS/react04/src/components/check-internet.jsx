"use client"
import React, {useState ,useEffect} from 'react';
import {toast} from "react-toastify";

const CheckInternet = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, []);


    useEffect(() => {
        if(isOnline){
            toast('You are online.')
        }else {
            toast('You are offline. Please check your internet connection')

        }
    }, [isOnline]);
    return (
        <div>
            {/*{isOnline ? (*/}
            {/*    <p>You are online.</p>*/}
            {/*) : (*/}
            {/*    <p>You are offline. Please check your internet connection.</p>*/}
            {/*)}*/}
        </div>
    );
};

export default CheckInternet;