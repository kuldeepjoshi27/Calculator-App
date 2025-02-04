/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({passValue}) =>{
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return <div className={styles.buttonsContainer}>
  {buttonNames.map((item) => (<button key={item} className={styles.button}
  onClick={() => passValue(item)}
  >{item}</button> ))}
  </div>
}   
export default Button;