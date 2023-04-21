import React from 'react';


export default function Greeting(props) {
    const { email } = props;
    let message = (email)
        ? `Hi, ${email}!`
        : "You're not logged in.";
    return (
            <span> {message} </span>
        );

}