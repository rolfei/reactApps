import React, { useState } from 'react';

import CallAuth from "./CallAuth";
import LogInOut from "./LogInOut";
const config = require('../config');

function ParentComponent() {
    const [parentData, setDataParent] = useState(null);



    return (
        <div>
            <h1>Parent Component</h1>
            <CallAuth setDataParent={setDataParent}/>
            <LogInOut email={parentData} uri={`http://4.158.32.9/auth`}/>


        </div>
    );
}

export default ParentComponent;