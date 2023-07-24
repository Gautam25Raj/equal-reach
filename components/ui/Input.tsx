interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  type,
  disabled,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      required={required}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full text-gray-600 px-4 py-3 border border-gray-200 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
