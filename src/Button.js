import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    //className이 랜덤으로 생성된다
    return (
        <button className={styles.btn}>{text}
        </button>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}
export default Button;