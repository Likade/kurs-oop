 /* eslint-disable */

import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { useState } from 'react';

import styles from './analise.module.scss'

const Analise = () =>{

    const [optionX, setOptionX] = useState(null);
    const [optionY, setOptionY] = useState(null);
    const [optionTitle, setOptionTitle] = useState('all');

    let titles = new Set();
    let arr = [];
    let store = localStorage.getItem('sells').split(',');
    let elems = store.map((el, ind) => {
        if(ind != store.length-1) {
            let help = {};
            help['title'] = el.split('/')[0];
            help["date"] = (el.split('/')[1]).split('T')[0];
            help['time'] = (el.split('/')[1]).split('T')[1];
            help['count'] = Number(el.split('/')[2]);
            help['price'] = Number(el.split('/')[3]);
            arr.push(help);
            return(<div className={styles.merch}>
                <span className={styles.title}>{help.title}</span>
                <span>{help.date}</span>
                <span>{help.time}</span>
                <span>{help.count}</span>
                <span>{help.price * help.count}</span>
            </div>)
        }
    })
    arr.map(el => titles.add(el.title))
    let optionTitles = [];
    for(let i of titles){
        optionTitles.push(<option>{i}</option>)
    }
    const selectData = (typeX, typeY ) => {
        let help = [];
        let helpArr;
        if(optionTitle == 'all')
            helpArr = arr;
        else helpArr = arr.filter(el => el.title == optionTitle)
        if(typeX == 'time') {
            for(let i of helpArr){
                if (help.find(el => el['time'] == i['time'])) {
                    help.find(el => el['time'] == i['time'])[typeY] += i[typeY];
                }
                else {
                    if(typeY == 'count')
                    help.push({'time': i["time"], count: i['count']})
                    else help.push({'time': i["time"], price: i['price']*i['count']})
                }
            }
        }
        else if (typeX == 'date'){
            for(let i of helpArr){
                if (help.find(el => el['date'] == i['date'])) {
                    help.find(el => el['date'] == i['date'])[typeY] += i[typeY];
                }
                else {
                    if(typeY == 'count')
                        help.push({'date': i["date"].slice(5), count: i['count']})
                    else help.push({'date': i["date"].slice(5), price: i['price']*i['count']})
                }
            }
        }
        return help;
    }
    
    return(
        <div className={styles.wrapper}>
            <span className={styles.top}>История продаж</span>
            <div className={styles.merch}>
                <span className={styles.title}>Продукт</span>
                <span>Дата</span>
                <span>Время</span>
                <span>Количество</span>
                <span>На сумму</span>
            </div>
            {elems}
            <div className= {styles.analiseOptions}>
                <span>Отобразить график продаж: </span>
                <select className={styles.select_css}
                onChange ={(e) => setOptionX(e.target.value)}>
                    <option value="none" selected disabled hidden>Выберите отображение по х</option>
                    <option value='time'>Время</option>
                    <option value='date'>Дата</option>
                </select>
                <select className={styles.select_css}
                onChange ={(e) => setOptionY(e.target.value)}>
                    <option value="none" selected disabled hidden>Выберите отображение по y</option>
                    <option value='count'>Количество проданых единиц</option>
                    <option value='price'>Цена проданных товаров</option>
                </select>
                <select className={styles.select_css}
                onChange ={(e) => setOptionTitle(e.target.value)}>
                    <option value="all" selected>По всем товарам</option>
                    {optionTitles}
                </select>
            </div>
            {optionX && <VictoryChart
            domainPadding={20}
            >
                <VictoryAxis
                />
                <VictoryAxis
                dependentAxis
                tickFormat={(y) => (y)}
                />
                <VictoryBar
                data={selectData(optionX, optionY).sort((a, b) => a[optionX] > b[optionX] ? 1: -1)}
                x={optionX}
                y={optionY}
                />
        </VictoryChart>}
        </div>
    )
}

export default Analise