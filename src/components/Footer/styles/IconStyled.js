import styled from "styled-components";

export const IconStyled = styled.img`
   
    filter: invert(56%) sepia(14%) saturate(681%) hue-rotate(199deg) brightness(93%) contrast(87%);
    &:hover {
        filter: invert(49%) sepia(71%) saturate(1244%) hue-rotate(310deg) brightness(101%) contrast(97%);
        transition: 0.7s ease-in-out 0.2s;
        transform: scale(1.1);
    }
    width:30px;
`;
export const IconContainerStyled = styled.a`

  cursor: pointer;
  margin-left: 2em;
`;
