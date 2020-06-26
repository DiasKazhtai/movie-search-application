import React from 'react'
import './ListItem.css'


export default function ListItem (){
    return (
        <div className='ListItem'>
            <div className='item ironMan'>
                <div className='name'>Железный человек 2</div>
                <div className='card ironman'></div>
            </div>
            <div className='item superMan'>
                <div className='name'>Человек из стали</div>
                <div className='card superman'></div>
            </div>
            <div className='item carsThree'>
                <div className='name'>Тачки 3</div>
                <div className='card carsthree'></div>
            </div>
            <div className='item narutoNine'>
                <div className='name'>Наруто 9</div>
                <div className='card narutonine'></div>
            </div>
            <div className='item narutoNine'>
                <div className='name'>Криминальное чтиво</div>
                <div className='card crime'></div>
            </div>
            <div className='item scarface'>
                <div className='name'>Лицо со шрамом</div>
                <div className='card scarFace'></div>
            </div>
            <div className='item oranG'>
                <div className='name'>Заводной апельсин</div>
                <div className='card orang'></div>
            </div>
            <div className='item shinging'>
                <div className='name'>Сияние</div>
                <div className='card shinGing'></div>
            </div>
        </div>
    )
}