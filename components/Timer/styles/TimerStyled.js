import styled from "styled-components";

export const TimerStyled = styled.div`
    display:flex;
    justify-content:center;
    padding: 5em;
    align-items: center;
    & p{
        border-radius: 20px;
        box-shadow: 0 0.5rem 1px hsl(234, 17%, 12%);
        font-size: 5rem;
        background: linear-gradient(180deg, hsl(236, 21%, 22%) 50%, hsl(236, 21%, 26%) 50%);
        padding: 0.6em;
        margin:1.5rem;
        color: hsl(345, 95%, 68%);
    }
    & span{
        color: hsl(237, 18%, 59%);
        text-transform: uppercase;
        letter-spacing: 0.5em;
        font-size: 1.3em;
        display:flex;
        justify-content:space-around;
    } 
`;    