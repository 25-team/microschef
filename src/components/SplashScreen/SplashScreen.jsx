import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/chefbot.json'
import styles from './SplashScreen.module.css'

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className={styles.splashContainer}>
      <div className={styles.animationWrapper}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={200}
          width={200}
        />
      </div>
      <h1 className={styles.title}>Chefbot</h1>
      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={styles.footer}>Powered by YandexGPT</p>
    </div>
  )
}

SplashScreen.propTypes = {
  onFinish: PropTypes.func.isRequired,
}

export default SplashScreen
