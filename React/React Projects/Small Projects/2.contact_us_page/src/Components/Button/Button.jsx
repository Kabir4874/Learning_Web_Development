import style from "./Button.module.css";

const Button = ({ text, icon, isOutLine, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${isOutLine ? style.outline_btn : style.primary_btn}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
