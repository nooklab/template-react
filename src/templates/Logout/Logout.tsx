import React from 'react';
import {useLogout} from "@core/auth";


const Logout = () => {
    const logout = useLogout()
    logout().then(()=>{})
    return (
        <>
        </>
    )
}

export default Logout;
