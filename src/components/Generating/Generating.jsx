import React from 'react'
import './generating.css';
import { useState } from 'react';


const uperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+";

export default function Generating() {



    const [len, setLen] = useState(15)
    const [upper, setUpper] = useState(true)
    const [lower, setLower] = useState(true)
    const [number, setNumber] = useState(true)
    const [symbol, setSymbol] = useState(true)
    const [passwords, setPasswords] = useState('')
    const generate = () => {
        let pw = document.querySelector('.gen-textarea')
        let password = '';
        for(let i=0; i<len; i++) {
            const x = generateOneX();
            password += x;
        }
        pw.value = password
        setPasswords(password)
    }

    const generateOneX = () => {
        let z = [];
        if(upper) {
           z.push(getUpper());
        }
        if(lower) {
           z.push(getLower());
        }
        if(number) {
           z.push(getNumber());
        }
        if(symbol) {
           z.push(getSymbol());
        }
        if(z.length===0) return '';
        return z[Math.floor(Math.random() * z.length)]
    };


    const getUpper = () => {
        return uperLetter[Math.floor(Math.random() * uperLetter.length)]
    }
    const getLower = () => {
        return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
    }
    const getNumber = () => {
        return numbers[Math.floor(Math.random() * numbers.length)]
    }
    const getSymbol = () => {
        return symbols[Math.floor(Math.random() * symbols.length)]
    }
    const handleCopy = () => {

        const textarea = document.createElement('textarea');
        const password = document.querySelector('.gen-textarea').value
        textarea.value = password
        document.body.appendChild(textarea)
        console.log(password)
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }

    return (
        <div className="pw-container">
            <h2 className="password-generating">Password generating</h2>
            <div className="pw-header">
            <div className="pw dec" id="pw">
                <textarea value={passwords?passwords:'password'} className="pw gen-textarea" id="pw"></textarea>
            </div>
            <button id="copy" onClick={handleCopy}>Copy</button>
            </div>
           
            <div className="pw-body">
                <div className="form-control">
                    <label htmlFor="len"> Password</label>
                    <input className="input-number" type="number" size="8" min="4" max="40" value={len} id="len" onChange={(e)=> setLen(e.target.value)}/>
                </div>    
                <div className="form-control">
                    <label htmlFor="upper"> Contain Uppercase letters</label>
                    <input type="checkbox" checked={upper} id="upper" onChange={() =>setUpper(!upper)}/>
                </div>    
                <div className="form-control">
                    <label htmlFor="lower"> Contain Lowercase Letters</label>
                    <input type="checkbox" id="lower" checked={lower} onChange={() =>setLower(!lower)}/>
                </div>    
                <div className="form-control">
                    <label htmlFor="number"> Contains Number</label>
                    <input type="checkbox" id="number" checked={number} onChange={() =>setNumber(!number)}/>
                </div>    
                <div className="form-control">
                    <label htmlFor="symbol">Contains Symbols</label>
                    <input type="checkbox" id="symbol" checked={symbol} onChange={() =>setSymbol(!symbol)}/>
                </div>    
                <button className="generating" onClick={generate}> Generate </button>
            </div>            
        </div>
    )


}
