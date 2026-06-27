function Button({
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      className="primary-btn"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;