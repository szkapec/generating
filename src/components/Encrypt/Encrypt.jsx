import React from 'react'
import { useState } from 'react';
import './encrypt.css';

export default function Encrypt() {

    const [message,setMessage]=useState('');
    const [encrypt, setEncrypt] = useState('');

    const cipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    
        return text => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    }
    const myCipher = cipher('mySecretSalt') //sol

    const handleCopy = () => {
        const textarea = document.createElement('textarea');
        const password = document.querySelector('.enc-text').value
        document.querySelector('.button-enc').style.opacity = 0
        textarea.value = password
        console.log(password)
        document.body.appendChild(textarea)
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }

    return (
        <div className="pw-container">
        <h2 className="password-generating">Encrypt the message</h2>
        <div className="pw-header">
            <div className="pw enc" id="pw">
              <textarea className="enc-text" value={encrypt?encrypt:"encrypt"} id="" cols="30" rows="10"></textarea>  {}
            </div>
            <button id="copy" className="button-enc" onClick={handleCopy}>Copy</button>
        </div>
        <div className="encrypt-body">
            <div className="encrypt-form">
                <label htmlFor="text"> Message <br/>
                <textarea placeholder="text" className="input-enc" type="text" size="20" id="text" onChange={(e)=> setMessage(e.target.value)}/>
                </label>
            </div>    
               <br/>
            <button className="generating plus" onClick={()=>setEncrypt(myCipher(message))}> encrypt </button>
        </div>            
    </div>
    )
}
