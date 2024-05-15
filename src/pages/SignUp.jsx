import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react'

function SignUp() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

   
    const create = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) =>{
                console.log(error);
            })
        // console.log({email},"data",{password});
    }

    return (
        <div className='parent'>
            <h2>sign up</h2>
            <form onSubmit={create}>
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp