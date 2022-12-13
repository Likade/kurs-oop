import styles from './modal.module.scss';

const Success = ({text}) => {
    return(
        <div className={styles.success}>
            <span>Успех!</span>
            <span>{text}</span>
        </div>
    )
}

export default Success