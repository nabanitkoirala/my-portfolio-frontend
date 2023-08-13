import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../pages/LoginPage";
// import { getLoginStatus } from "../../Services/AuthService";
const ProtectedRoute = (props) => {
    const {
        children,
        isLoginPage = false
    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState();
    console.log("child", children)
    const test = async () => {
        const data = await localStorage.getItem('accessToken')
        console.log("This is data", data)
        data ? setIsLoggedIn(true) : setIsLoggedIn(false)
        return
    }
    useEffect(() => {
        test()
    }, [children])
    // fetch(import.meta.env.VITE_APP_BACKEND_URL + "/auth/me", {
    //     credentials: 'include',

    // }).then(res => {
    //     if (res.status == 200) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // })
    if (isLoggedIn === true) {
        return (
            <>
                {children}
            </>
        )
    } else if (isLoggedIn === false && !isLoginPage) {
        return (
            <Navigate to='/' />
        )
    } else if (isLoggedIn === false && isLoginPage) {
        return (
            <Login />
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default ProtectedRoute;