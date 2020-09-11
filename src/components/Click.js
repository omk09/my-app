import React, {useState} from 'react'; 


export default function Clock() {

    return (
    <div><h1>hello Sam time is {new Date().toLocaleTimeString()}</h1></div>
    ); 

}