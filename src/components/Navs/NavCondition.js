import React, {useState, useEffect} from 'react';

import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const NavCondition = (props) => {
    if (props.token === null) {
        return <LoggedOut />
    } else {
        return <LoggedIn />
    }
}

export default NavCondition;