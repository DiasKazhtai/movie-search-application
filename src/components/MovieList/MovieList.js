import React, { useState, Fragment, useEffect } from 'react'
import './MovieList.css'


export default function MovieList (props){
    const [names , setNames] = useState({
        name : ['Железный человек', 'Человек из стали', 'Тачки 3','Наруто 9'
        ,'Криминальное чтиво', 'Лицо со шрамом', 'Заводной апельсин','Сияние'],
        classes : [
            'ironman', 'superman', 'carsthree', 'narutonine',
            'crime', 'scarFace', 'orang', 'shinGing'
        ],
    })

    function show (){
        return (
            <h1>hello</h1>
        )
    }

    return (
        <div className='MovieList'>
            <div className='ListItem'>
          {
              props.name.name ? 
                        <div className='item'>
                            {names.name.map((elem, index) => {
                                if(elem === props.name.name){
                                  return (
                                    <div key={index}>
                                        <div className='name'>{elem}</div>
                                        <div className ={'card ' + names.classes[index]}></div>
                                    </div>
                                  )
                                } 
                                   
                            })}
                        </div>  
                        : 
                        <div className="forFlex">
                            {names.name.map((elem, index) => {
                              return (
                                <div className='item' key={index}>
                                    <div className='name'>{elem}</div>
                                    <div className ={'card ' + names.classes[index]}></div>
                                </div>
                              )
                        })}
                        </div>
          }
            
        </div>
     </div>
        )
}