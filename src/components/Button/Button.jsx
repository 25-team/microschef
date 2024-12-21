import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ children, isLoading, disabled, inactive,variant = 'default', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${isLoading ? styles.loading : ''} ${inactive ? styles.inactive : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? '...' : children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
}

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  variant: 'default',
}

export default Button
