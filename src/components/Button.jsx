/* eslint-disable react/prop-types */
function Button({ type, children, className, onClick }) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
