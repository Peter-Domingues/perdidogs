import Feed from "../Feed";
import { SendButton } from "../Form/pages/pages.styles";
import SearchBar from "../SearchBar";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-copyright">
          <p>
            &copy; 2024 Desenvolvido por Nathalia Fernandes e Peter Leidens. All
            rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
