import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./Title.module.css";

// Картинки
import Arrow from "../../img/arrow.svg";
import MainBtnIco from "../../img/button-main-ico.png";
import StoryBtnIco from "../../img/btn-story-ico.svg";
import ShareBtnIco from "../../img/btn-share-ico.svg";
import AboutBtnIco from "../../img/btn-about-ico.svg";

const Title = () => {
  const navigate = useNavigate();

  const handleTitleBtn = () => {
    setTimeout(() => navigate("/form"), 300);
  };

  return (
      <div className={styles.titlePage}>
        <main className={styles.titlePage_main}>
          <h1 className={styles.titlePage_title}>
            <p>Эй Шеф!</p>
            <p>Что готовим сегодня?</p>
          </h1>
          <Button
            className={`${styles.titlePage_buttonMain} ${styles.buttonMain}`}
            onClick={handleTitleBtn}
          >
            <div className="">
              <p className={styles.buttonMain_txt}>Рецепт на сегодня</p>
              <img src={Arrow} alt="" className={styles.buttonMain_arrow} />
              <img src={MainBtnIco} alt="" className={styles.buttonMain_ico} />
            </div>
          </Button>
        </main>
        <div className={styles.titlePage_other}>
          <p className={styles.titlePage_otherTxt}>Другое</p>
          <div className={styles.titlePage_otherBtns}>
            <Button
              className={`${styles.titlePage_otherBtn} ${styles.otherBtn}`}
            >
              <img src={StoryBtnIco} alt="" className={styles.otherBtn_img} />
              <p className={styles.otherBtn_txt}>История</p>
            </Button>
            <Button
              className={`${styles.titlePage_otherBtn} ${styles.otherBtn}`}
            >
              <img src={ShareBtnIco} alt="" className={styles.otherBtn_img} />
              <p className={styles.otherBtn_txt}>Поделиться</p>
            </Button>
            <Button
              className={`${styles.titlePage_otherBtn} ${styles.otherBtn}`}
            >
              <img src={AboutBtnIco} alt="" className={styles.otherBtn_img} />
              <p className={styles.otherBtn_txt}>О боте</p>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Title;
