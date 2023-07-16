import Image from 'next/image';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({ label, onClick, disabled, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`relative btn-rainbow py-3 px-12 text-white text-sm font-semibold uppercase tracking-widest transition-transform duration-200 active:scale-100 hover:scale-105 group ${
        fullWidth ? 'w-full' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      <div className="absolute w-full top-1/3 left-0 flex justify-center -z-10 group-hover:scale-105 group-active:scale-105">
        <Image src="/btn-shadow.svg" width={172} height={32} alt="logo" />
      </div>
    </button>
  );
};

export default Button;
