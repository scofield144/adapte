import { Link } from "react-router-dom";
interface url {
  address: string;
  head?: string;
}

const Button: React.FC<url> = ({ address }) => {
  return (
    <button
      type="button"
      className="bg-Black 
      text-white font-semibold py-3 px-6 rounded-lg max-w-fit
      hover:bg-white hover:text-Black hover:border-Black transition-all duration-500 ease-in-out
      hover:border-solid hover:border-2"
      
    >
      <Link to={address}>Saber Mais</Link>
    </button>
  );
};

export default Button;
