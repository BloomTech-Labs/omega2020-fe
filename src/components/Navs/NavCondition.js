import React, {useState, useEffect} from 'react';

import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const NavCondition = (props) => {

    // useEffect(() => {
    //     setToken(localStorage.getItem("token"));
    // });

    if (props.token === null) {
        return <LoggedOut />
    } else {
        return <LoggedIn />
    }
}

export default NavCondition;