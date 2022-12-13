import styles from './modal.module.scss';

const ErrCount = () => {
    return(
        <div className={styles.error} id = 'errCount'>
            <span>Ошибка</span>
            <span>Недостаточно товара на складе для продажи</span>
        </div>
    )
}

export default ErrCount