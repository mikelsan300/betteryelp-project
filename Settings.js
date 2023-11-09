import React, { useEffect, useContext, useState} from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";

export default () => {
    const { getSession } = useContext(AccountContext);

    const [loggedin, setLoggedIn] = useState(false);

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true);
        });
    }, []);
    
    return(
        <div>
            {loggedin && (
                <>
                <h2>Settings</h2>
                <ChangePassword />
                </>
            )}
        </div>
    )
}