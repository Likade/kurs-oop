 /* eslint-disable */

import { useState } from "react";
import { useRef } from "react";

import Success from "../../modal/success";

import styles from './buying.module.scss'
const Buying = ({merch}) => {
    const [merchOption, setOption] = useState([])
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(false);
    let ref = useRef(null);
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

    const setStorage = () => {
        for(let i of merch){
            if(i.title === ref.current.value) {
                i.order(count);
                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 3000);
                break;
            }
        }
    }

    return(
        <div className={styles.wrapper}>
            <span className={styles.top}>Закупка товара</span>
            <div>
                <span>Выберите категорию</span>
                <select className={styles.select_css} onChange={e => getMerch(e.target.value)}>
                    <option value="none" selected disabled hidden>Выберите категорию</option> 
                    {options}
                </select>
            </div>
            <div>
                <span>Выберите наименование</span>
                <select className={styles.select_css} ref={ref} onChange ={e => setProduct(e.target.value)}>
                    <option value="none" selected disabled hidden>Выберите продукт</option> 
                    {merchOption}
                </select>
            </div>
            <div>
                <span>Введите количство</span>
                <input className={styles.number} type="number"  min="0" max = '100'
                value={count} 
                onChange={(event) => setCount(event.target.value)}/>
            </div>
            <button disabled ={(count < 1 || merchOption == [] || product == null) ? true : false} className={styles.button} onClick={() => setStorage()}>Заказать</button>
            {message && <Success text={`Товар успешно закуплен в количестве ${count} шт.`}/>}
        </div>
    )
}

export default Buying