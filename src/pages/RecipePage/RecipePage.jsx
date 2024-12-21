import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { getGPTResponse } from "../../api";

import Button from "../../components/Button/Button";
import BackButton from '../../components/BackButton/BackButton'

import styles from "./RecipePage.module.css";

import ShareBtnIco from "../../img/btn-share-ico-white.svg";

const RecipePage = () => {
  const { state } = useLocation();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [prompt, setPrompt] = useState(state.prompt);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getGPTResponse(prompt);
        setResponse(data);
      } catch {
        setResponse("Произошла ошибка. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prompt]);

  const BtnAnotherRecipeHandler = () => {
    console.log(prompt)
    setPrompt('Давай другой рецепт...')
  };

  const handleBackBtn = () => {
    setTimeout(() => navigate("/form"), 300);
  };

  return (
    <div className={styles.recipePage}>
      <BackButton onClick={handleBackBtn}/>
      <div className={styles.recipePage__recipe_wrapper}>
        <p
          className={`${styles.recipePage__recipe} ${
            loading && styles.recipePage_loading
          }`}
        >
          {loading ? "Бот печатает" : response}
        </p>
      </div>
      <div className={styles.recipePage__buttons}>
        <div className={styles.recipePage__buttons_row}>
          <Button>Супер! Я готовить!</Button>
          <Button>
            <img src={ShareBtnIco} alt="SHARE" />
          </Button>
        </div>
        <Button variant="white" onClick={BtnAnotherRecipeHandler}>
          Давай другой рецепт...
        </Button>
      </div>
    </div>
  );
};

export default RecipePage;
