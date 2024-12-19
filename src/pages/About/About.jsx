import { useNavigate } from "react-router-dom";

import BackButton from "../../components/BackButton/BackButton";

import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    setTimeout(() => navigate("/"), 300);
  };

  return (
    <div className={styles.aboutPage}>
      <h2 className={styles.aboutPage_title}>О боте</h2>
      <div className={styles.aboutPage_text}>
        <p>
          Добро пожаловать в нашего бота! Он поможет вам создавать рецепты из
          тех продуктов, которые у вас уже есть!
        </p>
        <p className={styles.aboutPage_textStrong}>Как это работает?</p>
        <p>
          Просто заполните форму и отправьте боту список ваших ингредиентов. Он
          предложит вам рецепт, который вы сможете приготовить.
        </p>
        <p className={styles.aboutPage_textStrong}>Обратная связь</p>
        <p>
          Мы всегда рады вашим отзывам и предложениям! Если у вас есть идеи по
          улучшению бота или вы столкнулись с проблемами, не стесняйтесь
          сообщить нам.
        </p>
        <p className={styles.aboutPage_textStrong}>
          Спасибо, что выбрали нашего бота! Приятного аппетита!
        </p>
      </div>
      <BackButton onClick={handleBackBtn} />
    </div>
  );
};

export default About;
