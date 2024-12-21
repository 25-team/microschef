import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import InputField from '../../components/InputField/InputField'
import BackButton from '../../components/BackButton/BackButton'
import Fridge from '../../components/Fridge/Fridge'
import styles from './Form.module.css'

import Plus from '../../img/plus-black.svg'

const Form = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
  })

  const [fridgeItems, setFridgeItems] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [activeBtn, setActiveBtn] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const prompt = `Я ${formData.gender}, мне ${formData.age} лет, мой рост ${
      formData.height
    } см, я вешу ${formData.weight} кг. Моя цель — ${
      formData.goal
    }. Сейчас у меня из продуктов есть только ${Object.values(fridgeItems).join(
      ', '
    )}. Придумай мне рецепты на завтрак, обед и ужин только из тех продуктов, которые у меня есть (не используй сторонние продукты, только специи). Рассчитай КБЖУ за день.`

    navigate('/recipes', { state: { prompt } })
  }

  const handleAddProduct = () => {
    setShowPopup(true)
  }

  useEffect(() => {
    const productList = document.querySelector('#productList')
    if (
      Object.values(fridgeItems).length > 3 &&
      Object.values(fridgeItems).length !== 0
    )
      productList.style.overflowY = 'scroll'
  }, [fridgeItems])

  useEffect(() => {
    let formCheck = true;
    for (let key of Object.keys(formData)) {
      if (!formData[key]) {
        formCheck = false
      }
    }
    let allFormFill = formCheck
    if (allFormFill && Object.keys(fridgeItems).length >= 5) {
      setActiveBtn(true)
    }
  }, [fridgeItems, formData])

  const handleBackBtn = () => {
    setTimeout(() => navigate("/"), 300);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <BackButton onClick={handleBackBtn}/>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <label>
            <Dropdown
              placeholder='Пол'
              name='gender'
              value={formData.gender}
              onChange={handleChange}
              options={[
                { value: 'мужчина', label: 'Мужчина' },
                { value: 'женщина', label: 'Женщина' },
              ]}
              required
            />
          </label>
        </div>
        <div className={styles.form__input}>
          <label>
            <InputField
              type='textarea'
              name='age'
              value={formData.age}
              onChange={handleChange}
              placeholder='Возраст'
              required
            />
          </label>
        </div>
      </div>
      <div>
        <label>
          <InputField
            type='textarea'
            name='height'
            value={formData.height}
            onChange={handleChange}
            placeholder='Рост'
            required
          />
        </label>
      </div>
      <div>
        <label>
          <InputField
            type='textarea'
            name='weight'
            value={formData.weight}
            onChange={handleChange}
            placeholder='Вес'
            required
          />
        </label>
      </div>
      <div>
        <label>
          <Dropdown
            placeholder='Желаемый результат'
            name='goal'
            value={formData.goal}
            onChange={handleChange}
            options={[
              { value: 'похудение', label: 'Похудение' },
              { value: 'набор мышечной массы', label: 'Набор мышечной массы' },
              { value: 'рекомпозиция', label: 'Рекомпозиция' },
            ]}
            required
          />
        </label>
      </div>
      <div className={styles.form__fridge_container}>
        <label className={styles.fridgeOpn__txt}>
          Что у тебя в холодильнике?
        </label>
        <button
          type='button'
          onClick={handleAddProduct}
          className={`${styles.form__fridgeOpn} ${styles.fridgeOpn}`}
        >
          <p className={styles.fridgeOpn__txt}>Добавить продукт</p>
          <img src={Plus} alt='' className={styles.fridgeOpn__ico} />
        </button>
        {Object.values(fridgeItems).length !== 0 && (
          <div className={styles.form__fridge}>
            <div className={styles.form__fridge_list} id='productList'>
              {Object.values(fridgeItems).map((item, i) => (
                <div className={styles.form__fridge_item} key={i}>
                  <p className={styles.form__fridge_item_num}>{i + 1}</p>
                  <p className={styles.form__fridge_item_name}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Button type='submit' inactive={!activeBtn}>Перейти к рецептам</Button>
      {showPopup && (
        <Fridge
          closePopup={() => setShowPopup(false)}
          setFridgeItems={(item) => setFridgeItems(item)}
          fridgeItems={fridgeItems}
        />
      )}
    </form>
  )
}

export default Form
