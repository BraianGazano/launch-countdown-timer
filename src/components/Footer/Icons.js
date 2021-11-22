import {IconStyled, IconContainerStyled} from "./styles/IconStyled";
export default function Icons({ src , alt }){
    return(
        <IconContainerStyled>
            <IconStyled alt={alt} src={src}></IconStyled>
        </IconContainerStyled>
    );
}