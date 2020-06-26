import React, { useState } from 'react'
import './MovieList.css'


export default function MovieList (props){
    const [names , setNames] = useState({
        name : ['Железный человек', 'Челоек из стали', 'Тачки 3','Наруто 9'
        ,'Криминальное чтиво', 'Лицо со шрамом', 'Заводной апельсин','Сияние'],
        classes : [
            'ironman', 'superman', 'carsthree', 'narutonine',
            'crime', 'scarFace', 'orang', 'shinGing'
        ]
    })
        
    
    return (
        <div className='MovieList'>
            <div className='ListItem'>
                {names.name.map((elem, index)=> {
                return (
                    <div className='item'>
                        <div className='name'>{elem}</div>
                        <div className ={'card ' + names.classes[index]}></div>
                    </div>  
                )
                })} 
            </div>
        </div>
        )
}