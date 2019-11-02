import React,{useEffect} from 'react';

// This is the Singout Functions
const Signout=()=>{
    useEffect(()=>{
        console.log("SignOut Called")
        window.location.href ="/"
    }) 
    return <h1>Singing....out</h1>
}

export default Signout;