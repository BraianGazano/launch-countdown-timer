import styled from "styled-components";

export const TimerStyled = styled.div`
    display:flex;
    justify-content:center;
    padding: 5em;
    & p{
        border-radius: 20px;
        font-size: 6rem;
        background: linear-gradient(180deg, hsl(236, 21%, 22%) 50%, hsl(236, 21%, 26%) 50%);
        padding: 0.6em;
        margin:0.5rem;
        color: hsl(345, 95%, 68%);
    }
    & span{
        color: hsl(237, 18%, 59%);
        text-transform: uppercase;
        letter-spacing: 0.5em;
        font-size: 1.5em;
        display:flex;
        justify-content:space-around;
        text-align:center;
    } 
`;    