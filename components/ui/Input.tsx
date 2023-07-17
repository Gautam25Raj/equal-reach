interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  type,
  disabled,
}: InputProps) => {
  return (
    <input
      type={type}
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="w-full text-gray-600 px-4 py-3 border border-gray-200 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
