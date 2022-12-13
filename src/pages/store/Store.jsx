import styles from './store.module.scss'

const Store =({merch}) =>{
    let displayStore = [];
    let categs = {};
    for(let i of merch){
        if(categs[i.cathegory] == undefined)
            categs[i.cathegory] = []
        categs[i.cathegory].push({title: i.title, price: i.price, count: i.count})
    }
    for(let i in categs){
        displayStore.push(<div className = {styles.categ}>{i}
            {
            categs[i].map(el =>{
                return (<div className = {styles.merch}>
                    <span>{el.title}</span>
                    <span>{el.price}</span>
                    <span>{el.count}</span>
                </div>)
            })
            }
        </div>)
    }

    return(
        <div className = {styles.wrapper}>
            <span className = {styles.top}>Склад</span>
            <div className = {styles.titles}>
                    <span>Наименование</span>
                    <span className = {styles.price}>Цена</span>
                    <span>Остаток на складе</span>
                </div>
            {displayStore}
        </div>
    )
}

export default Store;