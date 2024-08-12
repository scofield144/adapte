import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

export const SocialIcons = () => {
    return (
      <div className="h-20 flex gap-5 items-center">
        <a href="http://facebook.com" className="w-10" aria-label="Facebook" aria-hidden="false">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="http://instagram.com" className="w-10" aria-label="Instagram" aria-hidden="false">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    );
  };
  