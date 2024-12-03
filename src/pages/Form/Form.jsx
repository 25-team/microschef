import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputField from "../../components/InputField/InputField";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    goal: "",
    fridgeItems: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `Я ${formData.gender}, мне ${formData.age} лет, мой рост ${formData.height} см, я вешу ${formData.weight} кг. Моя цель — ${formData.goal}. Сейчас у меня из продуктов есть только ${formData.fridgeItems}. Придумай мне рецепты на завтрак, обед и ужин только из тех продуктов, которые у меня есть (не используй сторонние продукты, только специи). Рассчитай КБЖУ за день.`;

    navigate("/recipes", { state: { prompt } });
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div>
        <label>
          <Dropdown
            placeholder="Пол"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { value: "мужчина", label: "Мужчина" },
              { value: "женщина", label: "Женщина" },
            ]}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <InputField
            type="textarea"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Возраст"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <InputField
            type="textarea"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Рост"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <InputField
            type="textarea"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Вес"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <Dropdown
            placeholder="Желаемый результат"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            options={[
              { value: "похудение", label: "Похудение" },
              { value: "набор мышечной массы", label: "Набор мышечной массы" },
              { value: "рекомпозиция", label: "Рекомпозиция" },
            ]}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Что у тебя в холодильнике?
          <InputField
            type="textarea"
            name="fridgeItems"
            value={formData.fridgeItems}
            onChange={handleChange}
            placeholder="Введите продукты"
            required
          />
        </label>
      </div>
      <Button type="submit">Перейти к рецептам</Button>
    </form>
  );
};

export default Form;
