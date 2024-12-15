import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import Plus from "../../img/plus-gray.svg";
import styles from "./Fridge.module.css";

const Fridge = ({ closePopup, setFridgeItems, fridgeItems }) => {
  const [countItems, setCountItems] = useState(7);

  const drawInputs = () => {
    const inputs = [];
    for (let i = 1; i <= countItems; i++) {
      inputs.push(
        <InputField
          type="textarea"
          name={`fridgeItem_${i}`}
          placeholder={`Продукт ${i}`}
          key={`product-${i}`}
          onChange={handleChange}
          value={fridgeItems[`fridgeItem_${i}`]}
        />
      );
    }
    return inputs;
  };

  console.log(fridgeItems)

  const handleChange = (e) => {
    setFridgeItems({
      ...fridgeItems,
      [e.target.name]: e.target.value,
    });
    console.log(fridgeItems)
  };

  const removeFalsyElement = object => {
    const newObject = {};
    Object.keys(object).forEach(key => {
       if (object[key]) {
          newObject[key] = object[key];
       }
    });
    return newObject;
 };

  const doneBtnHandler = () => {
    setFridgeItems(removeFalsyElement(fridgeItems));
    closePopup();
  };

  return (
    <div className={styles.fridge}>
      <div className={styles.fridge__overlay}></div>
      <div className={styles.fridge__body}>
        <div className={styles.fridge__inputs}>
          {drawInputs().map((input) => input)}
        </div>
        <button
          className={styles.fridge__plus}
          onClick={() => setCountItems((itms) => itms + 1)}
        >
          <img src={Plus} alt="ADD" />
        </button>
        <Button onClick={doneBtnHandler}>Готово</Button>
      </div>
    </div>
  );
};

export default Fridge;
