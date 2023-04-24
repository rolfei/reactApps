import React, { useState, useEffect } from 'react';


export default function CallAuth({setDataParent}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/user');
                const result = await response.json();
                setData(result);
                setDataParent(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []); // Passing an empty array as the second argument




    const { email } = 'test';

    let message = (email)
        ? `Hi, ${email}!`
        : "You're not logged in.";
    return (

        <div>
            {data ? (
                <div>
                    <p>Email: {data.user.email}</p>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>


    );

}