import React, { useState, useEffect } from 'react';


export default function CallAuth({}) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await fetch('http://4.158.32.9/auth/user', {
            credentials: 'include' // fetch won't send cookies unless you set credentials
        })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            return response.json()
        }
    }

    useEffect(() => {
        fetchData()
            .then((res) => {

                setData(res);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])






    const { email } = 'ian_e_rolfe@hotmail.com';

    let message = (email)
        ? `Hi, ${email}!`
        : "You're not logged in.";
    return (

        <div>
            {data ? (
                <div><pre>{JSON.stringify(data, null, 2) }  EMAIL: </pre></div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>


    );

}