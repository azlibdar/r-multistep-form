/* eslint-disable react/prop-types */
function InputField({ required, type, placeholder, name, id, onChange, value }) {
  return (
    <input
      className="w-full py-3 px-3 text-base bg-transparent transition-all border border-primary-600 rounded-md text-secondary-50 placeholder:text-secondary-400 outline-none focus:bg-primary-800"
      required={required}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;
