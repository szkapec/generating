import React, {useState} from 'react'
import './decrypt.css';
export default function Decrypt() {

    const [message,setMessage]=useState('');
    const [decrypt, setDecrypt] = useState('');

    const decipher = salt => {
        if(message.length==0) return;
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 16))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('');
    }
    const myDecipher = decipher('mySecretSalt')

    const handleCopy = () => {
        const textarea = document.createElement('textarea');
        const password = document.querySelector('.dnc-text').value
        textarea.value = password
        document.body.appendChild(textarea)
        console.log(password)
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }
    return (
        <div className="pw-container">
        <h2 className="password-generating">Decrypt the message</h2>
        <div className="pw-header">
            <div className="pw dec" id="pw">
            <textarea className="dnc-text" value={decrypt?decrypt:"decrypt"} id="" cols="30" rows="10"></textarea>  {}
            </div>
            <button id="copy" onClick={handleCopy}>Copy</button>
        </div>
        <div className="decrypt-body">
            <div className="decrypt-form">
                <label htmlFor="text"> Message <br/>
                <textarea placeholder="text" className="input-dec" value={message} type="textarea" id="text" onChange={(e)=> setMessage(e.target.value)}/>
                </label>
            </div>    
               <br/>
            <button className="generating plus" onClick={()=>setDecrypt(myDecipher(message))}> decrypt </button>
        </div>            
    </div>
    )}

