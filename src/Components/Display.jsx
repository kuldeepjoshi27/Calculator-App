/* eslint-disable react/prop-types */
import styles from "./Display.module.css";

const Display = ({getvalue})=>{
  console.log(getvalue);
  return  <input className={styles.display} type="text" readOnly value={getvalue}></input>
}
export default Display;