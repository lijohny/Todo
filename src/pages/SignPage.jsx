import React from 'react'
// import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react'

function SignPage() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

   
    const sigin = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
            <h2>Login</h2>
            <form onSubmit={sigin}>
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default SignPage