import Icons from "./Icons";
import { ListIconsStyled } from "./styles/ListIconsStyled";
import FacebookLogo from "../../images/icon-facebook.svg";
import PinterestLogo from "../../images/icon-pinterest.svg";
import InstagramLogo from "../../images/icon-instagram.svg";
const ListIcons = () => {
    return (
        <ListIconsStyled>
            <Icons alt="Facebook" src={FacebookLogo}></Icons>
            <Icons alt="Pinterest" src={PinterestLogo}></Icons>
            <Icons alt="Instagram" src={InstagramLogo}></Icons>
        </ListIconsStyled>
     );
}
 
export default ListIcons;