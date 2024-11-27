import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Пол:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Выберите</option>
            <option value="мужчина">Мужчина</option>
            <option value="женщина">Женщина</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Возраст:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Рост (см):
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Вес (кг):
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Желаемый результат:
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">Выберите</option>
            <option value="похудение">Похудение</option>
            <option value="набор мышечной массы">Набор мышечной массы</option>
            <option value="рекомпозиция">Рекомпозиция</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Продукты в холодильнике:
          <textarea
            name="fridgeItems"
            value={formData.fridgeItems}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
