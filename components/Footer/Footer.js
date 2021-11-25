import Mountains from "./Mountains";
import ListIcons from "./ListIcons";
import { FooterStyled } from "./styles/FooterStyled";
const Footer = () => {
    return (
        <FooterStyled>
            <ListIcons></ListIcons>
            <Mountains></Mountains>
        </FooterStyled>
      );
}

export default Footer;