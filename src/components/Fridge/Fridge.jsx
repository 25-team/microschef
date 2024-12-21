import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/InputField'
import Plus from '../../img/plus-gray.svg'
import styles from './Fridge.module.css'

const Fridge = ({ closePopup, setFridgeItems, fridgeItems }) => {
  const [countItems, setCountItems] = useState(7)
  const [activeBtn, setActiveBtn] = useState(false)

  const drawInputs = () => {
    const inputs = []
    for (let i = 1; i <= countItems; i++) {
      inputs.push(
        <InputField
          type='textarea'
          name={`fridgeItem_${i}`}
          placeholder={`Продукт ${i}`}
          key={`product-${i}`}
          onChange={handleChange}
          value={fridgeItems[`fridgeItem_${i}`] || ''}
        />
      )
    }
    return inputs
  }

  const handleChange = (e) => {
    setFridgeItems({
      ...fridgeItems,
      [e.target.name]: e.target.value,
    })
  }

  const removeFalsyElement = (object) => {
    const newObject = {}
    Object.keys(object).forEach((key) => {
      if (object[key]) {
        newObject[key] = object[key]
      }
    })
    return newObject
  }

  const doneBtnHandler = () => {
    setFridgeItems(removeFalsyElement(fridgeItems))
    closePopup()
  }

  useEffect(() => {
      if (Object.keys(fridgeItems).length >= 5) {
        setActiveBtn(true)
      }
    }, [fridgeItems])

  return (
    <div className={styles.fridge}>
      <div className={styles.fridge__overlay}></div>
      <div className={styles.fridge__body}>
        <div className={styles.fridge__inputs}>
          {drawInputs()}
        </div>
        <button
          className={styles.fridge__plus}
          onClick={() => setCountItems((itms) => itms + 1)}
        >
          <img src={Plus} alt='ADD' />
        </button>
        <Button onClick={doneBtnHandler} inactive={!activeBtn}>{activeBtn ? 'Готово' : 'Минимум 5'}</Button>
      </div>
    </div>
  )
}

Fridge.propTypes = {
  closePopup: PropTypes.func.isRequired,
  setFridgeItems: PropTypes.func.isRequired,
  fridgeItems: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Fridge
