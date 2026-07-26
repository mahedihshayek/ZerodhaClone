import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);

        const token = params.get("token");

        if (token) {

            localStorage.setItem("token", token);
            window.history.replaceState({}, document.title, "/");
        }
        const saveToken = localStorage.getItem("token");

        if (!saveToken) {
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