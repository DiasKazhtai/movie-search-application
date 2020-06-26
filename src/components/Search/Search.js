import React from 'react';
import './Search.css'

 export default function Search (){
    return (
        <div className='Search'>
            <input className='input' type='text' placeholder='Введите название фильма'/>
        </div>
    )
}