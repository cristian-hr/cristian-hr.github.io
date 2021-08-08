import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../scss/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/cristian-hr"><AiFillGithub className="iconsFooter" /></a>
      <a href="https://www.linkedin.com/in/cristian-hr"><AiFillLinkedin className="iconsFooter" /></a>
    </div>
  );
}

export default Footer;
