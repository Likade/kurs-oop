import { useRef } from "react";
import { useState } from "react";

import ErrCount from '../../modal/error'
import Success from "../../modal/success";

import styles from './selling.module.scss'

const Selling = ({merch}) => {
    const [merchOption, setOption] = useState([])
    const [toSell, setToSell] = useState(0);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    let refProd = useRef(null);
    let dateRef = useRef(null);
    let categ = new Set();
    merch.map(el => categ.add(el.cathegory));
    let options = [];
    categ.forEach(el => options.push(<option>{el}</option>))

    const getMerch = (cath) => {
        let helpOption = [];
        merch.map(el => {
            if(el.cathegory === cath) helpOption.push(<option>{el.title}</option>);
            return el
        })
        setOption(helpOption);
    }

    const getToSell = () =>{
        merch.map(el => {
                if(el.title === refProd.current.value) setToSell(el.count);
                return el
            }
        )
    }

    const sell = () => {
        let helpPrice;
        let isSold;
        merch.map(el => {
            if(el.title === refProd.current.value) {isSold = el.sell(count); helpPrice = el.price};
            return el
        });
        if(isSold) {
            let sells = localStorage.getItem('sells');
            sells += `${refProd.current.value}/${dateRef.current.value}/${count}/${helpPrice},`
            localStorage.setItem('sells', sells);
            getToSell();
            setMessage(true)
            setTimeout(() => {
                setMessage(false)
            }, 3000);
        }
        else{
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }
    }

    return(
        <div className={styles.wrapper}>
            <span className={styles.top}>Продажа товара</span>
            <div>
                <span>Выберите категорию</span>
                <select className={styles.select_css} onChange={e => {getMerch(e.target.value); setTimeout(()=>getToSell(), 0) ;}}>
                    <option value="none" selected disabled hidden>Выберите категорию</option> 
                    {options}
                </select>
            </div>
            <div>
                <span>Выберите наименование</span>
                <select className={styles.select_css} ref={refProd} onChange={() => getToSell()}>
                    <option value="none" selected disabled hidden>Выберите продукт</option> 
                    {merchOption}
                </select>
            </div>
            <span className={styles.toSell}>Доступно для продажи: 
                <span className={styles.toSellCount}>  {toSell}</span>
            </span>
            <input className={styles.number} type="number"  min="0" max = '100'
            value={count} 
            onChange={(event) => setCount(event.target.value)}/>
            <span>Введите дату и время продажи</span>
            <input className={styles.date} type="datetime-local" ref={dateRef} onChange = {e => setDate(e.target.value)}/>
            <button className={styles.button} disabled = {(merchOption === [] || toSell === 0 || date === '' || count < 1) ? true : false} onClick={() => sell()}>Продать</button>
            {err && <ErrCount/>}
            {message && <Success text={`Товар успешно продан в количестве ${count} шт.`}/>}
        </div>
    )
}

export default Selling