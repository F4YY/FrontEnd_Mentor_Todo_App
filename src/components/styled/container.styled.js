import styled from "styled-components";

export const Container = styled.div`
    //Primary:
    --Bright-Blue: hsl(220, 98%, 61%);
    --Check-Background: linear-gradient (90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    //Light Theme:
    --Very-Light-Gray: hsl(0, 0%, 98%);
    --Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
    --Light-Grayish-Blue-LT: hsl(233, 11%, 84%);
    --Light-Grayish-Blue-placeholder: hsl(236, 9%, 61%);
    --Very-Dark-Grayish-Blue: hsl(235, 19%, 35%);
    //Dark Theme:
    --Very-Dark-Blue: hsl(235, 21%, 11%);
    --Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);
    --Light-Grayish-Blue-DT: hsl(234, 39%, 85%);
    --Light-Grayish-Blue-hover: hsl(236, 33%, 92%);
    --Dark-Grayish-Blue: hsl(234, 11%, 52%);
    --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
    --Very-Dark-Grayish-Blue: hsl(237, 14%, 26%);
    *{
        margin:0;
    }
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
    --regular: 400;
    --bold: 700;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: flex-start;
    background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Blue)'};
`