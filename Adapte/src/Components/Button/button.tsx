import { Link } from "react-router-dom";
interface ButtonProps {
  address: string;
  head?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ address, label = "Saber Mais" }) => {
  return (
    
    <Link
      to={address}
      type="button"
      className="bg-Black text-white font-semibold py-3 px-6 rounded-lg max-w-fit
      hover:bg-white hover:text-Black hover:border-Black transition-all duration-500 ease-in-out
      hover:border-solid hover:border-2 inline-block text-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="label"
    >
      {label}
    </Link>
  );
};

export default Button;
