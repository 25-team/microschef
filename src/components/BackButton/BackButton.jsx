import styles from './BackButton.module.css'

// Картинки
import Arrow from '../../img/arrow.svg'

const BackButton = ({ ...props }) => {
  return (
    <button
      className={`${styles.backButton}`}
      {...props}
    >
      <img src={Arrow} alt='BACK' className={styles.backButton_arrow} />
    </button>
  )
}

export default BackButton
