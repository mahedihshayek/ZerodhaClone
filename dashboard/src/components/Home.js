import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

    // useEffect(() => {

    //     const params = new URLSearchParams(window.location.search);

    //     const token = params.get("token");

    //     if (token) {

    //         localStorage.setItem("token", token);
    //         window.history.replaceState({}, document.title, "/");
    //     }
    //     const saveToken = localStorage.getItem("token");

    //     if (!saveToken) {
    //         window.location.href = "http://localhost:3000/login";
    //     }
    //     const name = params.get("name");

    //     if (name) {
    //         localStorage.setItem("userName", name);
    //     }
    // }, []);
    useEffect(() => {

        const params = new URLSearchParams(window.location.search);

        const token = params.get("token");
        const name = params.get("name");

        if (token) {
            localStorage.setItem("token", token);
        }

        if (name) {
            localStorage.setItem("userName", name);
        }

        // Remove both token and name from URL AFTER saving them
        if (token || name) {
            window.history.replaceState({}, document.title, "/");
        }

        const savedToken = localStorage.getItem("token");

        if (!savedToken) {
            window.location.href = "http://localhost:3000/login";
        }

    }, []);

    return (
        <>
            <TopBar />
            <Dashboard />
        </>
    );
}

export default Home;