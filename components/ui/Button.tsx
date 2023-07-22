import Image from 'next/image';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ label, onClick, disabled, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`relative z-10 btn-rainbow py-3 px-12 block mx-auto md:mx-0 text-white text-sm font-semibold uppercase tracking-widest transition-transform shadow-md duration-200 active:scale-100 hover:scale-105 group btn-shadow ${
        fullWidth ? 'w-full' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

const FormButton = ({ label, type, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`relative z-10 btn-rainbow py-3 px-12 text-white text-sm font-semibold uppercase tracking-widest transition-transform shadow-md duration-200 active:scale-100 hover:scale-105 group btn-shadow ${
        fullWidth ? 'w-full' : ''
      }`}
      type={type}
    >
      {label}
    </button>
  );
};

export { FormButton };
export default Button;
