import React from 'react';
import "./Icon.css";

function IconSwitch(props) {
    let {onSwitch, icon} = props;
    

    let onClick = (e) => {
        onSwitch();
    };

    return (
        <div onClick = {onClick}>
            {icon}
        </div>
    );
};

export default IconSwitch
